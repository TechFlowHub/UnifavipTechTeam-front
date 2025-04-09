import { useContext, useState } from "react";
import FormAuth from "../../../components/Forms/FormAuth/FormAuth";
import { AuthContext } from "../../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { useNotification } from "../../../contexts/NotificationContext"; 
import Loading from "../../../components/Loading/Loading";

const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const { showNotification } = useNotification(); 
  const [loading, setLoading] = useState(false);
  const { loadingUser } = useContext(AuthContext);

  const handleLogin = async (formData) => {
    const result = await auth.signin(formData.email, formData.password);
  
    if (result.error) {
      showNotification({
        message: result.error,
        type: "error",
        duration: 2500,
      });
      return;
    }
  
    showNotification({
      message: "Login realizado com sucesso!",
      type: "success",
      duration: 1000,
    });
  
    setLoading(true);
  
    const waitForUserAndNavigate = () => {
      const interval = setInterval(() => {
        if (!loadingUser) {
          clearInterval(interval);
          navigate("/");
        }
      }, 50);
    };
  
    waitForUserAndNavigate();
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

  if (loading) return <Loading />;

  return <FormAuth formConfig={loginConfig} />;
};

export default Login;