import { createContext, useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const api = useApi();

  useEffect(() => {
    const validateToken = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setUser(null);
        setLoadingUser(false);
        return;
      }

      try {
        const data = await api.validateToken(token);

        if (data?.user) {
          setUser(data.user);
        } else {
          setUser(null);
          localStorage.removeItem("token");
        }
      } catch (error) {
        console.error("Erro ao validar o token:", error);
        setUser(null);
        localStorage.removeItem("token");
      } finally {
        setLoadingUser(false);
      }
    };

    validateToken();
  }, []);

  const signin = async (email, password) => {
    try {
      const data = await api.signin(email, password);

      if (data.token && data.email) {
        setToken(data.token);
        setUser(data.email);
        return data;
      }

      return { error: "Email ou senha incorreta!" };
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Erro ao fazer login.";
      return { error: errorMessage };
    }
  };

  const signout = async () => {
    try {
      const logout = await api.logout();

      if (logout.status === 200) {
        setUser(null);
        setToken("");
      }
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  const sendTokenValidate = async (email) => {
    try {
      const data = await api.sendTokenValidate(email);
      return data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Erro ao enviar o token.";
      return { error: errorMessage };
    }
  };

  const validateTokenUser = async (email, tokenUser, tokenJWT) => {
    try {
      const data = await api.userTokenValidate(email, tokenUser);

      if (data.status === 200) {
        setToken(tokenJWT);
        setUser(email);
        return { success: true };
      }

      return { error: "Token inválido ou expirado." };
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Erro ao validar email.";
      return { error: errorMessage };
    }
  };

  const checkEmailValidation = async (email) => {
    try {
      const data = await api.checkEmailValidate(email);
      return data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Erro ao verificar o email.";
      return { error: errorMessage };
    }
  }

  const registerUser = async (email, password, role) => {
    try {
      const data = await api.registerUser(email, password, role);

      if (data.email && data.token) {
        sendTokenValidate(data.email, data.token, data.user);
        return data;
      }

      return { error: "Email ou senha invalidado na hora do registro" };
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Erro ao realizar registro.";
      return { error: errorMessage };
    }
  };

  const setToken = (token) => {
    localStorage.setItem("token", token);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loadingUser,
        signin,
        signout,
        registerUser,
        sendTokenValidate,
        validateTokenUser,
        checkEmailValidation,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
