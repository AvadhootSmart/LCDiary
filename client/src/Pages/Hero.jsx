import { GridBackgroundDemo } from "../Components/GridBackground";
import ImageStack from "../Components/ImageStack";
import Navbar from "../Components/Navbar";

export default function Hero() {
    return (
        <div className="bg-zinc-900 -mt-[20vh]">
            <div className="h-screen w-full flex justify-center gap-[25vw] p-10 items-center">
                <div className="flex flex-col gap-5">
                    <h1 className="text-white font-bold text-[4.5rem] text-center">
                        Your TO-DO list for <br /> your DSA Prep
                    </h1>
                    <button
                        type="button"
                        className="text-white font-bold w-[30%] self-center border-2 border-white rounded-md p-5 hover:bg-gray-800 transition"
                    >
                        Know More
                    </button>
                </div>
            </div>
        </div>
    );
}
