import { useState } from "react";
import "./FormDiversity.css";

const FormDiversity = ({ isOwner }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    sex: "",
    race: "",
    sexualOrientation: "",
    gender: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="diversity-form">
      <h1>Diversidade</h1>
      <div className="form-diversity">
        {/* Sexo e Raça/Cor */}
        <div className="diversity-info">
          <div>
            <label htmlFor="sex">Qual o seu sexo? <span className="optional">Opcional</span></label>
            <select name="sex" value={formData.sex} onChange={handleInputChange} disabled={!isEditing}>
              <option value="">Selecione</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="outro">Outro</option>
            </select>
          </div>
          <div>
            <label htmlFor="race">Qual sua raça/cor? <span className="optional">Opcional</span></label>
            <select name="race" value={formData.race} onChange={handleInputChange} disabled={!isEditing}>
              <option value="">Selecione</option>
              <option value="branco">Branco</option>
              <option value="preto">Preto</option>
              <option value="pardo">Pardo</option>
              <option value="amarelo">Amarelo</option>
              <option value="indigena">Indígena</option>
            </select>
          </div>
        </div>

        {/* Orientação Sexual e Gênero */}
        <div className="diversity-info">
          <div>
            <label htmlFor="sexualOrientation">Qual a sua orientação sexual? <span className="optional">Opcional</span></label>
            <select name="sexualOrientation" value={formData.sexualOrientation} onChange={handleInputChange} disabled={!isEditing}>
              <option value="">Selecione</option>
              <option value="heterossexual">Heterossexual</option>
              <option value="homossexual">Homossexual</option>
              <option value="bissexual">Bissexual</option>
              <option value="assexual">Assexual</option>
              <option value="outro">Outro</option>
            </select>
          </div>
          <div>
            <label htmlFor="gender">Qual seu gênero? <span className="optional">Opcional</span></label>
            <select name="gender" value={formData.gender} onChange={handleInputChange} disabled={!isEditing}>
              <option value="">Selecione</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="nao-binario">Não-binário</option>
              <option value="outro">Outro</option>
            </select>
          </div>
        </div>

        {/* Botão de Ação */}
        {isOwner && (
          <div className="diversity-button">
            {isEditing ? (
              <button onClick={() => setIsEditing(!isEditing)}>Salvar</button>
            ) : (
              <button onClick={() => setIsEditing(!isEditing)}>Editar</button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormDiversity;
