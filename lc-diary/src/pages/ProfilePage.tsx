import { getUsersList } from "@/api/lists";
import useUser from "@/store/users";
import { Lists } from "@/types/lists";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const ProfilePage = () => {
  const { user } = useUser();
  const [lists, setLists] = useState<Lists[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }

    const getLists = async () => {
      if (!user) return;
      const lists = await getUsersList(user.token);
      setLists(lists);
    };

    getLists();
  }, [user, navigate]);

  return (
    <div className="gradient w-full h-screen text-white font-Montserrat p-20">
      <h1 className="font-Montserrat text-4xl text-center">
        Welcome {user?.user.username}
      </h1>
      <div>
        <h1 className="text-4xl">Your Lists:</h1>
        {lists.length === 0 && <h1>No Lists Found</h1>}
        {lists.map((list) => (
          <div key={list._id}>
            <h1>{list.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
