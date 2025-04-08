import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { useNotification } from "../contexts/NotificationContext"; // Importa o hook do contexto

const PublicRouteWithRedirect = ({ children }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { showNotification } = useNotification(); // Usa o hook

  useEffect(() => {
    if (user) {
      showNotification({
        message: "Você já está logado!",
        type: "warning",
        duration: 1000,
      });

      // Redireciona após 500ms
      const timer = setTimeout(() => {
        navigate("/");
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [user, navigate, showNotification]);

  return !user ? children : null;
};

export default PublicRouteWithRedirect;
