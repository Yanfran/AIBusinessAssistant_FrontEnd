import axios from "@/utils/axios";
import { RegisterForm } from "../types/registerTypes";


export const createUser = async (formData: RegisterForm): Promise<RegisterForm> => {
    const { data } = await axios.post<RegisterForm>("/user/create", formData);
    return data;
};
