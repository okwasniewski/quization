import Question from 'components/Question/Question';
import React from 'react';
import AuthorizedTemplate from 'templates/AuthorizedTemplate';

function quiz() {
  return (
    <AuthorizedTemplate title="Quiz" description="Strona quizu">
      <div>
        <Question
          question="Na jaką ocenę zasługuje ten projekt?"
          questionType="input"
        />
        <Question
          question="Na jaką ocenę zasługuje ten projekt?"
          questionType="select"
          options={['Wiadomo, że 5', '5 elegancka', 'Piąteczka', 'Mocne 5']}
        />
      </div>
    </AuthorizedTemplate>
  );
}

export default quiz;
