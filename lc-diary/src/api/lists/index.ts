import axios from "axios";
import { Problem } from "@/types/problems";
import { toast } from "sonner";

export const getUsersList = async (token: string) => {
  const response = await axios.get(
    `${import.meta.env.VITE_BACKEND_URL}/v1/list`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response.data;
};

export const createList = async (
  name: string,
  problems: Problem[],
  token: string,
) => {
  const response = await axios.post(
    `${import.meta.env.VITE_BACKEND_URL}/v1/list/create`,
    { name, problems },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  switch (response.status) {
    case 201:
      toast.success(`List ${name} Created`);
      break;
    case 401:
      toast.error(`List ${name} Already Exists`);
      break;
    default:
      toast.warning("Something went wrong");
  }
  return response.data;
};
