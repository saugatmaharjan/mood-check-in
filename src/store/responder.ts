import { create } from 'zustand';

interface ResponderState {
  name: string;
  sharedWithName: string;
  setName(name: string): void;
  setSharedWithName(name: string): void;
}

const useResponder = create<ResponderState>()((set) => ({
  name: 'Anonymous',
  sharedWithName: '',
  setName: (responderName) => {
    set({ name: responderName });
  },
  setSharedWithName: (newname) => {
    set({ sharedWithName: newname });
  },
}));

export default useResponder;
