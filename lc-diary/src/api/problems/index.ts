import { Problem } from "@/types/problems";
import { api } from "../axios.config";

export const addProblems = (problems: Problem[]) => {
  return api.post("/v1/problem/add", problems);
};

export const getProblem = (url: string) => {
  return api.post("/v1/problem", { URL: url });
};
