import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { useNotification } from "../contexts/NotificationContext";

const PublicRouteWithRedirect = ({ children }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { showNotification } = useNotification();

  useEffect(() => {
    const isValidUser = user && typeof user === "object" && "email" in user;

    if (isValidUser) {
      showNotification({
        message: "Você já está logado!",
        type: "warning",
        duration: 2000,
      });

      const timer = setTimeout(() => {
        navigate("/");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [user, navigate, showNotification]);

  useEffect(() => {
    console.log("user no PublicRoute:", user);
  }, [user]);

  return (!user || typeof user !== "object") ? children : null;
};

export default PublicRouteWithRedirect;
