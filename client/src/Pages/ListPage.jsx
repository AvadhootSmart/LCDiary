import { GridBackgroundDemo } from "../Components/GridBackground";
import { Progress } from "@radix-ui/react-progress";
import List from "../Components/List";

export default function ListPage() {
  return (
    <>
      <div className="dark ">
        <GridBackgroundDemo>
          <div className="min-h-screen w-full py-20">
            <div className="flex justify-center">
              <h1 className="text-white font-bold text-[3.5rem] uppercase overflow-hidden">
                Google 450
              </h1>
            </div>
            <div className="w-full h-full px-14 flex justify-center items-center ">
              <List />
            </div>
          </div>
        </GridBackgroundDemo>
      </div>
    </>
  );
}
