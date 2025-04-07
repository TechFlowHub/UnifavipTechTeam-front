import { useContext, useEffect } from "react"
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export const RequireAuth = ({ children, allowedRoles }) => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.user) {
      navigate("/");
    }

    if (!allowedRoles.includes(auth.user.role)) {
      navigate("/");
    }
  }, [auth.user, allowedRoles, navigate]);
  
  return children;
}

export default RequireAuth;