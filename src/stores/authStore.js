import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';
import Cookies from 'js-cookie';

// Configurar la URL base de Axios
axios.defaults.baseURL = 'http://localhost:3001';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);
  const token = ref(Cookies.get('token') || null);

  const setAuthHeaders = (token) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  };

  const login = async (credentials) => {
    try {
      const response = await axios.get('/users', {
        params: {
          email: credentials.email,
          password: credentials.password,
        },
      });
      const foundUser = response.data[0];
      if (foundUser) {
        user.value = foundUser;
        token.value = 'fake-jwt-token'; // Puedes usar cualquier string como token
        setAuthHeaders(token.value);
        Cookies.set('token', token.value, { expires: 7 }); // Guardar el token en una cookie por 7 días
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      throw new Error('Login failed');
    }
  };

  const register = async (credentials) => {
    try {
      // Validar los datos de entrada
      if (!credentials.email || !credentials.username || !credentials.password) {
        throw new Error('All fields are required');
      }

      // Verificar si el usuario ya existe
      const existingUserResponse = await axios.get('/users');
      const users = existingUserResponse.data;

      // Asegurarse de que users es un array
      if (!Array.isArray(users)) {
        throw new Error('Unexpected response format');
      }

      const existingUser = users.find(user => user.email === credentials.email);
      if (existingUser) {
        throw new Error('User already exists');
      }

      // Generar un id manualmente
      const newUser = {
        id: Date.now().toString(), // Usar timestamp como id único
        ...credentials,
      };

      // Guardar el usuario en db.json
      const response = await axios.post('/users', newUser);
      user.value = response.data;
      token.value = 'fake-jwt-token'; // Puedes usar cualquier string como token
      setAuthHeaders(token.value);
      Cookies.set('token', token.value, { expires: 7 });
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data);
      } else {
        throw new Error(error.message);
      }
    }
  };

  const logout = () => {
    user.value = null;
    token.value = null;
    delete axios.defaults.headers.common['Authorization'];
    Cookies.remove('token');
  };

  const initialize = () => {
    const savedToken = Cookies.get('token');
    if (savedToken) {
      token.value = savedToken;
      setAuthHeaders(savedToken);
    }
  };

  return {
    user,
    token,
    login,
    register,
    logout,
    initialize,
  };
});