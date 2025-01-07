export interface RegisterForm {
    name: string;
    email: string;
    password: string;
}


export interface RegisterDetailsForm {
    step1: string[]; // Array para los datos del paso 1
    step2: string[]; // Array para los datos del paso 2
    step3: string[]; // Array para los datos del paso 3
  }