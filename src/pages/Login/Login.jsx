import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import Logo from "../../assets/logo_favip_centralizado.png";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Senha:", password);
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit} autoComplete="off">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>

        <div className="form-content">
          <label htmlFor="email">Login:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email institucional (@unifavip)"
            required
            autoComplete="off"
          />

          <label htmlFor="password">Password:</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha..."
              required
              autoComplete="off"
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="password-forgot">
            <span>
              Primeiro login? <Link to="/register">Registre-se!</Link>
            </span>
            <Link to="/forgot-password">Esqueceu a senha?</Link>
          </div>

          <input type="submit" value="Entrar" />
        </div>
      </form>
    </div>
  );
};

export default Login;
