import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { useState } from "react";
import { ReqInput } from "./reqInput";
import { loginUser, registerUser } from "@/api/auth";
import { PasswordInput } from "./passwordInput";
import useUser from "@/store/users";
export const AuthenticationPopup = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { setUser } = useUser();

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [type, setType] = useState<"Register" | "Login">("Login");

  const handleRegister = async () => {
    const response = await registerUser(email, username, password);
    setUser(response);
  };
  const handleLogin = async () => {
    const response = await loginUser(username, password);
    setUser(response);
  };
  return (
    <>
      {type === "Register" ? (
        <Dialog>
          <DialogTrigger>{children}</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-2xl font-semibold font-Montserrat">
                Create An Account
              </DialogTitle>
            </DialogHeader>
            <ReqInput
              placeholder="Enter your email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
            <ReqInput
              isRequired
              placeholder="Enter your username"
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
            />
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <span className="text-black">
                <Button
                  variant={"link"}
                  className="p-0"
                  onClick={() => setType("Login")}
                >
                  Login
                </Button>
              </span>
            </p>
            <Button onClick={handleRegister}>Submit</Button>
          </DialogContent>
        </Dialog>
      ) : (
        <Dialog>
          <DialogTrigger>{children}</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-2xl font-semibold font-Montserrat">
                Login to your account
              </DialogTitle>
            </DialogHeader>
            <ReqInput
              isRequired
              placeholder="Enter your username"
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
            />
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-sm text-gray-500 flex gap-1 items-center">
              New here??{" "}
              <span className="text-black">
                <Button
                  variant={"link"}
                  className="p-0"
                  onClick={() => setType("Register")}
                >
                  Create an account
                </Button>
              </span>
            </p>
            <Button onClick={handleLogin}>Submit</Button>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};
