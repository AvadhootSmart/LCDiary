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
import useProblemStore from "@/store/problems";
import { toast } from "sonner";
import LoaderBtn from "./loaderBtn";

export const AddProblemPopup = ({
    onAddProblem,
}: {
    onAddProblem: (problem: Problem) => void;
}) => {
    const [url, setUrl] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { problems } = useProblemStore();

    const handleAdd = async () => {
        if (problems.some((p) => p.URL === url)) {
            toast.error(`Problem already exists`);
            return;
        }
        setIsLoading(true);
        const response = await getProblem(url);
        const problem = response.data;
        if (problem) {
            setIsLoading(false);
            onAddProblem(problem);
        }
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
                <ReqInput
                    isRequired
                    placeholder="https://leetcode.com/problems/*"
                    label="URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
                <LoaderBtn handleClick={handleAdd} isLoading={isLoading}>
                    Add
                </LoaderBtn>
            </DialogContent>
        </Dialog>
    );
};
