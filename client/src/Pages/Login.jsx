import { Link } from "react-router-dom";
export default function Login() {
    return (
        <>
            <div className="bg-zinc-900 h-screen w-full flex">
                <Link
                    className="absolute top-10 left-10 text-white border-2 border-white px-3 py-2 rounded-md hover:bg-white hover:text-black transition"
                    to={"/"}
                >
                    Back
                </Link>
                <div className="login bg-black h-screen w-[50%] text-white font-bold flex justify-center items-center ">
                    <div className="flex flex-col justify-center items-center gap-10">
                        <h1 className="text-4xl font-bold uppercase">Login</h1>
                        <input
                            type="text"
                            placeholder="Username"
                            className="rounded-md p-2"
                        />
                        <input
                            type="password"
                            placeholder="password"
                            className="rounded-md p-2"
                        />
                        <button
                            type="submit"
                            className="border-2 border-white p-2 rounded-md"
                        >
                            Submit
                        </button>
                    </div>
                </div>
                <div className="register h-screen w-[50%] text-white font-bold flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center gap-5">
                        <h1 className="text-4xl font-bold uppercase">Register</h1>
                        <input
                            type="text"
                            placeholder="username"
                            className="rounded-md p-2"
                        />
                        <input type="text" placeholder="email" className="rounded-md p-2" />
                        <input
                            type="password"
                            placeholder="password"
                            className="rounded-md p-2"
                        />
                        <button
                            type="submit"
                            className="border-2 border-white p-2 rounded-md"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
