import Hero from 'components/Hero/Hero';
import Question from 'components/Question/Question';
import { addDoc, collection, doc, getDoc, getDocs } from 'firebase/firestore';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import AuthorizedTemplate from 'templates/AuthorizedTemplate';
import { Attempt, Question as QuestionTypeArr, Quiz } from 'types/quiz';
import { db, auth } from '../../firebase';

interface SingleQuizProps {
  questions: QuestionTypeArr[];
  quiz?: Quiz;
}

function SingleQuiz({ questions, quiz }: SingleQuizProps) {
  const [user] = useAuthState(auth);
  const elapsedTime = useRef(new Date());
  const [activeQuestion, setActiveQuestion] = useState<number>(0);
  const [currentAnswer, setCurrentAnswer] = useState<string>('');
  const [answers, setAnswers] = useState<
    { answer: string; correct: boolean }[]
  >([]);

  const correctAnswers = useMemo(
    () => answers.filter(({ correct }) => correct)?.length,
    [answers]
  );
  const handleGoToNextQuestion = () => {
    if (activeQuestion < questions?.length) {
      setAnswers((prev) => [
        ...prev,
        {
          answer: currentAnswer,
          correct: currentAnswer === questions[activeQuestion].CorrectAnswer,
        },
      ]);
      setActiveQuestion(activeQuestion + 1);
    }
  };
  const handleSaveAttempt = async () => {
    if (!quiz || !user) {
      return;
    }
    const userCollection = collection(db, 'Users', user.uid, 'Attempts');
    let timeDiff = new Date().getTime() - elapsedTime.current.getTime();
    timeDiff /= 1000;
    const attempt: Attempt = {
      QuizId: quiz.Id,
      ElapsedTime: Math.round(timeDiff),
      FinishDate: new Date(),
      Points: correctAnswers,
      isPassed: correctAnswers / questions.length > 0.5,
    };
    const res = await addDoc(userCollection, attempt);
    if (res.id) {
      alert('Podejście zapisane');
    }
  };
  useEffect(() => {
    if (activeQuestion === questions.length) {
      handleSaveAttempt();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeQuestion]);
  return (
    <AuthorizedTemplate title="Quiz" description="Strona quizu">
      <Hero
        gradient
        small
        title={quiz?.Title || 'Quiz'}
        subtitle={quiz?.Description || ''}
        backgroundImage={quiz?.BackgroundURL || ''}
      />
      <div>
        {questions &&
          questions?.map(({ Title, QuestionType, Id, Answers }, index) => {
            if (activeQuestion !== index) {
              return null;
            }
            return (
              <Question
                key={Id}
                options={Answers}
                question={Title}
                handlePickAnswer={(answer) => {
                  setCurrentAnswer(answer);
                }}
                questionType={QuestionType}
                handleNext={handleGoToNextQuestion}
              />
            );
          })}
        {activeQuestion === questions?.length && (
          <div className="max-w-sm overflow-hidden shadow-lg py-8 px-4 bg-white rounded-xl min-w-full flex flex-col text-center items-center justify-center my-4">
            {correctAnswers / answers?.length < 0.5 ? (
              <h2 className="text-2xl font-bold">
                Niestety, nie udalo ci się :(
              </h2>
            ) : (
              <h2 className="text-2xl font-bold">Gratulacje, udało ci się!</h2>
            )}
            <h3 className="text-xl font-bold mt-4">
              Liczba poprawnych odpowiedzi: {correctAnswers}/{answers.length}
            </h3>
          </div>
        )}
      </div>
    </AuthorizedTemplate>
  );
}

export default SingleQuiz;

export async function getStaticPaths() {
  const quizes = await getDocs(collection(db, 'Quiz'));
  const params = quizes.docs.map((item) => ({
    params: {
      quizId: item.id,
    },
  }));
  return {
    paths: params,
    fallback: true, // false or 'blocking'
  };
}

export const getStaticProps = async (ctx: { params: { quizId: string } }) => {
  const quiz = await getDoc(doc(db, 'Quiz', ctx.params.quizId));
  const questionsQuery = await getDocs(
    collection(db, `Quiz/${ctx.params.quizId}/Question`)
  );
  const questions = [];
  for (const question of questionsQuery.docs) {
    const answersQuery = await getDocs(
      collection(db, `Quiz/${ctx.params.quizId}/Question/${question.id}/Answer`)
    );
    const Answers = [];
    for (const answer of answersQuery.docs) {
      Answers.push({ ...answer.data(), Id: answer.id });
    }
    questions.push({ ...question.data(), Answers });
  }

  return {
    props: {
      quiz: { ...quiz.data(), Id: quiz.id },
      questions,
    },
  };
};
