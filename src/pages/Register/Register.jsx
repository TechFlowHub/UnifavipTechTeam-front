import Form from "../../components/Form/Form";

const Register = () => {
  const RegisterConfig = {
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
      },
      {
        id: "confirm-password",
        type: "password",
        label: "Confirmação de senha",
        placeholder: "Confirme sua senha...",
      },
    ],
    links: [
      { to: "/login", text: "Entrar!" },
    ],
    submitButtonText: "Entrar",
  };

  return <Form formConfig={RegisterConfig} />;
};

export default Register;