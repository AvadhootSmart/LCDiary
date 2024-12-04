import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  useReactTable,
  ColumnDef,
  getCoreRowModel,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";
import { AddProblemPopup } from "./addProblemPopup";
import type { Problem } from "@/types/problems";
import useProblemStore from "@/store/problems";
import { createList } from "@/api/lists";
import useUser from "@/store/users";
import { toast } from "sonner";
import { ReqInput } from "./reqInput";

interface DataTableProps {
  columns: ColumnDef<Problem>[];
}

const DataTable: React.FC<DataTableProps> = ({ columns }) => {
  const { problems, addProblem } = useProblemStore();
  const { user } = useUser();
  const [tableData, setTableData] = useState(problems);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [listName, setListName] = useState("");

  useEffect(() => {
    setTableData(problems);
  }, [problems]);

  const handleSubmit = async () => {
    if (!user) return;
    if (tableData.length === 0) {
      toast.message("You need to have at least one problem in your list");
      return;
    }

    await createList(listName, tableData, user.token);
  };
  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      sorting,
      pagination: {
        pageSize: 5,
        pageIndex: 0,
      },
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="space-y-4">
      <div className="relative rounded-lg border border-border w-[70vw] dark">
        <div className="absolute -top-8 right-0">
          <AddProblemPopup onAddProblem={(problem) => addProblem(problem)} />
        </div>
        <div className="absolute -top-8 right-60">
          <Button
            variant={"default"}
            className="rounded-t-xl text-xl"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
        <div className="absolute -top-20 left-0">
          <ReqInput
            label="List Name"
            onChange={(e) => setListName(e.target.value)}
            placeholder="Enter your list name"
          />
        </div>
        <Table>
          <TableHeader className="text-2xl w-fit bg-black">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="p-4">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="text-xl text-white">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} className="">
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="p-4 place-content-center"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No Problems Added Yet..
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center space-x-2 dark">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

const flexRender = (render: any, context: any) => {
  return typeof render === "function" ? render(context) : render;
};

export default DataTable;
