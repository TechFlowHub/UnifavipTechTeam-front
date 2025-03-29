import React, { useState } from "react";
import "./SocialMedia.css";
import "../FormDiversity/FormDiversity.css";

const SocialMedia = ({ isOwner }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        instagram: "",
        facebook: "",
    });
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <div className={isOwner ? "diversity-form" : "diversity-form diversity-form-not-owner "}>
                <h1>Redes sociais</h1>
                <div className="form-diversity">
                    {/* Instagram e Facebook */}
                    <div className="diversity-info">
                        <div>
                            <label htmlFor="instagram">
                                Instagram {isEditing && <span className="optional">Opcional</span>}
                            </label>
                            <input
                                type="text"
                                name="instagram"
                                value={formData.instagram}
                                onChange={handleInputChange}
                                placeholder="Nenhuma Informação"
                                disabled={!isEditing}
                            />
                        </div>
                    </div>
                    <div className="diversity-info">
                        <div>
                            <label htmlFor="facebook">
                                Facebook {isEditing && <span className="optional">Opcional</span>}
                            </label>
                            <input
                                type="text"
                                name="facebook"
                                value={formData.facebook}
                                onChange={handleInputChange}
                                placeholder="Nenhuma Informação"
                                disabled={!isEditing}
                            />
                        </div>
                    </div>
                </div>

                {/* Baixar CV */}
                <div className="end-line">
                    <button className="button-download" onClick={() => alert("Baixar CV")}>
                        Baixar CV
                    </button>
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
}

export default SocialMedia;