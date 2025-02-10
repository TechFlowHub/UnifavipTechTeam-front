import FormAuth from "../../../components/Forms/FormAuth/FormAuth";

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


  return <FormAuth formConfig={ registerConfig } />;
};

export default RecoverToken;
