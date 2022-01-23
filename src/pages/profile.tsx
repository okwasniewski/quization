import React from 'react';
import AuthorizedTemplate from 'templates/AuthorizedTemplate';
import Image from 'next/image';
import StatsBox from 'components/StatsBox/StatsBox';

const Profile = () => (
  <AuthorizedTemplate title="Profil" description="Quization - profil">
    <div className="alert alert-success">
      <div className="flex-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="w-6 h-6 mx-2 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
          />
        </svg>
        <p>Gratulacje! Idzie ci coraz lepiej</p>
      </div>
    </div>
    <div className="grid grid-cols-1 gap-6 my-8 xl:grid-cols-3 rounded-box">
      <div className="card shadow-lg compact side bg-base-100">
        <div className="flex-row items-center card-body">
          <div>
            <div className="avatar">
              <div className="rounded-full w-14 h-14 mr-4 shadow">
                <Image
                  src="/sample-avatar.jpeg"
                  alt="Informacja i dane"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="card-title">Jan Kowalski</h2>
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
    </div>
  </AuthorizedTemplate>
);

export default Profile;
