import { Problem } from "./problems";

export type Lists = {
    _id: string;
    name: string;
    user: string;
    progress: number;
    problems: Problem[];
};
