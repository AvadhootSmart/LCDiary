import { Link } from "react-router";
import { Button } from "./ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { FlipLink } from "./flipLink";

export const Navbar = () => {
  return (
    <div className="dark fixed top-12 backdrop-blur border-2 border-white text-xl rounded-full p-2 flex justify-center gap-2 items-center">
      <Link to="/profile" className="font-Montserrat p-4">
        <FlipLink>Profile</FlipLink>
      </Link>
      <Link to="/createList" className="font-Montserrat p-4">
        <FlipLink>Create List</FlipLink>
      </Link>
      <SignedOut>
        <SignInButton>
          <div className="p-4">
            <FlipLink>SignIn</FlipLink>
          </div>
        </SignInButton>
      </SignedOut>
      <div className="p-4 pt-6">
        <SignedIn>
          <UserButton appearance={{ elements: { userButtonAvatarBox: "size-8" } }} />
        </SignedIn>
      </div>
    </div>
  );
};
