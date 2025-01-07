import axios from 'axios';

const axiosGeneral = axios.create();

// Interceptor para manejar respuestas
axiosGeneral.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject((error.response && error.response.data) || 'Wrong Services')
);

export default axiosGeneral;
