import React from 'react';

interface PageTemplateProps {
  children: React.ReactNode;
}

const SinglePageTemplate = ({ children }: PageTemplateProps) => (
  <div className="flex flex-col justify-center items-center py-12 shadow-2xl md:flex-row rounded-xl">
    {children}
  </div>
);

export default SinglePageTemplate;
