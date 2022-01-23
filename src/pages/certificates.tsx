import React from 'react';
import AuthorizedTemplate from 'templates/AuthorizedTemplate';
import GridItem from 'components/GridItem/GridItem';
import { gridData } from 'data/front-page-grid.json';

const Certificates = () => (
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
        <p>Ostatnio zdobyty certyfikat: Informacja i dane</p>
      </div>
    </div>
    <div className="grid grid-auto gap-7 my-5">
      {gridData.map(({ imageAlt, imagePath, subtitle, title }, index) => (
        <GridItem
          image={imagePath}
          type={
            index === gridData.length - 1 || index === gridData.length - 2
              ? 'disabled'
              : 'active'
          }
          badgeText="Zdobyto: 20.01.2021"
          imageAlt={imageAlt}
          heading={title}
          content={subtitle}
        />
      ))}
    </div>
  </AuthorizedTemplate>
);

export default Certificates;
