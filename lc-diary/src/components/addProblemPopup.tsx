import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { LucidePlus } from "lucide-react";
import { getProblem } from "@/api/problems";
import { useState } from "react";
import { ReqInput } from "./reqInput";
import { Problem } from "@/types/problems";

export const AddProblemPopup = ({ onAddProblem }: {onAddProblem: (problem: Problem) => void}) => {
  const [url, setUrl] = useState<string>("");

  const handleAdd = async () => {
    const response = await getProblem(url);
    const problem = response.data;
    if (problem) onAddProblem(problem);
  };
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={"default"} className="rounded-t-xl text-xl">
          Add Problem{" "}
          <span>
            <LucidePlus />
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold font-Montserrat">
            Add LeetCode Problem
          </DialogTitle>
        </DialogHeader>
        <ReqInput value={url} onChange={(e) => setUrl(e.target.value)} />
        <Button onClick={handleAdd}>Add</Button>
      </DialogContent>
    </Dialog>
  );
};
