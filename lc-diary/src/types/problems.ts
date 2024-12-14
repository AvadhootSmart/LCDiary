export type Problem = {
  URL: string;
  title: string;
  isSolved: boolean;
  topics: string[];
  difficulty: "Easy" | "Medium" | "Hard";
};
