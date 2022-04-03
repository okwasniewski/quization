import Button from 'components/Button/Button';
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import AuthorizedTemplate from 'templates/AuthorizedTemplate';
import { QuestionTypeEnum } from 'types/quiz';
import { db, auth } from '../firebase';

export default function Admin() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user] = useAuthState(auth);
  const router = useRouter();
  const [QuizId, setQuizId] = useState('');
  const [Question, setQuestion] = useState('');
  const [CorrectAnswer, setCorrectAnswer] = useState(0);
  const [questionType, setQuestionType] = useState<QuestionTypeEnum>(0);
  const [allAnswers, setAllAnswers] = useState<string[]>(['', '', '', '']);

  const updateAnswers = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newAnswers = [...allAnswers];
    newAnswers[index] = e.target.value;
    setAllAnswers(newAnswers);
  };

  const clearForm = () => {
    setQuestion('');
    setCorrectAnswer(0);
    setQuestionType(0);
    setAllAnswers(['', '', '', '']);
  };

  const handleSubmit = async () => {
    try {
      const questionId = await addDoc(
        collection(db, 'Quiz', QuizId, 'Question'),
        {
          Title: Question,
          CorrectAnswer,
          QuestionType: questionType,
        }
      );

      let correctAnswerId = '';

      allAnswers
        .filter((answer) => answer.trim() !== '')
        .forEach(async (answer, index) => {
          const answerData = await addDoc(
            collection(db, 'Quiz', QuizId, 'Question', questionId.id, 'Answer'),
            {
              Title:
                questionType !== QuestionTypeEnum.RadioSelectPhotos
                  ? answer
                  : '',
              PhotoURL:
                questionType === QuestionTypeEnum.RadioSelectPhotos
                  ? answer
                  : '',
            }
          );
          if (index === CorrectAnswer) {
            correctAnswerId = answerData.id;
            await updateDoc(
              doc(db, 'Quiz', QuizId, 'Question', questionId.id),
              {
                CorrectAnswer: correctAnswerId,
              }
            );
          }
        });

      alert('Dodano pytanie');
      clearForm();
    } catch (error) {
      alert('Błąd');
    }
  };

  useEffect(() => {
    const checkPermissions = async () => {
      if (user) {
        await getDoc(doc(db, 'Users', user.uid)).then((userData) => {
          const userInfo = userData.data();
          if (userInfo?.role === 'admin') {
            setIsLoading(false);
          } else {
            router.push('/');
          }
        });
      }
    };
    checkPermissions();
  }, [router, user]);

  if (isLoading) {
    return null;
  }
  return (
    <AuthorizedTemplate title="Admin" description="Panel admina">
      <div className="text-center">
        <h1 className="font-semibold text-2xl py-5">Dodaj pytanie</h1>
        <div className="grid grid-cols-1 max-w-2xl mx-auto md:grid-cols-2">
          <input
            type="text"
            placeholder="Quiz ID"
            value={QuizId}
            onChange={(e) => setQuizId(e.target.value)}
            className="input w-full max-w-xs block m-auto mb-2"
          />
          <input
            type="text"
            placeholder="Pytanie"
            value={Question}
            onChange={(e) => setQuestion(e.target.value)}
            className="input w-full max-w-xs block m-auto mb-2"
          />
          <input
            type="number"
            value={CorrectAnswer}
            max={3}
            min={0}
            onChange={(e) => setCorrectAnswer(+e.target.value)}
            placeholder="Poprawna odpowiedź (string)"
            className="input w-full max-w-xs block m-auto mb-2"
          />
          <select
            className="select w-full max-w-xs block m-auto mb-2"
            value={questionType}
            onChange={(e) => setQuestionType(Number(e.target.value))}
          >
            {Object.values(QuestionTypeEnum)
              .filter((el) => typeof el === 'number')
              .map((key) => (
                <option key={key} value={key}>
                  {QuestionTypeEnum[+key]}
                </option>
              ))}
          </select>

          {allAnswers.map((answer, index) => (
            <input
              key={index}
              type="text"
              value={answer}
              onChange={(e) => updateAnswers(e, index)}
              placeholder={`Odpowiedź ${index + 1}`}
              className="input w-full max-w-xs block m-auto mb-2"
            />
          ))}
        </div>
        <div className="flex flex-wrap justify-center mt-6">
          <Button outline onClick={clearForm}>
            Wyczyść
          </Button>
          <Button onClick={handleSubmit}>Dodaj</Button>
        </div>
      </div>
    </AuthorizedTemplate>
  );
}
