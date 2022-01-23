import Button from 'components/Button/Button';
import React, { useState } from 'react';

interface QuestionProps {
  question?: string;
  htmlQuestion?: string;
  questionType: 'input' | 'select' | 'images';
  options?: string[];
}

function Question({
  question,
  questionType = 'input',
  htmlQuestion,
  options,
}: QuestionProps) {
  const [inputAnswer, setInputAnser] = useState('');

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputAnser(event.target.value);
  };

  return (
    <div className="max-w-sm overflow-hidden shadow-lg py-8 px-4 bg-white rounded-xl min-w-full text-center my-4">
      <h2 className="font-bold text-2xl mb-6">
        {htmlQuestion ? (
          <span dangerouslySetInnerHTML={{ __html: htmlQuestion }} />
        ) : (
          question
        )}
      </h2>
      {}
      {(questionType === 'select' || questionType === 'images') &&
        options?.map((option, index) => (
          <div key={index} className="form-control max-w-lg m-auto">
            <label className="cursor-pointer label">
              <span className="label-text">
                {questionType === 'images' ? (
                  <img style={{ width: '160px' }} src={option} alt="option" />
                ) : (
                  option
                )}
              </span>
              <input
                type="radio"
                name="answer"
                className="radio"
                value={questionType === 'images' ? index : option}
              />
            </label>
          </div>
        ))}

      <div className="mt-6">
        <Button onClick={() => {}} center>
          Dalej
        </Button>
      </div>
    </div>
  );
}

export default Question;
