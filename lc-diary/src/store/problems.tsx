import { create } from "zustand";

type Problem = {
  id: string;
  title: string;
  status: boolean;
  topics: string[];
  difficulty: "Easy" | "Medium" | "Hard";
};

type ProblemStore = {
  problems: Problem[];
  addProblem: (problem: Problem) => void;
};

const useProblemStore = create<ProblemStore>((set) => ({
  problems: [],
  addProblem: (problem: Problem) => {
    set((state) => {
      const problemExists = state.problems.some(
        (p) => p.title.toLowerCase() === problem.title.toLowerCase(), // Or by title
      );

      if (problemExists) {
        alert(`Problem already exists:`);
        return state;
      }

      return { problems: [...state.problems, problem] };
    });
  },
}));

export default useProblemStore;
