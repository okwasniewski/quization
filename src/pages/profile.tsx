import React from 'react';
import AuthorizedTemplate from 'templates/AuthorizedTemplate';
import Image from 'next/image';
import StatsBox from 'components/StatsBox/StatsBox';
import { motion } from 'framer-motion';
import Alert from 'components/Alert/Alert';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

const Profile = () => {
  const [user, , error] = useAuthState(auth);
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
        <StatsBox title="75%" subtitle="Ukończonych quizów" />
        <div className="card row-span-2 shadow-lg compact bg-base-100">
          <Image
            src="/information.svg"
            alt="Informacja i dane"
            width={200}
            height={150}
          />
          <div className="flex-row items-center space-x-4 card-body">
            <div>
              <h2 className="card-title">Kontynuuj ostatni quiz</h2>
              <p className="text-base-content text-opacity-40">
                Informacja i dane
              </p>
            </div>
          </div>
        </div>
        <StatsBox
          title="90%"
          subtitle="Poprawnych odpowiedzi"
          textStyle="text-green-500"
        />
        <StatsBox
          title="6"
          subtitle="Poprawnie rozwiązanych quizów"
          textStyle="text-green-500"
        />
      </motion.div>
    </AuthorizedTemplate>
  );
};

export default Profile;
