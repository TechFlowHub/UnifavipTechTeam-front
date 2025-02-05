import { useState } from "react";
import Form from "../../../components/Form/Form";

const ForgotPassword = () => {
  const registerConfig = {
    fields: [
      {
        id: "token",
        type: "text",
        label: "Token de Recuperação",
        placeholder: "Digite seu token de resgate.",
      },
      {
        id: "password",
        type: "password",
        label: "Nova Senha",
        placeholder: "Digite sua nova senha...",
      },
      {
        id: "confirm-new-password",
        type: "password",
        label: "Confirmação de senha",
        placeholder: "Confirme sua senha...",
      },
    ],
    links: [
      { to: "/recover-token", text: "Reenviar código" } 
    ],
    submitButtonText: "Alterar Senha",
  };


  return <Form formConfig={ registerConfig } />;
};

export default ForgotPassword;
