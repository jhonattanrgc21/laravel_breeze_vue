import apiClient from './apiClient'; // Importa el cliente configurado con Axios

const api = {
    /**
     * Realiza una solicitud GET
     * @param {string} url - La URL del endpoint
     * @param {Object} [params] - Parámetros de consulta opcionales
     * @param {Object} [config] - Configuración adicional
     * @returns {Promise}
     */
    get(url, params = {}, config = {}) {
        return apiClient.get(url, {
            params,
            ...config,
        });
    },

    /**
     * Realiza una solicitud POST
     * @param {string} url - La URL del endpoint
     * @param {Object} [data] - Datos del cuerpo de la solicitud
     * @param {Object} [config] - Configuración adicional
     * @returns {Promise}
     */
    post(url, data = {}, config = {}) {
        return apiClient.post(url, data, config);
    },

    /**
     * Realiza una solicitud PATCH
     * @param {string} url - La URL del endpoint
     * @param {Object} [data] - Datos del cuerpo de la solicitud
     * @param {Object} [config] - Configuración adicional
     * @returns {Promise}
     */
    patch(url, data = {}, config = {}) {
        return apiClient.patch(url, data, config);
    },

    /**
     * Realiza una solicitud DELETE
     * @param {string} url - La URL del endpoint
     * @param {Object} [config] - Configuración adicional
     * @returns {Promise}
     */
    delete(url, config = {}) {
        return apiClient.delete(url, config);
    },
};

export default api;
