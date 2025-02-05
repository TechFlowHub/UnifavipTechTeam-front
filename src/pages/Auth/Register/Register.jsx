import { useState } from "react";
import Form from "../../../components/Form/Form";

const Register = () => {
  const [step, setStep] = useState(1);

  const handleRegisterSubmit = () => {
    setStep(2);
  };

  const handleValidationSubmit = () => {
    console.log("Código validado! Redirecionar ou realizar ação...");
  };

  const registerConfig = {
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
    links: [{ to: "/login", text: "Entrar!" }],
    submitButtonText: "Registrar",
    onSubmit: handleRegisterSubmit,
  };

  const validationConfig = {
    fields: [
      {
        id: "verification-code",
        type: "text",
        label: "Código de Verificação",
        placeholder: "Digite o código enviado para o seu email...",
      },
    ],
    submitButtonText: "Validar Código",
    onSubmit: handleValidationSubmit, 
  };

  return <Form formConfig={step === 1 ? registerConfig : validationConfig} />;
};

export default Register;
