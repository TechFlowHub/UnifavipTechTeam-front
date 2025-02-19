import { useState } from "react";
import "./FormAbout.css";

const groupedFields = [
  [{ label: "Nome completo (Nome Social)", name: "name", type: "text" }],
  [
    { label: "Email", name: "email", type: "email" },
    { label: "Email de Contato", name: "contactEmail", type: "email" },
  ],
  [
    { label: "Link do Github", name: "github", type: "text" },
    { label: "Telefone", name: "phone", isPhone: true },
  ],
  [
    { label: "Data de nascimento", name: "date", type: "date" },
    { label: "Link do Linkedin", name: "linkedin", type: "text"},
    { label: "Currículo em PDF", name: "cv", type: "file" },
  ]
];

const FormAbout = ({ userData, isOwner }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(userData || {});

  const handleEditClick = () => setIsEditing(!isEditing);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="about">
      <h1>Informações Pessoais</h1>

      <div className="form-about">
        {groupedFields.map((group, index) => (
          <div key={index} className="field-group">
            {group.map(({ label, name, type, isPhone }) =>
              isPhone ? (
                <div key={name} className="field phone">
                  <label>{isEditing ? "Telefone*" : "Telefone"}</label>
                  {isEditing ? (
                    <div className="phone-inputs">
                      <input
                        type="text"
                        name="ddd"
                        placeholder="DDD"
                        value={formData.ddd || ""}
                        onChange={handleChange}
                      />
                      <input
                        type="text"
                        name="phone"
                        placeholder="Número"
                        value={formData.phone || ""}
                        onChange={handleChange}
                      />
                    </div>
                  ) : (
                    <p>{formData.ddd || "Vazio"} - {formData.phone || "Não Informado"}</p>
                  )}
                </div>
              ) : (
                <div key={name} className="field">
                  <label>{isEditing ? `${label}*` : label}</label>
                  {isEditing ? (
                    <input
                      type={type}
                      name={name}
                      value={formData[name] || ""}
                      onChange={handleChange}
                    />
                  ) : (
                    <p>{formData[name] || "Não informado"}</p>
                  )}
                </div>
              )
            )}
          </div>
        ))}
      </div>

      {isOwner && <button onClick={handleEditClick}>{isEditing ? "Salvar" : "Editar"}</button>}
    </div>
  );
};

export default FormAbout;
