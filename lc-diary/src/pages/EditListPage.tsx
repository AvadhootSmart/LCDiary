// import { createList } from "@/api/lists";
import { previewColumns } from "@/components/columns";
import DataTable from "@/components/data-table";
import useProblemStore from "@/store/problems";
// import useUser from "@/store/users";
import { SortingState } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
// import { toast } from "sonner";

const EditListPage = () => {
  const location = useLocation();

  const { problems, addProblem } = useProblemStore();
  // const { user } = useUser();

  const [tableData, setTableData] = useState(problems);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [listName, setListName] = useState("");

  useEffect(() => {
    setTableData(problems);
  }, [problems]);

  useEffect(() => {
    if (location.pathname && "editList") {
      setListName(location.pathname.split("/")[3]);
    }
  }, [location]);

  // const handleSubmit = async () => {
  //   if (tableData.length === 0) {
  //     toast.message("You need to have at least one problem in your list");
  //     return;
  //   }
  //   if (!listName) {
  //     toast.message("List name is required");
  //     return;
  //   }
  //   if (!user) return;
  //   await createList(listName, tableData, user.token);
  // };
  return (
    <div className="gradient w-full h-screen text-white font-Montserrat flex items-center flex-col p-20">
      <div>
        <h1 className="text-4xl text-center font-bold uppercase">Edit list</h1>
        <div className="mt-60">
          <DataTable
            type="editable"
            columns={previewColumns}
            tableData={tableData}
            sorting={sorting}
            setSorting={setSorting}
            addProblem={addProblem}
            // handleSubmit={handleSubmit}
            listName={listName}
            setListName={setListName}
          />
        </div>
      </div>
    </div>
  );
};

export default EditListPage;
