import { getListById } from "@/api/lists";
import { followColumns } from "@/components/columns";
import DataTable from "@/components/data-table";
import useUser from "@/store/users";
import { Lists } from "@/types/lists";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ListPage = () => {
    const [data, setData] = useState<Lists>();

    const { id } = useParams();
    const { user } = useUser();

    useEffect(() => {
        if (!id) return;
        const getListData = async () => {
            if (!user) return;
            const list = await getListById(id, user.token);
            setData(list);
        };

        getListData();
    }, [id, user]);

    return (
        <div className="gradient w-full h-screen text-white font-Montserrat flex items-center flex-col p-20">
            <div>
                {data && (
                    <h1 className="text-4xl text-center font-bold uppercase">
                        {data.name}
                    </h1>
                )}
                <div className="mt-60">
                    <DataTable columns={followColumns} />
                </div>
            </div>
        </div>
    );
};

export default ListPage;
