import { getUsersList } from "@/api/lists";
import useUser from "@/store/users";
import { Lists } from "@/types/lists";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { SheetProfileCard } from "@/components/sheetProfileCard";
import { Skeleton } from "@/components/ui/skeleton";

const ProfilePage = () => {
    const { user } = useUser();
    const [lists, setLists] = useState<Lists[]>([]);
    const [solvedProblems, setSolvedProblems] = useState<number[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/");
        }

        const getLists = async () => {
            if (!user) return;
            const lists = await getUsersList(user.token);
            setLists(lists);
            console.log(lists);

            const solvedProblems = lists.map((list: Lists) => {
                return list.problems.filter((problem) => problem.isSolved == true)
                    .length;
            });

            setSolvedProblems(solvedProblems);

            setLoading(false);
        };

        getLists();
    }, [user, navigate]);

    return (
        <div className="gradient w-full min-h-screen text-white font-Montserrat p-20">
            <h1 className="font-Montserrat text-4xl text-center">
                Welcome {user?.user.username}
            </h1>
            <div className="flex flex-col gap-8">
                <h1 className="text-4xl">Your Lists:</h1>
                {loading ? (
                    <div className="dark">
                        <Skeleton className="w-[50vw] h-[8vh]" />
                    </div>
                ) : (
                    <>
                        {lists.length === 0 && <h1>No Lists Found</h1>}
                        {lists.map((list, index) => (
                            <SheetProfileCard
                                key={list._id}
                                name={list.name}
                                id={list._id}
                                progress={solvedProblems[index]}
                                totalProblems={list.problems.length}
                            />
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default ProfilePage;
