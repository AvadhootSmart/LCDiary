import { Link } from "react-router-dom";
import { Button } from "../../@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";

export default function Navbar() {
  const { user } = useUser();
  return (
    <>
      <div className="text-white sticky top-0 left-0 z-[1000] bg-transparent h-[20vh] w-full flex justify-center items-center">
        <div className="flex gap-10 border-2 border-white rounded-full px-10 py-4">
          <div className="self-center">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>

          {user && (
            <Link to={`/Profile/${user.firstName}`}>
              <Button variant="ghost">Profile</Button>
            </Link>
          )}
          <Link to={"/CreateList"}>
            <Button variant="ghost">Create List</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
