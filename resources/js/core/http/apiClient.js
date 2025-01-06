import axios from 'axios';

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL, // Usa la URL de tu API desde las variables de entorno.
    timeout: 10000, // Tiempo límite para solicitudes (10 segundos).
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

// Interceptor para incluir el token de autorización en las solicitudes
apiClient.interceptors.request.use(
    (config) => {
        if (!config.skipAuth) { // Si skipAuth no está definido o es false
            const token = localStorage.getItem('token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Interceptor para manejar respuestas y errores globalmente
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            const { status } = error.response;
            if (status === 401) {
                // Manejar expiración del token o usuario no autenticado
                alert('Sesión expirada. Por favor, inicia sesión nuevamente.');
                localStorage.removeItem('token');
                window.location.href = '/login'; // Redirige al login
            } else if (status === 403) {
                alert('No tienes permisos para realizar esta acción.');
            } else if (status === 500) {
                alert('Error en el servidor. Inténtalo más tarde.');
            }
        } else if (error.request) {
            alert('No se pudo conectar con el servidor. Verifica tu conexión a Internet.');
        } else {
            alert('Ocurrió un error inesperado.');
        }
        return Promise.reject(error);
    }
);

export default apiClient;
