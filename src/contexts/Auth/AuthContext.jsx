import { createContext } from "react";
import { useApi } from "../../hooks/useApi";
import { useState } from "react";
import { use } from "react";
import { useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const api = useApi();

  useEffect(() => {
    const validateToken = async () => {
      const token = localStorage.getItem("token");
  
      if (!token) {
        setUser(null);
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
      }
    };
  
    validateToken();
  }, []);  

  const signin = async (email, password) => {
    try {
      const data = await api.signin(email, password);
  
      if (data.token && data.email) {
        setToken(data.token);
        setUser(data.user);
        return data;
      }
  
      return { error: "Email ou senha incorreta!" };
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Erro ao fazer login.";
      return { error: errorMessage };
    }
  };
  
  const signout = async () => {
    setUser(null);
    setToken("");
    await api.logout();
  };

  const setToken = (token) => {
    localStorage.setItem("token", token);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signin,
        signout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};