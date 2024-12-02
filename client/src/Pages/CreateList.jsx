import { columns } from "../Components/Columns";
import { DataTable } from "../Components/data-table";
import ListPreview from "../Components/ListPreview";
import { problems } from "../static_data/data";

export default function CreateList() {
  return (
    <>
      <div className="dark bg-zinc-900">
        <div className="min-h-screen w-full flex flex-col justify-start items-start px-20 py-[8vh]">
          <h1 className="text-white font-bold text-[2.5rem]">
            CREATE YOUR LIST
          </h1>
          <div className="container mx-auto py-10">
            <DataTable columns={columns} data={problems}  />
          </div>
          {/* <ListPreview /> */}
        </div>
      </div>
    </>
  );
}
