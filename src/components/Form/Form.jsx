import { useState, React } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Logo from "../../assets/logo_favip_centralizado.png";
import "./Form.css";

const Form = ({ formConfig }) => {
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} autoComplete="off">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>

        <div className="form-content">
          {formConfig.fields.map((field) => (
            <div key={field.id}>
              <label htmlFor={field.id}>{field.label}:</label>
              {field.type === "password" ? (
                <div className="password-container">
                  <input
                    type={showPassword ? "text" : "password"}
                    id={field.id}
                    value={formData[field.id] || ""}
                    onChange={handleChange}
                    placeholder={field.placeholder}
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
              ) : (
                <input
                  type={field.type}
                  id={field.id}
                  value={formData[field.id] || ""}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required
                  autoComplete="off"
                />
              )}
            </div>
          ))}

          <div className="form-actions">
            {formConfig.links?.map(({ to, text }) => {
              if (text === "Registre-se!") {
                return (
                  <span key={to}>
                    Primeiro Login? <Link to={to}>{text}</Link>
                  </span>
                );
              }
              if (text === "Entrar!") {
                return (
                  <span key={to}>
                    Já tem registro? <Link to={to}>{text}</Link>
                  </span>
                );
              }
              return <Link key={to} to={to}>{text}</Link>;
            })}
          </div>

          <input type="submit" value={formConfig.submitButtonText} />
        </div>
      </form>
    </div>
  );
};

export default Form;
