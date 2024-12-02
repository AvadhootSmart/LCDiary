import { useState } from "react";
import { ButtonIcon } from "./ButtonIcon";
import { Progress } from "../../@/components/ui/progress";
import { Link } from "react-router-dom";
import { Button } from "../../@/components/ui/button";

export default function List() {
  const handleURL = async () => {
    return null;
  };

  const handleFinalizeList = async () => {
    return null;
  };
  return (
    <>
      <div className="bg-zinc-600 min-h-[80vh] w-[60vw] justify-self-center self-center mt-10 rounded-md">
        <div className="w-full h-[8vh] bg-black">
          <div className="w-full h-full bg-white rounded-md flex justify-between items-center px-10">
            <div className="w-full h-full flex flex-col justify-center">
              <div className="flex w-[31vw]  justify-between items-center">
                <span className="text-xl max-w-[40vw] max-h-6 whitespace-nowrap overflow-hidden overflow-ellipsis"></span>
                <p className="">200/340</p>
              </div>
              <Progress value={70} className="w-[60%] bg-zinc-500" />
            </div>
            <Button variant="outline">Filters</Button>
          </div>
        </div>
        <ul className="list-decimal text-white text-2xl h-full w-full px-10 py-5 flex flex-col grow-1">
          <li className="h-[15%]">
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-2">
                <h1 className="font-bold">Breadth First Search</h1>
                <div className="flex items-center">
                  <h1 className="text-lg text-green-400 mr-10">Easy</h1>
                  <h1 className="text-lg font-light bg-black p-1 rounded-full mr-1">
                    Dynamic Programming
                  </h1>
                  <h1 className="text-lg font-light bg-black p-1 rounded-full mr-1">
                    LinkedLists
                  </h1>
                  <h1 className="text-lg font-light bg-black p-1 rounded-full mr-1">
                    LinkedLists
                  </h1>
                  <h1 className="text-lg font-light bg-black p-1 rounded-full mr-1">
                    LinkedLists
                  </h1>
                </div>
              </div>
              <div>
                <button type="button">Done</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
