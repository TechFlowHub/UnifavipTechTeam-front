import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const useApi = () => ({
  signin: async (email, password) => {
    try {
      const response = await api.post('/auth/login', { email, password });
      return response.data;
    } catch (error) {
     
      const errorMessage = error.response?.data?.message || "Erro ao fazer login.";
      return { error: errorMessage };
    }
  },
  
  logout: async () => {
    const response = await api.post('/auth/logout');
    return response.data;
  },

  validateToken: async (token) => {
    const response = await api.post('/auth/validate-token', {token});
    return response.data;
  },

  registerUser: async (userData) => {
    try {
      const response = await api.post('/auth/register', 
        userData,
        {
          headers: {
            authorization: `Bearer ${userData.token}`,
          },
        }     
      );
      return response.data;
    } catch (error) {
      console.error('Error registering user:', error || error.response);
      return false;
    }
  }

})