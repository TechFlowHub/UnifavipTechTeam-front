import { useState } from "react";
import Form from "../../../components/Form/Form";

const RecoverToken = () => {
  const registerConfig = {
    fields: [
      {
        id: "email",
        type: "email",
        label: "Email Institucional",
        placeholder: "Digite seu email institucional (@unifavip)",
      },
    ],
    submitButtonText: "Enviar",
  };


  return <Form formConfig={ registerConfig } />;
};

export default RecoverToken;
