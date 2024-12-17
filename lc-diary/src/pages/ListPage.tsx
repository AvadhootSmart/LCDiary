import { getListById } from "@/api/lists";
import { followColumns } from "@/components/columns";
import DataTable from "@/components/data-table";
import useProblemStore from "@/store/problems";
import useUser from "@/store/users";
import { Lists } from "@/types/lists";
// import { Problem } from "@/types/problems";
import { SortingState } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const ListPage = () => {
  const { problems, loadProblems } = useProblemStore();
  // const [problems, setProblems] = useState<Problem[]>();
  const [listData, setListData] = useState<Lists>();
  const { user } = useUser();
  const [tableData, setTableData] = useState(problems);
  const [sorting, setSorting] = useState<SortingState>([]);
  // const [listName, setListName] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    const getListData = async () => {
      if (!user) return;
      const list = await getListById(id, user.token);
      loadProblems(list.problems);
      setListData(list);
    };

    getListData();
    setTableData(problems);
  }, [id, user, problems, loadProblems]);

  const handleUpdateList = (list: Lists) => {
    if (!id) return;
    navigate(`/list/edit/${list.name}`);
  };

  return (
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
                // addProblem={addProblem}
                // handleSubmit={handleSubmit}
                handleUpdateList={handleUpdateList}
                listName={listData.name}
                // setListName={setListName}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ListPage;
