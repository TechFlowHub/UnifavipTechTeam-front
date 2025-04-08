import { useContext } from "react";
import FormAuth from "../../../components/Forms/FormAuth/FormAuth";
import { AuthContext } from "../../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { useNotification } from "../../../contexts/NotificationContext"; 

const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const { showNotification } = useNotification(); 

  const handleLogin = async (formData) => {
    const result = await auth.signin(formData.email, formData.password);
  
    if (result.error) {
      showNotification({
        message: result.error,
        type: "error",
        duration: 1000,
      });
      return;
    }
  
    showNotification({
      message: "Login realizado com sucesso!",
      type: "success",
      duration: 1000,
    });
  
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  const loginConfig = {
    fields: [
      {
        id: "email",
        type: "email",
        label: "Email Institucional",
        placeholder: "Digite seu email institucional (@unifavip)",
      },
      {
        id: "password",
        type: "password",
        label: "Senha",
        placeholder: "Digite sua senha...",
      }
    ],
    links: [
      { to: "/register", text: "Registre-se!" },
      { to: "/forgot-password", text: "Esqueceu a senha?" },
    ],
    submitButtonText: "Entrar",
    onSubmit: handleLogin
  };

  return <FormAuth formConfig={loginConfig} />;
};

export default Login;