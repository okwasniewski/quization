import React from 'react';
import AuthorizedTemplate from 'templates/AuthorizedTemplate';
import GridItem from 'components/GridItem/GridItem';
import { gridData } from 'data/front-page-grid.json';
import ProgressBar from 'components/ProgressBar/ProgressBar';

const Results = () => (
  <AuthorizedTemplate title="Profil" description="Quization - profil">
    <ProgressBar value={3} maxValue={5} title="Zaliczone testy" />
    <div className="grid my-5 grid-auto gap-7">
      {gridData.map(({ imageAlt, imagePath, subtitle, title }, index) => {
        const completed =
          index === gridData.length - 1 || index === gridData.length - 2;
        return (
          <GridItem
            image={imagePath}
            type={completed ? 'disabled' : 'active'}
            badgeText="Zaliczone"
            imageAlt={imageAlt}
            heading={title}
            content={completed ? 'Nie rozpoczęto' : 'Ocena: 4.5'}
          />
        );
      })}
    </div>
  </AuthorizedTemplate>
);

export default Results;
