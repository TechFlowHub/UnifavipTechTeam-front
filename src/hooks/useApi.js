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
    return response;
  },

  validateToken: async (token) => {
    const response = await api.post('/auth/validate-token', {token});
    return response.data;
  },

  sendTokenValidate: async (to) => {
    try {
      const response = await api.post('/email/send-first-acess-code', { to });
      return response.data;
    } catch (error) {
      console.error('Error sending token:', error || error.response);
      return false;
    }
  },

  userTokenValidate: async ( email, code ) => {
    try {
      const response = await api.post('/recovery/verify', { email, code });
      return response;
    } catch (error) {
      console.error('Error validating token:', error || error.response);
      return false;
    }
  },

  registerUser: async (email, password, role) => {
    try {
      const response = await api.post('/auth/register', 
        {email, password, role}  
      );
      return response.data;
    } catch (error) {
      console.error('Error registering user:', error || error.response);
      return false;
    }
  }

})