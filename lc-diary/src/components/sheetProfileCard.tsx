import { Link } from "react-router";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";

interface SheetProfileCardProps {
  name: string;
  progress: number;
  totalProblems: number;
  id?: string;
}
export const SheetProfileCard = ({
  name,
  id,
  progress,
  totalProblems,
}: SheetProfileCardProps) => {
  return (
    <>
      <ul className="w-[50vw] h-[8vh] bg-black">
        <li className="w-full h-full bg-neutral-800 rounded-md flex justify-between items-center px-10">
          <div className="w-full h-full flex flex-col justify-center">
            <div className="flex max-w-[25vw] justify-between items-center">
              <h1 className="text-xl max-w-[80%] max-h-6 whitespace-nowrap overflow-hidden overflow-ellipsis">
                {name}
              </h1>
              <p className="">{`${progress}/${totalProblems}`}</p>
            </div>
            <Progress
              value={Math.floor((progress / totalProblems) * 100)}
              className="w-[60%] bg-zinc-500 dark mt-2"
            />
          </div>

          <Link to={`/List/${id}`}>
            <Button variant={"ghost"}>Follow</Button>
          </Link>
          {/* <Link to={`/List/edit/${id}`}> */}
          {/*   <Button variant={"ghost"}>Edit</Button> */}
          {/* </Link> */}
        </li>
      </ul>
    </>
  );
};
