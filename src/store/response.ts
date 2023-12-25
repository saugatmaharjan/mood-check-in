import { create } from 'zustand';
import { Answer, Response } from '../types';
import { questions } from '../data/questions';

interface ResponseState {
  responses: Record<number, Response>;
  setAnswer(questionId: number, answer: Answer): void;
}

const useResponses = create<ResponseState>()((set) => ({
  responses: questions.reduce(
    (acc, item) => ({ ...acc, [item.id]: { question: item } }),
    {},
  ),
  setAnswer: (questionId, answer) => {
    set(({ responses }) => ({
      responses: {
        ...responses,
        [questionId]: {
          ...responses[questionId],
          answer,
        },
      },
    }));
  },
}));

export default useResponses;
