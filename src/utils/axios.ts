import axios from "axios";
import { getAuthToken } from "./services/authService";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api", // Define tu base URL
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Manejo de interceptores para solicitudes
apiClient.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
  },
  (error) => Promise.reject(error)
);

// Manejo de interceptores para respuestas
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error("No autorizado. Redirigir al login.");
      // Lógica para manejar redirecciones o logout
    }
    return Promise.reject(error);
  }
);

export default apiClient;



// import axios from 'axios';

// const axiosServices = axios.create();

// // interceptor for http
// axiosServices.interceptors.response.use(
//     (response) => response,
//     (error) => Promise.reject((error.response && error.response.data) || 'Wrong Services')
// );

// export default axiosServices;


