<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="w-full max-w-md bg-white shadow-md rounded-lg p-8">
            <h2 class="text-2xl font-poppins-italic text-center text-gray-700 mb-6">Iniciar Sesión</h2>
            <form @submit.prevent="login" class="space-y-4">
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">Correo:</label>
                    <input
                        type="email"
                        v-model="email"
                        id="email"
                        required
                        class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                    />
                </div>
                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700">Contraseña:</label>
                    <input
                        type="password"
                        v-model="password"
                        id="password"
                        required
                        class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                    />
                </div>
                <button
                    type="submit"
                    class="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
                >
                    Iniciar Sesión
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import apiClient from '../../api.js';

export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        async login() {
            try {
                const response = await apiClient.post('/login', {
                    email: this.email,
                    password: this.password,
                });
                const token = response.data.token;
                localStorage.setItem('token', token);
                alert('Inicio de sesión exitoso');
            } catch (error) {
                console.error(error);
                alert('Error al iniciar sesión');
            }
        },
    },
};
</script>
