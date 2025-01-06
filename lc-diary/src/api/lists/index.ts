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
    try {
        const response = await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/v1/list/create`,
            { name, problems },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        );
        toast.success(`List ${name} Created`);
        return response.data;
    } catch {
        toast.error(`List ${name} Already Exists`);
        return null;
    }
};

export const getListById = async (id: string, token: string) => {
    const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/v1/list/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    );
    return response.data;
};

export const updatelist = async (
    id: string,
    problems: Problem[],
    token: string,
) => {
    const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/v1/list/update/${id}`,
        { problems },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    );
    return response.data;
};
