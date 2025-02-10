import FormAuth from "../../../components/Forms/FormAuth/FormAuth";

const Login = () => {
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
  };

  return <FormAuth formConfig={loginConfig} />;
};

export default Login;