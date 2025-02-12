import { useState } from "react";
import "./PersonCard.css";
import { FaStar, FaRegEye } from "react-icons/fa";

const MAX_CHARACTERS = 250;

const PersonCard = ({ profilePicture, text, isOwner }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [aboutText, setAboutText] = useState(text || "");

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleTextChange = (event) => {
    if (event.target.value.length <= MAX_CHARACTERS) {
      setAboutText(event.target.value);
    }
  };

  return (
    <div className="person-card-profile">
      <img src={profilePicture || "/default-profile.png"} alt="Profile" className="profile-picture" />

      <div>
        {isOwner && (
          <label className="person-label">
            {isEditing ? "Apresentação*" : "Apresentação"}
          </label>
        )}

        {isOwner ? (
          isEditing ? (
            <div>
              <textarea value={aboutText} onChange={handleTextChange} className="person-textarea" />
              <p className="char-counter">{aboutText.length}/{MAX_CHARACTERS}</p>
            </div>
          ) : (
            <p className="person-text">{aboutText || "Nenhuma informação disponível."}</p>
          )
        ) : (
          <p className="person-text">{aboutText || "Nenhuma informação disponível."}</p>
        )}
      </div>

      <div className="edit-button">
        {isOwner && (
          <button onClick={handleEditClick}>
            {isEditing ? "Salvar" : "Editar"}
          </button>
        )}
      </div>

      {isOwner === false && (
          <div className="info-icons">
            <span className="">
              <FaStar /> 23 {/* substituir pelo número real de estrelas */}
            </span>
            <span className="">
              <FaRegEye /> 21090 {/* substituir pelo número real de visualizações */}
            </span>
          </div>
        )}
    </div>
  );
};

export default PersonCard;
