export type Problem = {
    id: string;
    title: string;
    status: boolean;
    topics: string[];
    difficulty: "Easy" | "Medium" | "Hard";
};
