import React from 'react';
import AuthorizedTemplate from 'templates/AuthorizedTemplate';
import { data } from 'data/panel.json';
import Hero from 'components/Hero/Hero';

function Panel() {
  return (
    <AuthorizedTemplate title="Profil" description="Quization - profil">
      {data.map(({ title, description, background }, index) => (
        <Hero
          key={index}
          gradient
          small
          title={title}
          subtitle={description}
          backgroundImage={background}
          link="/quiz"
        />
      ))}
    </AuthorizedTemplate>
  );
}

export default Panel;
