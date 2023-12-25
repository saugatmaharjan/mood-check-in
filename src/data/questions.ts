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
    label: "How'r you doing?",
    options: [
      {
        name: 'worst',
        label: 'Yes',
        weight: 5,
      },
      {
        name: 'worst',
        label: 'Kinda',
        weight: 4,
      },
      {
        name: 'worst',
        label: 'A little bit',
        weight: 3,
      },
      {
        name: 'worst',
        label: "I didn't wanna work today",
        weight: 2,
      },
      {
        name: 'worst',
        label: 'Need help',
        weight: 1,
      },
    ],
  },
  {
    id: 2,
    order: 2,
    label: 'Do you feel productive at work today?',
    options: [
      {
        name: 'worst',
        label: 'Highly Motivated',
        weight: 5,
      },
      {
        name: 'worst',
        label: 'Yes',
        weight: 4,
      },
      {
        name: 'worst',
        label: "I don't know",
        weight: 3,
      },
      {
        name: 'worst',
        label: 'Need a break',
        weight: 2,
      },
      {
        name: 'worst',
        label: 'No',
        weight: 1,
      },
    ],
  },
  {
    id: 3,
    order: 3,
    label: 'Do you feel motivated with your work today?',
    options: Object.values(questionOptions),
  },
  {
    id: 4,
    order: 4,
    label: 'Any blockage in your current tasks?',
    options: [
      {
        name: 'worst',
        label: 'No',
        weight: 5,
      },
      {
        name: 'worst',
        label: 'Not until now',
        weight: 4,
      },
      {
        name: 'worst',
        label: 'Got the solution',
        weight: 3,
      },
      {
        name: 'worst',
        label: 'Being frustated',
        weight: 2,
      },
      {
        name: 'worst',
        label: 'No',
        weight: 1,
      },
    ],
  },
  {
    id: 5,
    order: 5,
    label: 'How is your life after work?',
    options: [
      {
        name: 'worst',
        label: 'family Time',
        weight: 5,
      },
      {
        name: 'worst',
        label: 'Enjoy with friends',
        weight: 4,
      },
      {
        name: 'worst',
        label: 'Household works',
        weight: 3,
      },
      {
        name: 'worst',
        label: 'Boring',
        weight: 2,
      },
      {
        name: 'worst',
        label: 'Lonely',
        weight: 1,
      },
    ],
  },
  {
    id: 6,
    order: 6,
    label: 'How well do you sleep',
    options: [
      {
        name: 'worst',
        label: 'Sound sleep',
        weight: 5,
      },
      {
        name: 'worst',
        label: 'Normal',
        weight: 4,
      },
      {
        name: 'worst',
        label: 'Average',
        weight: 3,
      },
      {
        name: 'worst',
        label: 'Disturbed Sleep',
        weight: 2,
      },
      {
        name: 'worst',
        label: 'Not enough',
        weight: 1,
      },
    ],
  },
  {
    id: 7,
    order: 7,
    label: 'Rate your energy level?',
    options: [
      {
        name: 'worst',
        label: 'Top of the world',
        weight: 5,
      },
      {
        name: 'worst',
        label: 'Excellent',
        weight: 4,
      },
      {
        name: 'worst',
        label: 'Doing Good',
        weight: 3,
      },
      {
        name: 'worst',
        label: 'OK',
        weight: 2,
      },
      {
        name: 'worst',
        label: 'Struggling',
        weight: 1,
      },
    ],
  },
];

export const MAX_WEIGHT = questions.length * 5;
export const MIN_WEIGHT = questions.length * 1;
