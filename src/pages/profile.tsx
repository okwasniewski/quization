import React, { useEffect, useState } from 'react';
import AuthorizedTemplate from 'templates/AuthorizedTemplate';
import Image from 'next/image';
import StatsBox from 'components/StatsBox/StatsBox';
import { motion } from 'framer-motion';
import Alert from 'components/Alert/Alert';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
} from 'firebase/firestore';
import { Quiz } from 'types/quiz';
import { auth, db } from '../firebase';

const Profile = () => {
  const [user, , error] = useAuthState(auth);
  const [attemptsCount, setAttemptsCount] = useState<string>('-');
  const [pointsEarned, setPointsEarned] = useState<string>('-');
  const [elapsedTime, setElapsedTime] = useState<string>('-');
  const [lastQuiz, setLastQuiz] = useState<Quiz>();
  useEffect(() => {
    const getData = async () => {
      if (!user) {
        return;
      }
      const attempts = collection(db, `Users/${user.uid}/Attempts`);
      const data = await getDocs(attempts);
      let timeInSeconds = 0;
      let points = 0;
      data.forEach((attempt) => {
        points += attempt.data().Points;
        timeInSeconds += attempt.data().ElapsedTime;
      });
      const lastAttempt = query(
        attempts,
        orderBy('FinishDate', 'desc'),
        limit(1)
      );
      const res1 = await getDocs(lastAttempt);
      res1.forEach(async (result) => {
        const quiz = await getDoc(doc(db, 'Quiz', result.data().QuizId));
        setLastQuiz(quiz.data() as Quiz);
      });
      setAttemptsCount(data.size.toString());
      setElapsedTime((timeInSeconds / 60).toFixed(2));
      setPointsEarned(points.toString());
    };
    getData();
  }, [user]);

  if (error) {
    return <h1>Coś poszło nie tak</h1>;
  }

  return (
    <AuthorizedTemplate title="Profil" description="Quization - profil">
      <Alert title="Gratulacje! Idzie ci coraz lepiej" />
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="grid grid-cols-1 gap-6 my-8 xl:grid-cols-3 rounded-box"
      >
        <div className="card shadow-lg compact side bg-base-100">
          <div className="flex-row items-center card-body">
            <div>
              <div className="avatar">
                <div className="rounded-full w-14 h-14 mr-4 shadow">
                  <Image
                    src={
                      user?.photoURL
                        ? `https://res.cloudinary.com/demo/image/fetch/${user.photoURL}`
                        : '/sample-avatar.jpeg'
                    }
                    alt="Informacja i dane"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
            </div>
            <div>
              <h2 className="card-title">{user?.displayName || ''}</h2>
              <p className="text-base-content text-opacity-40">Początkujący</p>
            </div>
          </div>
        </div>
        <StatsBox title={attemptsCount} subtitle="Ukończonych podejść" />
        <div className="card row-span-2 shadow-lg compact bg-base-100">
          <Image
            src={lastQuiz?.IconURL || '/information.svg'}
            alt="Informacja i dane"
            width={200}
            height={150}
          />
          <div className="flex-row items-center space-x-4 card-body">
            <div>
              <h2 className="card-title">Ostatnio rozwiązywany quiz</h2>
              <p className="text-base-content text-opacity-40">
                {lastQuiz?.Title}
              </p>
            </div>
          </div>
        </div>
        <StatsBox
          title={pointsEarned}
          subtitle="Zdobytych punktów"
          textStyle="text-green-500"
        />
        <StatsBox
          title={elapsedTime}
          subtitle="Minut nauki"
          textStyle="text-green-500"
        />
      </motion.div>
    </AuthorizedTemplate>
  );
};

export default Profile;
