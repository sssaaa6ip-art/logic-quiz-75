
export enum Language {
  EN = 'EN',
  AR = 'AR'
}

export enum QuestionType {
  MCQ = 'MCQ',
  TRUE_FALSE = 'TRUE_FALSE'
}

export interface Question {
  id: number;
  type: QuestionType;
  text: {
    en: string;
    ar: string;
  };
  options?: {
    en: string[];
    ar: string[];
  };
  correctAnswer: string | number; // Index for MCQ, 'true' or 'false' for TF
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  userAnswers: (string | number | null)[];
  isFinished: boolean;
  language: Language;
}
