// utils/types.ts

export interface OnboardingInicial {
    userId: string; 
    category: string;
    name: string;
    icon: string;    
}


export interface UserOnboarding {
    userId: string;  // ID del usuario
    step1: string[]; // Array para los datos del paso 1
    step2: string[]; // Array para los datos del paso 2
    step3: string[]; // Array para los datos del paso 3
  }