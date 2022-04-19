import React, { useEffect, useState } from 'react';
import AuthorizedTemplate from 'templates/AuthorizedTemplate';
import GridItem from 'components/GridItem/GridItem';
import ProgressBar from 'components/ProgressBar/ProgressBar';
import { motion } from 'framer-motion';
import { containerVariants } from 'lib/animations';
import { useIntersectionRef } from 'lib/useIntersectionRef';
import { collection, DocumentData, getDocs } from 'firebase/firestore';
import { Quiz } from 'types/quiz';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase';

interface PanelProps {
  quiz: Quiz[] | undefined;
}

interface Result {
  Title: string;
  Description: string;
  IconURL: string;
  Id: string;
  completed?: boolean;
}

interface Attempt {
  Id: string;
  Points: number;
  QuizId: string;
  isPassed: boolean;
}

const Results = ({ quiz }: PanelProps) => {
  const [sectionRef, intersection] = useIntersectionRef();
  const [user] = useAuthState(auth);

  const [results, setResults] = useState<Result[]>([]);

  const loadAttempts = async () => {
    if (user) {
      const attempts = await getDocs(
        collection(db, 'Users', user.uid, 'Attempts')
      );
      let attemptsList: DocumentData[] = [];
      attempts.forEach((docs) => {
        attemptsList.push({ ...docs.data(), Id: docs.id });
      });
      attemptsList = attemptsList.filter((attempt) => attempt.isPassed);

      const activeResults: Result[] = quiz ? [...quiz] : [];

      attemptsList.forEach((attempt) => {
        const activeAttempt = attempt as Attempt;
        const quizIndex = activeResults
          .map((result) => result.Id)
          .indexOf(activeAttempt.QuizId);
        if (quizIndex !== -1 && !activeResults[quizIndex].completed) {
          activeResults[quizIndex].completed = activeAttempt.isPassed;
        }
      });

      setResults(activeResults);
    }
  };

  useEffect(() => {
    loadAttempts();
  }, []);

  return (
    <AuthorizedTemplate title="Profil" description="Quization - profil">
      <ProgressBar
        value={results.filter((result) => result.completed).length}
        maxValue={results.length}
        title="Zaliczone testy"
      />
      <motion.div
        ref={sectionRef}
        variants={containerVariants}
        initial="hidden"
        animate={intersection?.isIntersecting ? 'show' : 'hidden'}
        className="mt-5 grid grid-auto gap-7"
      >
        {results.map(({ Id, IconURL, Title, completed }) => (
          <GridItem
            key={Id}
            image={IconURL}
            imageAlt={Title}
            heading={Title}
            content={completed ? 'Ukończono' : 'Nie ukończono'}
            badgeText="Zaliczone"
            type={completed ? 'active' : 'disabled'}
          />
        ))}
      </motion.div>
    </AuthorizedTemplate>
  );
};

export default Results;

export const getServerSideProps = async () => {
  const quizes = await getDocs(collection(db, 'Quiz'));
  const quizesList: DocumentData[] = [];
  quizes.forEach((docs) => {
    quizesList.push({ ...docs.data(), Id: docs.id });
  });

  return {
    props: {
      quiz: quizesList,
    },
  };
};
