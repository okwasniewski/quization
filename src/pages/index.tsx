import Hero from 'components/Hero/Hero';
import GridItem from 'components/GridItem/GridItem';
import type { NextPage } from 'next';
import UnauthorizedTemplate from 'templates/UnauthorizedTemplate';
import { motion } from 'framer-motion';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { collection, DocumentData, getDocs } from 'firebase/firestore';
import { Quiz } from 'types/quiz';
import { auth, db } from '../firebase';

interface HomePageProps {
  quiz: Quiz[] | undefined;
}

const Home: NextPage<HomePageProps> = ({ quiz }: HomePageProps) => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push('/profile');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  if (loading) {
    return null;
  }
  if (!user) {
    return (
      <UnauthorizedTemplate
        title="Strona główna"
        description="Strona główna Quizaiton"
      >
        <Hero
          backgroundImage="Hero.png"
          title="Europejskie ramy kompetencji cyfrowych"
          subtitle={`Kompetencje cyfrowe, obok czytania, pisania, umiejętności matematycznych
        i językowych, stanowią zespół fundamentalnych umiejętności
        współczesnego człowieka.`}
        />
        <motion.div className="grid grid-auto gap-7">
          {quiz?.map(({ Description, IconURL, Title }, index) => (
            <GridItem
              key={index}
              image={IconURL}
              imageAlt="imageAlt"
              heading={Title}
              content={Description}
            />
          ))}
        </motion.div>
      </UnauthorizedTemplate>
    );
  }
  return null;
};

export default Home;

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
