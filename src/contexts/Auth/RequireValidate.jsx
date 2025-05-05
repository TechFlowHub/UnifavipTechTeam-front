import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { useNotification } from "../NotificationContext";

const RequireValidate = ({ children }) => {
  const { checkEmailValidation, user, sendTokenValidate } = useContext(AuthContext);
  const { showNotification } = useNotification(); 
  const navigate = useNavigate();

  useEffect(() => {
    const validateUser = async () => {
      const isValidUser = await checkEmailValidation(user);

      if (!isValidUser) {
        showNotification({
          message: "Email não verificado! Verifique seu email institucional.",
          type: "warning",
          duration: 2000,
        }); 
        
        navigate("/register?step=2");
        const sendToken = await sendTokenValidate(user);
      }
    };

    validateUser();
  }, []);

  return children;
};

export default RequireValidate;