import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { Button } from "../../@/components/ui/button";
import { useUser } from "@clerk/clerk-react";

export default function Profile() {
    const { user } = useUser();
    //getLists here

    return (
        <div className="min-h-screen w-full py-20 bg-zinc-900">
            <div className="flex justify-center">
                <h1 className="text-white font-bold text-[3.5rem] uppercase overflow-hidden">
                    Welcome {user.firstName}
                </h1>
            </div>
            <div className="w-full h-full px-14 flex flex-col">
                <h1 className="text-white font-bold text-[3.5rem] uppercase overflow-hidden justify-self-start">
                    Your Lists
                </h1>
                <ul className="w-[50vw] h-[8vh] bg-black">
                    <li className="w-full h-full bg-neutral-400 rounded-md flex justify-between items-center px-10">
                        <div className="w-full h-full flex flex-col justify-center">
                            <div className="flex max-w-[25vw] justify-between items-center">
                                <h1 className="text-xl max-w-[80%] max-h-6 whitespace-nowrap overflow-hidden overflow-ellipsis">
                                    Google 450
                                </h1>
                                <p className="">300/340</p>
                            </div>
                            <Progress
                                value={Math.floor((300 / 340) * 100)}
                                className="w-[60%] bg-zinc-500"
                            />
                        </div>

                        <Link to={"/List/id"}>
                            <Button variant={"ghost"}>View</Button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
