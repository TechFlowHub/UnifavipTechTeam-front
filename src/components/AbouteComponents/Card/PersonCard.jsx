import { useState } from "react";
import "./PersonCard.css";

import { FaStar, FaRegEye } from "react-icons/fa";

const PersonCard = ({ profilePicture, text, isOwner }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [aboutText, setAboutText] = useState(text || "");

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleTextChange = (event) => {
    setAboutText(event.target.value);
  };

  return (
    <div className="person-card-profile">
      <img src={profilePicture || "/default-profile.png"} alt="Profile" className="profile-picture" />

      <div>
        {isOwner && <label className="person-label">Apresentação*</label>}

        {isOwner ? (
          isEditing ? (
            <textarea value={aboutText} onChange={handleTextChange} className="person-textarea" />
          ) : (
            <p className="person-text">{aboutText || "Nenhuma informação disponível."}</p>
          )
        ) : (
          <p className="person-text">{aboutText || "Nenhuma informação disponível."}</p>
        )}
      </div>

      <div>
        {isOwner ? (
          <button onClick={handleEditClick} className="edit-button">
            {isEditing ? "Salvar" : "Editar"}
          </button>
        ) : (
          <div className="info-icons">
            <span className="home-card-star home-card-config">
              <FaStar /> 23 {/*substituir pelo número real de estrelas */}
            </span>
            <span className="home-card-star home-card-config">
              <FaRegEye /> 21090 {/*substituir pelo número real de visualizações */}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonCard;
