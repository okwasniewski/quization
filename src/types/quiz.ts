export interface Quiz {
  BackgroundURL: string;
  Id: string;
  IconURL: string;
  Title: string;
  Description: string;
}

// eslint-disable-next-line no-shadow
export enum QuestionTypeEnum {
  RadioSelect,
  RadioSelectPhotos,
  FreeAnswer,
}
export interface Answer {
  PhotoURL: string | undefined;
  Title: string;
  Id: string;
}

export interface Question {
  Id: string;
  Title: string;
  CorrectAnswer: string;
  Answers: Answer[];
  QuestionType: QuestionTypeEnum;
}

export interface Attempt {
  FinishDate: Date;
  Points: number;
  QuizId: string;
  isPassed: boolean;
  ElapsedTime: number;
}
