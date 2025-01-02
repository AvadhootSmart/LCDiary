import { getListById, updatelist } from "@/api/lists";
import GoBackAlert from "@/components/alert";
import { followColumns, previewColumns } from "@/components/columns";
import DataTable from "@/components/data-table";
import { FlipLink } from "@/components/flipLink";
// import { Button } from "@/components/ui/button";
import useProblemStore from "@/store/problems";
import useUser from "@/store/users";
import { Lists } from "@/types/lists";
import { SortingState } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ListPage = () => {
    const { id } = useParams();
    const { user } = useUser();
    const { problems, loadProblems, addProblem } = useProblemStore();

    const [listData, setListData] = useState<Lists>();
    const [tableData, setTableData] = useState(problems);
    const [sorting, setSorting] = useState<SortingState>([]);
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        if (!id) return;
        const getListData = async () => {
            if (!user) return;
            const list = await getListById(id, user.token);
            loadProblems(list.problems);
            setListData(list);
        };
        getListData();
    }, [id, user]);

    useEffect(() => {
        setTableData(problems);
    }, [problems]);

    const handleEditList = () => {
        setEditing(!editing);
    };

    const handleSubmit = async () => {
        try {
            if (!user || !id) return;

            await updatelist(id, tableData, user.token);
            setEditing(false);
        } catch (error) {
            console.log(error);
        }
    };

    const handleGoBack = () => {
        setEditing(!editing);
        if (!listData) return;
        setTableData(listData.problems);
    };

    return (
        <>
            {!editing ? (
                <div className="gradient w-full h-screen text-white font-Montserrat flex items-center flex-col p-20">
                    <div>
                        {listData && (
                            <>
                                <h1 className="text-4xl text-center font-bold uppercase">
                                    {listData.name}
                                </h1>
                                <div className="mt-60">
                                    <DataTable
                                        type="static"
                                        columns={followColumns}
                                        tableData={tableData || []}
                                        sorting={sorting}
                                        setSorting={setSorting}
                                        handleSync={handleSubmit}
                                        handleEditList={handleEditList}
                                        listName={listData.name}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            ) : (
                <div className="gradient relative w-full h-screen text-white font-Montserrat flex items-center flex-col p-20">
                    <GoBackAlert
                        handleGoBack={handleGoBack}
                        className="absolute top-20 left-20 z-50 dark"
                    >
                        <FlipLink>Go Back</FlipLink>
                    </GoBackAlert>

                    <div>
                        {listData && (
                            <>
                                <h1 className="text-4xl text-center font-bold uppercase">
                                    Edit {listData.name}
                                </h1>
                                <div className="mt-60">
                                    <DataTable
                                        type="editable"
                                        columns={previewColumns}
                                        tableData={tableData || []}
                                        sorting={sorting}
                                        setSorting={setSorting}
                                        addProblem={addProblem}
                                        handleSubmit={handleSubmit}
                                        listName={listData.name}
                                        nameInputDisabled
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default ListPage;
