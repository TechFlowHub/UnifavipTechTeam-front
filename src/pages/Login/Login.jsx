import Form from "../../components/Form/Form";

const Login = () => {
  const loginConfig = {
    fields: [
      {
        id: "email",
        type: "email",
        label: "Login",
        placeholder: "Digite seu email institucional (@unifavip)",
      },
      {
        id: "password",
        type: "password",
        label: "Password",
        placeholder: "Digite sua senha...",
      },
      {
        id: "remember",
        type: "checkbox",
        label: "Lembrar-me",
      }
    ],
    links: [
      { to: "/register", text: "Registre-se!" },
      { to: "/forgot-password", text: "Esqueceu a senha?" },
    ],
    submitButtonText: "Entrar",
  };

  return <Form formConfig={loginConfig} />;
};

export default Login;