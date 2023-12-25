import { Option, Question } from '../types';

export const questionOptions: Record<string, Option> = {
  worst: {
    name: 'worst',
    label: 'Worst',
    weight: 1,
  },
  bad: {
    name: 'bad',
    label: 'Bad',
    weight: 2,
  },
  ok: {
    name: 'ok',
    label: 'Ok',
    weight: 3,
  },
  good: {
    name: 'good',
    label: 'Good',
    weight: 4,
  },
  best: {
    name: 'best',
    label: 'Best',
    weight: 5,
  },
};

export const questions: Question[] = [
  {
    id: 1,
    order: 1,
    label: 'How are you doing?',
    options: Object.values(questionOptions),
  },
  {
    id: 2,
    order: 2,
    label: 'Workload?',
    options: Object.values(questionOptions),
  },
  {
    id: 3,
    order: 3,
    label: 'Work life balance?',
    options: Object.values(questionOptions),
  },
  {
    id: 4,
    order: 4,
    label: 'Recognition?',
    options: Object.values(questionOptions),
  },
  {
    id: 5,
    order: 5,
    label: 'Team health?',
    options: Object.values(questionOptions),
  },
];

export const MAX_WEIGHT = questions.length * 5;
export const MIN_WEIGHT = questions.length * 1;
