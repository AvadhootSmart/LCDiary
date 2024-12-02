import { useState } from "react";
import axios from "axios";

export default function ListPreview({ hasItems }) {
    const [url, setUrl] = useState("");
    const handleURL = async () => {
        const response = await axios.post("http://localhost:5000/problem", {
            problemLink: url,
        });

        console.log(response.data);
    };

    const handleFinalizeList = async () => {
        return null;
    };
    return (
        <>
            <div className="bg-zinc-600 min-h-[80vh] w-[60vw] justify-self-center self-center mt-10 rounded-md">
                <div className="inputs h-[15%] w-full bg-white flex justify-between items-center p-10 rounded-md">
                    <div className="gap-4 flex">
                        <input
                            className="bg-zinc-400 text-black rounded-md border-2 border-black p-2"
                            type="text"
                            name="url"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="border-2 border-black p-2 rounded-md hover:bg-zinc-400 transition"
                            onClick={handleURL}
                        >
                            {">"}
                        </button>
                    </div>
                    <div>
                        <button type="submit" onClick={handleFinalizeList}>
                            Finalize your list
                        </button>
                    </div>
                </div>
                {hasItems ? (
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
                ) : (
                    <div className="h-[65vh] w-full flex text-white justify-center items-center">
                        <h1 className="text-2xl font-bold uppercase">
                            Enter the URL of the problem to add to the list
                        </h1>
                    </div>
                )}
            </div>
        </>
    );
}
