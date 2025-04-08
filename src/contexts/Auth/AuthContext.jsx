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
      if (token) {
        const data = await api.validateToken(token);
        if (data.user) {
          setUser(data.user);
          return true;
        }
        setUser(null);
        setToken("");
      }
    };
    validateToken();
  }, []);

  const signin = async (email, password) => {
    const data  = await api.signin(email, password);
    console.log("data", data);

    if (data.token && data.email) {
      setToken(data.token);
      setUser(data.user);
      return true;
    }
    return false;
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