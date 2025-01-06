import { Link } from "react-router";
import { FlipLink } from "./flipLink";
import { AuthenticationPopup } from "./authenticationPopup";
import useUser from "@/store/users";

export const Navbar = () => {
  const { user } = useUser();
  return (
    <div className="dark fixed top-0 backdrop-blur text-xl flex justify-between items-center h-20 w-full p-20">
      <Link to="/" className="font-Montserrat p-4">
        <FlipLink>LCDIARY</FlipLink>
      </Link>
      <div className="flex gap-2">
        {user && (
          <>
            <Link to="/profile" className="font-Montserrat p-4">
              <FlipLink>Profile</FlipLink>
            </Link>
            <Link to="/createList" className="font-Montserrat p-4">
              <FlipLink>Create List</FlipLink>
            </Link>
          </>
        )}
        {!user && (
          <AuthenticationPopup>
            <FlipLink>SignIN</FlipLink>
          </AuthenticationPopup>
        )}
      </div>
    </div>
  );
};
