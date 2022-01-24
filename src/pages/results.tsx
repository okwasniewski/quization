import React from 'react';
import AuthorizedTemplate from 'templates/AuthorizedTemplate';
import GridItem from 'components/GridItem/GridItem';
import gridData from 'data/front-page-grid.json';
import ProgressBar from 'components/ProgressBar/ProgressBar';
import { motion } from 'framer-motion';
import { containerVariants } from 'lib/animations';
import { useIntersectionRef } from 'lib/useIntersectionRef';

const Results = () => {
  const [sectionRef, intersection] = useIntersectionRef();
  return (
    <AuthorizedTemplate title="Profil" description="Quization - profil">
      <ProgressBar value={3} maxValue={5} title="Zaliczone testy" />
      <motion.div
        ref={sectionRef}
        variants={containerVariants}
        initial="hidden"
        animate={intersection?.isIntersecting ? 'show' : 'hidden'}
        className="mt-5 grid grid-auto gap-7"
      >
        {gridData.gridData.map(({ imageAlt, imagePath, title }, index) => {
          const completed =
            index === gridData.gridData.length - 1 ||
            index === gridData.gridData.length - 2;
          return (
            <GridItem
              key={index}
              image={imagePath}
              type={completed ? 'disabled' : 'active'}
              badgeText="Zaliczone"
              imageAlt={imageAlt}
              heading={title}
              content={completed ? 'Nie rozpoczęto' : 'Ocena: 4.5'}
            />
          );
        })}
      </motion.div>
    </AuthorizedTemplate>
  );
};

export default Results;
