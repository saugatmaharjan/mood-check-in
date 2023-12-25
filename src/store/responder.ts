import { create } from 'zustand';

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
