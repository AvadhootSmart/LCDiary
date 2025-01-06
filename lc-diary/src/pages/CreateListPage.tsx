import { createList } from "@/api/lists";
import { previewColumns } from "@/components/columns";
import DataTable from "@/components/data-table";
import useProblemStore from "@/store/problems";
import useUser from "@/store/users";
import { SortingState } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const CreateListPage = () => {
  const { problems, addProblem } = useProblemStore();
  const { user } = useUser();
  const [tableData, setTableData] = useState(problems);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [listName, setListName] = useState("");
  useEffect(() => {
    setTableData(problems);
  }, [problems]);

  const handleSubmit = async () => {
    if (!user) {
      toast.warning("You need to be logged in to create a list");
      return;
    }
    if (tableData.length === 0) {
      toast.message("You need to have at least one problem in your list");
      return;
    }
    if (!listName) {
      toast.message("List name is required");
      return;
    }
    await createList(listName, tableData, user.token);
  };
  return (
    <div className="gradient w-full h-screen text-white font-Montserrat flex items-center flex-col p-20">
      <div>
        <h1 className="text-4xl text-center font-bold uppercase">
          Create Your List
        </h1>
        <div className="mt-60">
          <DataTable
            type="editable"
            columns={previewColumns}
            tableData={tableData}
            sorting={sorting}
            setSorting={setSorting}
            addProblem={addProblem}
            handleSubmit={handleSubmit}
            listName={listName}
            setListName={setListName}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateListPage;
