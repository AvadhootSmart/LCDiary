export type Problem = {
  id: string;
  title: string;
  status: boolean;
  topics: string[];
  difficulty: "Easy" | "Medium" | "Hard";
};

export const problems: Problem[] = [
  {
    id: "1",
    title: "Two Sum",
    status: true,
    topics: ["Array", "Hash Table"],
    difficulty: "Easy",
  },
];
