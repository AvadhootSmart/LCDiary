import { previewColumns } from "@/components/columns";
import DataTable from "@/components/data-table";

const CreateListPage = () => {
  return (
    <div className="gradient w-full h-screen text-white font-Montserrat flex items-center flex-col p-20">
      <div>
        <h1 className="text-4xl text-center font-bold uppercase">
          Create Your List
        </h1>
        <div className="mt-60">
          <DataTable columns={previewColumns} />
        </div>
      </div>
    </div>
  );
};

export default CreateListPage;
