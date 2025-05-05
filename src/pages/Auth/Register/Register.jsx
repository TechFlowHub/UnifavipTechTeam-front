import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FormAuth from "../../../components/Forms/FormAuth/FormAuth";
import { useNotification } from "../../../contexts/NotificationContext";
import { AuthContext } from "../../../contexts/Auth/AuthContext";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const initialStep = parseInt(queryParams.get("step")) || 1;

  const [step, setStep] = useState(initialStep);
  const { showNotification } = useNotification();
  const auth = useContext(AuthContext);
  const [tempEmail, setTempEmail] = useState(null);
  const [tempToken, setTempToken] = useState(null);

  const handleRegisterSubmit = async (formData) => {
    const { email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      showNotification({
        message: "As senhas não coincidem.",
        type: "error",
        duration: 2500,
      });
      return;
    }

    let role = null;

    if (email.endsWith("@alunos.unifavip.edu.br")) {
      role = "student";
    } else if (email.endsWith("@professores.unifavip.edu.br")) {
      role = "teacher";
    } else {
      showNotification({
        message: "Email inválido. Use um email institucional válido.",
        type: "error",
        duration: 2500,
      });
      return;
    }

    const result = await auth.registerUser(email, password, role);

    if (result?.error) {
      showNotification({
        message: result.error,
        type: "error",
        duration: 2500,
      });
      return;
    }

    setTempEmail(result.email);
    setTempToken(result.token);

    showNotification({
      message: "Código de verificação enviado para o seu email.",
      type: "info",
      duration: 2000,
    });

    setStep(2);
  };

  const handleTokenValidation = async ({ "verification-code": token }) => {
    const tokenJWT = localStorage.getItem("token");
    setTempToken(tokenJWT);
    setTempEmail(auth.user);
    
    if (!token && !tempEmail) {
      showNotification({
        message: "Informações de registro não encontradas. Tente novamente.",
        type: "error",
        duration: 2500,
      });
      return;
    }

    const result = await auth.validateTokenUser(tempEmail, token, tempToken);

    if (result?.error) {
      showNotification({
        message: result.error,
        type: "error",
        duration: 2500,
      });
      return;
    }

    showNotification({
      message: "Conta verificada com sucesso!",
      type: "success",
      duration: 2500,
    });

    setTimeout(() => {
      navigate("/");
    }, 500);
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
        id: "confirmPassword",
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
    onSubmit: handleTokenValidation,
  };

  return <FormAuth formConfig={step === 1 ? registerConfig : validationConfig} />;
};

export default Register;