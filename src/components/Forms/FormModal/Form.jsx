import { useState, React } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Form.css";

const FormModal = ({ formConfig }) => {
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({ ...formData, [id]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formConfig.onSubmit) {
      formConfig.onSubmit(formData);
    }
  };

  return (
    <div className="form-modal">
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="form-modal-content">
          {formConfig.fields.map((field) => (
            <div key={field.id} className="form-group">
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
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              ) : field.type === "select" ? (
                <select id={field.id} value={formData[field.id] || ""} onChange={handleChange} required>
                  {field.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : field.type === "radio" ? (
                <div className="radio-group">
                  {field.options.map((option) => (
                    <label key={option.value}>
                      <input
                        type="radio"
                        name={field.id}
                        value={option.value}
                        checked={formData[field.id] === option.value}
                        onChange={handleChange}
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              ) : (
                <input
                  type={field.type}
                  id={field.id}
                  value={formData[field.id] || ""}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required
                />
              )}
            </div>
          ))}

          <div className="form-actions">
            {formConfig.links?.map(({ to, text }) => (
              <span key={to}>
                <Link to={to}>{text}</Link>
              </span>
            ))}
            </div>
          </div>
          <div className="button-group">
            <input type="reset" value={formConfig.resetButtonText} onClick={() => setFormData({})} />
            <input type="submit" value={formConfig.submitButtonText} />
          </div>
      </form>
    </div>
  );
};

export default FormModal;
