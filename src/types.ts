export type Question = {
  id: number;
  order: number;
  label: string;
  options: Option[];
};

export type Option = {
  name: string;
  label: string;
  weight: number;
};

export type Answer = Option;

export type Response = {
  question: Question;
  answer?: Answer;
};
