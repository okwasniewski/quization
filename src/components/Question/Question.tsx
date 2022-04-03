import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import Image from 'next/image';
import React, { useMemo, useState } from 'react';
import { QuestionTypeEnum, Answer } from 'types/quiz';

interface QuestionProps {
  question?: string;
  questionType: QuestionTypeEnum;
  handleNext: () => void;
  correctAnswer: string;
  handlePickAnswer: (answer: string) => void;
  options?: Answer[];
}

function Question({
  question,
  handleNext,
  handlePickAnswer,
  correctAnswer,
  questionType = QuestionTypeEnum.RadioSelect,
  options,
}: QuestionProps) {
  const [inputAnswer, setInputAnser] = useState('');
  const [isAnswerPicked, setIsAnswerPicked] = useState<boolean>(false);
  const correctAnswerText = useMemo(
    () => options?.find((option) => option.Id === correctAnswer),
    [correctAnswer, options]
  );
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputAnser(event.target.value);
    if (
      event.target.value.toLowerCase() ===
      correctAnswerText?.Title.toLowerCase()
    ) {
      setIsAnswerPicked(true);
      handlePickAnswer(correctAnswerText?.Id || '');
    }
  };

  return (
    <div className="max-w-sm overflow-hidden shadow-lg py-8 px-4 bg-white rounded-xl min-w-full text-center my-4">
      <h2 className="font-bold text-2xl mb-6">{question}</h2>
      {questionType === QuestionTypeEnum.FreeAnswer && (
        <Input type="text" value={inputAnswer} onChange={inputHandler} />
      )}
      {(questionType === QuestionTypeEnum.RadioSelect ||
        questionType === QuestionTypeEnum.RadioSelectPhotos) &&
        options?.map(({ PhotoURL, Title, Id }, index) => (
          <div key={index} className="form-control max-w-lg m-auto">
            <label className="cursor-pointer label">
              <span className="label-text">
                {questionType === QuestionTypeEnum.RadioSelectPhotos ? (
                  <Image
                    width={160}
                    height={160}
                    src={
                      PhotoURL
                        ? `https://res.cloudinary.com/demo/image/fetch/${PhotoURL}`
                        : ''
                    }
                    alt="option"
                  />
                ) : (
                  Title
                )}
              </span>
              <input
                type="radio"
                name="answer"
                className="radio"
                onChange={() => {
                  setIsAnswerPicked(true);
                  handlePickAnswer(Id);
                }}
                value={
                  questionType === QuestionTypeEnum.RadioSelectPhotos
                    ? index
                    : Title
                }
              />
            </label>
          </div>
        ))}

      <div className="mt-6">
        <Button
          disabled={
            !(questionType === QuestionTypeEnum.FreeAnswer || isAnswerPicked)
          }
          onClick={() => {
            if (isAnswerPicked) {
              handleNext();
            }
          }}
          center
        >
          Dalej
        </Button>
      </div>
    </div>
  );
}

export default Question;
