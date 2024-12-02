import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

export const AddProblemPopup = () => {
  return (
    <Dialog>
      <DialogTrigger>Add Problems</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <Button>Cancel</Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
