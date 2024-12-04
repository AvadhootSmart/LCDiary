export type Problem = {
  URL: string;
  title: string;
  status: boolean;
  topics: string[];
  difficulty: "Easy" | "Medium" | "Hard";
};
