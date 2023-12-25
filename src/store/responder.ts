import { create } from 'zustand';
import { Answer, Response } from '../types';
import { questions } from '../data/questions';

interface ResponderState {
  name: string;
  setName(name: string): void;
}

const useResponder = create<ResponderState>()((set) => ({
  name: 'Anonymous',
  setName: (responderName) => {
    set({ name: responderName });
  },
}));

export default useResponder;
