import { toast } from "sonner";
import { api } from "../axios.config";

export const loginUser = async (username: string, password: string) => {
  const response = await api.post("/v1/auth/login", { username, password });
  switch (response.status) {
    case 200:
      toast.success("Logged In successfully");
      break;
    case 401:
      toast.error("Invalid email or password");
      break;
    default:
      toast.warning("An unexpected error occured");
  }
  return response.data;
};

export const registerUser = async (
  email: string,
  username: string,
  password: string,
) => {
  const response = await api.post("/v1/auth/register", {
    email,
    username,
    password,
  });
  switch (response.status) {
    case 201:
      toast.success("Account created successfully");
      break;
    case 400:
      toast.error("User already exist");
      break;
    default:
      toast.warning("An unexpected error occured");
  }

  return response.data;
};
