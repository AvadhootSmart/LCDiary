import React from "react";
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
import { ReqInput } from "./reqInput";

interface DataTableProps {
    columns: ColumnDef<Problem>[];
    tableData: Problem[];
    sorting: SortingState;
    setSorting: React.Dispatch<React.SetStateAction<SortingState>>;
    addProblem?: (problem: Problem) => void;
    handleSubmit?: () => void;
    handleSync?: () => void;
    handleEditList?: () => void;
    listName: string;
    setListName?: React.Dispatch<React.SetStateAction<string>>;
    type: "static" | "editable";
    nameInputDisabled?: boolean;
}

const DataTable: React.FC<DataTableProps> = ({
    columns,
    tableData,
    type,
    sorting,
    listName,
    handleSync,
    setSorting,
    addProblem,
    handleSubmit,
    handleEditList,
    setListName,
    nameInputDisabled,
}) => {
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
                {type == "editable" ? (
                    <>
                        <div className="absolute -top-[82px] left-0">
                            <ReqInput
                                isRequired
                                className="bg-neutral-700"
                                label="List Name"
                                onChange={(e) => setListName(e.target.value)}
                                value={listName}
                                placeholder="Enter your list name"
                                disabled={nameInputDisabled}
                            />
                        </div>
                        <div className="absolute -top-8 right-0">
                            <Button
                                variant={"default"}
                                className="rounded-t-xl text-xl"
                                onClick={handleSubmit}
                            >
                                Submit
                            </Button>
                        </div>

                        {addProblem && (
                            <div className="absolute -top-9 right-32">
                                <AddProblemPopup
                                    onAddProblem={(problem) => addProblem(problem)}
                                />
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        <div className="absolute -top-8 right-0">
                            <Button
                                variant={"default"}
                                className="rounded-t-xl text-xl"
                                onClick={handleSync}
                            >
                                Sync
                            </Button>
                        </div>
                        <div className="absolute -top-8 right-28">
                            <Button
                                variant={"default"}
                                className="rounded-t-xl text-xl"
                                onClick={handleEditList}
                            >
                                Edit List
                            </Button>
                        </div>
                    </>
                )}
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
