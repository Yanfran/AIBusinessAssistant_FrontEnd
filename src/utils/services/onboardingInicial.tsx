// utils/services/onboardingService.ts
import axios from "@/utils/axios";
import { OnboardingInicial, UserOnboarding } from "../types/onboardingInicial";

export const onboardingInicial = async (): Promise<OnboardingInicial[]> => {
    try {
        const { data } = await axios.get<OnboardingInicial[]>("/onboarding");
        return data;
    } catch (error) {
        console.error("Error fetching onboarding data:", error);
        throw error; // Re-throw the error to be handled by the caller
    }
};

export const createUserOnboarding = async (formData: UserOnboarding): Promise<UserOnboarding> => {
    const { data } = await axios.post<UserOnboarding>("/user-onboarding", formData);
    return data;
};

export const onboardingInicialUser = async (userId: string): Promise<OnboardingInicial[]> => {
    try {
        const { data } = await axios.get<OnboardingInicial[]>(`/onboarding/user?userId=${userId}`);
        return data;
    } catch (error) {
        console.error("Error fetching onboarding data:", error);
        throw error; // Re-lanzamos el error para que el llamador lo maneje
    }
};