import { ColumnDef } from "@tanstack/react-table";
import { Problem } from "@/data/problems";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { LucideArrowUpDown } from "lucide-react";

const sortingOrder = ["Easy", "Medium", "Hard"];

export const followColumns: ColumnDef<Problem>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        className="size-5"
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        className="size-5"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "difficulty",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-xl"
        >
          Difficulty{" "}
          <span>
            <LucideArrowUpDown />
          </span>
        </Button>
      );
    },
    sortingFn: (rowA, rowB, columnId) => {
      const valueA = rowA.getValue(columnId) as string;
      const valueB = rowB.getValue(columnId) as string;
      return sortingOrder.indexOf(valueA) - sortingOrder.indexOf(valueB);
    },
    cell: ({ row }) => {
      const difficulty = row.getValue("difficulty") as string;
      return (
        <h1
          className={cn("text-md", {
            "text-green-500": difficulty === "Easy",
            "text-yellow-500": difficulty === "Medium",
            "text-red-500": difficulty === "Hard",
          })}
        >
          {difficulty}
        </h1>
      );
    },
  },
  {
    accessorKey: "topics",
    header: "Topics",
    cell: ({ row }) => (
      <div className="flex flex-wrap gap-1 w-fit">
        {row.original.topics.map((topic: string) => (
          <Badge key={topic} variant="outline" className="text-md">
            {topic}
          </Badge>
        ))}
      </div>
    ),
  },
];
export const previewColumns: ColumnDef<Problem>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "difficulty",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-xl"
        >
          Difficulty{" "}
          <span>
            <LucideArrowUpDown />
          </span>
        </Button>
      );
    },
    sortingFn: (rowA, rowB, columnId) => {
      const valueA = rowA.getValue(columnId) as string;
      const valueB = rowB.getValue(columnId) as string;
      return sortingOrder.indexOf(valueA) - sortingOrder.indexOf(valueB);
    },
    cell: ({ row }) => {
      const difficulty = row.getValue("difficulty") as string;
      return (
        <h1
          className={cn("text-md", {
            "text-green-500": difficulty === "Easy",
            "text-yellow-500": difficulty === "Medium",
            "text-red-500": difficulty === "Hard",
          })}
        >
          {difficulty}
        </h1>
      );
    },
  },
  {
    accessorKey: "topics",
    header: "Topics",
    cell: ({ row }) => (
      <div className="flex flex-wrap gap-1 w-fit">
        {row.original.topics.map((topic: string) => (
          <Badge key={topic} variant="outline" className="text-md">
            {topic}
          </Badge>
        ))}
      </div>
    ),
  },
];
