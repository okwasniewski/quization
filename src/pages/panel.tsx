import React from 'react';
import AuthorizedTemplate from 'templates/AuthorizedTemplate';
import Hero from 'components/Hero/Hero';
import { collection, DocumentData, getDocs } from 'firebase/firestore';
import { Quiz } from 'types/quiz';
import { db } from '../firebase';

interface PanelProps {
  quiz: Quiz[] | undefined;
}

function Panel({ quiz }: PanelProps) {
  return (
    <AuthorizedTemplate title="Profil" description="Quization - profil">
      {quiz &&
        quiz.map(({ Title, Description, BackgroundURL, Id }, index) => (
          <Hero
            key={index}
            gradient
            small
            title={Title}
            subtitle={Description}
            backgroundImage={BackgroundURL}
            link={`/quiz/${Id}`}
          />
        ))}
    </AuthorizedTemplate>
  );
}

export default Panel;

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
