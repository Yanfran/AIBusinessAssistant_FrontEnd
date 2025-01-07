// utils/services/authService.ts
import axios from "@/utils/axios";
import { LoginForm, LoginResponse } from "../types/authTypes";

export const loginUser = async (formData: LoginForm): Promise<LoginResponse> => {
  const { data } = await axios.post<LoginResponse>("/auth/login", formData);
  // Guarda el token en localStorage o cookies
  localStorage.setItem("authToken", data.token);
  return data;
};

export const getAuthToken = (): string | null => {
  return localStorage.getItem("authToken");
};


export const logout = async () => {
    try {
      // Hacer una solicitud al backend para cerrar sesión
      await fetch("/auth/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });
  
      // Eliminar el token del almacenamiento local
      localStorage.removeItem("authToken");
  
      // Redirigir al usuario a la página de inicio de sesión
      window.location.href = "/auth/auth2/login";
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };
  