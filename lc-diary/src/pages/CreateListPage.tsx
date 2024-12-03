import { previewColumns } from "@/components/columns";
import DataTable from "@/components/data-table";

const CreateListPage = () => {
  return (
    <div className="gradient w-full h-screen text-white font-Montserrat flex items-center flex-col py-20">
      <div>
        <h1 className="text-4xl font-bold uppercase">
          Create Your List
        </h1>
        <div className="mt-10">
          <DataTable columns={previewColumns} />
        </div>
      </div>
    </div>
  );
};

export default CreateListPage;
