import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";

interface LoaderBtnProps {
    isLoading?: boolean;
    handleClick?: () => void;
    children: React.ReactNode;
    className?: string;
}

export default function LoaderBtn({
    isLoading,
    handleClick,
    children,
    className,
}: LoaderBtnProps) {
    return (
        <Button
            onClick={handleClick}
            disabled={isLoading}
            data-loading={isLoading}
            className={cn("group relative disabled:opacity-100", className)}
        >
            <span className="group-data-[loading=true]:text-transparent">
                {children}
            </span>
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <LoaderCircle
                        className="animate-spin"
                        size={16}
                        strokeWidth={2}
                        aria-hidden="true"
                    />
                </div>
            )}
        </Button>
    );
}
