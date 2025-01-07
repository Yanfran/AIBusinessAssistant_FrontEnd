import axios from "@/utils/axios";
import { RegisterForm, RegisterDetailsForm } from "../types/registerTypes";


export const createUser = async (formData: RegisterForm): Promise<RegisterForm> => {
    const { data } = await axios.post<RegisterForm>("/user/create", formData);
    return data;
};

export const createUserDetails = async (formData: RegisterDetailsForm): Promise<RegisterDetailsForm> => {
    const { data } = await axios.post<RegisterDetailsForm>("/user/details", formData);
    return data;
};