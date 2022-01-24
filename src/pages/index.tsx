import Hero from 'components/Hero/Hero';
import GridItem from 'components/GridItem/GridItem';
import type { NextPage } from 'next';
import UnauthorizedTemplate from 'templates/UnauthorizedTemplate';
import gridData from 'data/front-page-grid.json';
import { containerVariants } from 'lib/animations';
import { useIntersectionRef } from 'lib/useIntersectionRef';
import { motion } from 'framer-motion';

const Home: NextPage = () => {
  const [sectionRef, intersection] = useIntersectionRef();
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
      <motion.div
        ref={sectionRef}
        variants={containerVariants}
        initial="hidden"
        animate={intersection?.isIntersecting ? 'show' : 'hidden'}
        className="grid grid-auto gap-7"
      >
        {gridData.gridData.map(
          ({ imageAlt, imagePath, subtitle, title }, index) => (
            <GridItem
              key={index}
              image={imagePath}
              imageAlt={imageAlt}
              heading={title}
              content={subtitle}
            />
          )
        )}
      </motion.div>
    </UnauthorizedTemplate>
  );
};

export default Home;
