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
        <Question
          question="Na jaką ocenę zasługuje ten projekt?"
          htmlQuestion='Co się stanie po kliknięciu tego przycisku? <img style="display: inline; width: 120px;" src="https://javabeat.net/wp-content/uploads/2016/12/JavaScript-Snippets-Close-Window.jpg"/>'
          questionType="select"
          options={['Okno się zamknie', 'okno się zduplikuje']}
        />
        <Question
          question="Wybierz zdjęcie oceny"
          questionType="images"
          options={[
            'https://dynanet.pl/wp-content/uploads/2021/02/3-Number-PNG.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/NYCS-bull-trans-4-red.svg/2048px-NYCS-bull-trans-4-red.svg.png',
            'https://us.123rf.com/450wm/kchung/kchung1708/kchung170800249/83599317-red-number-5-3d-rendering-graphic-isolated-on-white-background.jpg?ver=6',
          ]}
        />
      </div>
    </AuthorizedTemplate>
  );
}

export default quiz;
