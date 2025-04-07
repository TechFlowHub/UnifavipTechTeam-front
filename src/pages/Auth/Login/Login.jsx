import { useContext } from "react";
import FormAuth from "../../../components/Forms/FormAuth/FormAuth";
import { AuthContext } from "../../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

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
    onSubmit: async (formData) => {
      const sucess = await  auth.signin(formData.email, formData.password);
      if (sucess) {
        navigate("/");
      } else {
        alert("Login falhou. Tente novamente.");
      }
    },
  };

  return <FormAuth formConfig={loginConfig} />;
};

export default Login;