import { useState } from "react";
import "./FormAbout.css";

const FormAbout = ({ isOwner }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    secondEmail: "",
    github: "",
    phone1: "",
    phone2: "",
    birthDate: "",
    linkedin: "",
    cv: "",
    pcd: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="about-user">
      <h1>Informações pessoais</h1>

      <div className="form-about">
        {/* Nome */}
        <div className="about-info">
          <div>
            <label htmlFor="name">
                Nome completo (Nome social) {isEditing && <span>*</span>}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder={formData.name || "Nenhuma Informação"}
                disabled={!isEditing}
              />
          </div>
        </div>

        {/* Emails */}
        <div className="about-info">
          <div>
            <label htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder={formData.email || "Nenhuma Informação"}
              disabled
            />
          </div>
          <div>
            <label htmlFor="second-email">Email de Contato {isEditing && <span>*</span>}</label>
            <input
              type="email"
              name="secondEmail"
              value={formData.secondEmail}
              onChange={handleInputChange}
              placeholder={formData.secondEmail || "Nenhuma Informação"}
              disabled={!isEditing}
            />
          </div>
        </div>

        {/* Github e Telefone */}
        <div className="about-info">
          <div>
            <label htmlFor="github">Link do Github <span className="optional">Opcional</span></label>
            <input
              type="text"
              name="github"
              value={formData.github}
              onChange={handleInputChange}
              placeholder={formData.github || "Nenhuma Informação"}
              disabled={!isEditing}
            />
          </div>

          <div>
            <label htmlFor="phone">Telefone {isEditing && <span>*</span>}</label>
            <div>
              <input
                type="text"
                name="phone1"
                value={formData.phone1}
                onChange={handleInputChange}
                placeholder={formData.phone1 || "DDD"}
                disabled={!isEditing}
              />
              <input
                type="text"
                name="phone2"
                value={formData.phone2}
                onChange={handleInputChange}
                placeholder={formData.phone2 || "Número"}
                disabled={!isEditing}
              />
            </div>
          </div>
        </div>

        {/* Data de nascimento, LinkedIn e CV */}
        <div className="about-info grid-row-about">
          <div>
            <label htmlFor="birthDate">Data de nascimento {isEditing && <span>*</span>}</label>
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>

          <div>
            <label htmlFor="linkedin">Link do Linkedin <span className="optional">Opcional</span></label>
            <input
              type="text"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleInputChange}
              placeholder={formData.linkedin || "Nenhuma Informação"}
              disabled={!isEditing}
            />
          </div>

          <div>
            <label htmlFor="cv">Currículo em PDF {isEditing && <span>*</span>}</label>
              <input
                type="file"
                name="cv"
                id="cv"
                accept="application/pdf"
              />
          </div>
        </div>

        {/* Deficiência e botões */}
        <div className="line-end about-info">
          <div>
            <label htmlFor="pcd">Possuo alguma deficiência? {isEditing && <span>*</span>}</label>
            <div className="about-radio">
              <input
                type="radio"
                name="pcd"
                value="sim"
                checked={formData.pcd === "sim"}
                onChange={handleInputChange}
                disabled={!isEditing}
              /> Sim
              <input
                type="radio"
                name="pcd"
                value="nao"
                checked={formData.pcd === "nao"}
                onChange={handleInputChange}
                disabled={!isEditing}
                
              /> Não
            </div>
          </div>
          {isOwner && (
            <div className="about-button">
              {isEditing ? (
                <button onClick={() => setIsEditing(!isEditing)}>Salvar</button>
              ) : (
                <button onClick={() => setIsEditing(!isEditing)}>Editar</button>
              )}
            </div>
          )}
        </div>     
      </div>
    </div>
  );
};

export default FormAbout;
