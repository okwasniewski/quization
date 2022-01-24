import React from 'react';
import AuthorizedTemplate from 'templates/AuthorizedTemplate';
import GridItem from 'components/GridItem/GridItem';
import gridData from 'data/front-page-grid.json';
import { useIntersectionRef } from 'lib/useIntersectionRef';
import { motion } from 'framer-motion';
import { containerVariants } from 'lib/animations';
import Alert from 'components/Alert/Alert';

const Certificates = () => {
  const [sectionRef, intersection] = useIntersectionRef();
  return (
    <AuthorizedTemplate title="Profil" description="Quization - profil">
      <Alert title="Ostatnio zdobyty certyfikat: Informacja i dane" />
      <motion.div
        ref={sectionRef}
        variants={containerVariants}
        initial="hidden"
        animate={intersection?.isIntersecting ? 'show' : 'hidden'}
        className="mt-5 grid grid-auto gap-7"
      >
        {gridData.gridData.map(
          ({ imageAlt, imagePath, subtitle, title }, index) => (
            <GridItem
              key={index}
              image={imagePath}
              type={
                index === gridData.gridData.length - 1 ||
                index === gridData.gridData.length - 2
                  ? 'disabled'
                  : 'active'
              }
              badgeText="Zdobyto: 20.01.2021"
              imageAlt={imageAlt}
              heading={title}
              content={subtitle}
            />
          )
        )}
      </motion.div>
    </AuthorizedTemplate>
  );
};

export default Certificates;
