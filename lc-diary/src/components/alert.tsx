import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";

interface GoBackAlertProps {
  handleGoBack: () => void;
  children: React.ReactNode;
  className: string;
}
export default function GoBackAlert({
  handleGoBack,
  className,
  children,
}: GoBackAlertProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger className={cn(className)}>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure? You have unsaved changes
          </AlertDialogTitle>
          <AlertDialogDescription>
            Take a moment to review the changes you have made.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleGoBack}>Okay</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
