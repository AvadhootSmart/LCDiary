import { create } from "zustand";

type User = {
  token: string;
  user: {
    _id: string;
    username: string;
    email: string;
    lists: string[];
  };
};

type UserStore = {
  user: User | null;
  setUser: (user: User | null) => void;
};

const useUser = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

export default useUser;
