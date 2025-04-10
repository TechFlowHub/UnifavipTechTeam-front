import { useState } from "react";
import "./AdditionalInformation.css";
import "../FormDiversity/FormDiversity.css";
import SocialMedia from "../SocialMedia/SocialMedia";

const AdditionalInformation = ({ initialData, isOwner }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(initialData || {
        link: "",
        job: "",
        portfolio: "",
        state: "",
        city: "",
        country: "",
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        // Depois resolver essa bomba de CSS
        <div className="content-about"> 
            <div className={isOwner ? "about-infos" : "about-infos about-info-not-owner"}>
                <h1>Informações adicionais</h1>

                <div className="form-about">
                    {/* Vídeo de apresentação */}
                    <div className="about-info">
                        <div>
                            <label htmlFor="link">
                                Vídeo de apresentação {isEditing && <span className="optional">Opcional</span>}
                            </label>
                            <input
                                type="text"
                                name="link"
                                value={formData.link}
                                onChange={handleInputChange}
                                placeholder="https://www.youtube.com/watch?v=example"
                                disabled={!isEditing}
                            />
                        </div>

                        {/* Cargo pretendido */}
                        <div>
                            <label htmlFor="job">
                                Cargo pretendido {isEditing && <span>*</span>}
                            </label>
                            <input
                                type="text"
                                name="job"
                                value={formData.job}
                                onChange={handleInputChange}
                                placeholder="Nenhuma Informação"
                                disabled={!isEditing}
                            />
                        </div>

  
                        <div>
                            <label htmlFor="city">
                                Cidade {isEditing && <span>*</span>}
                            </label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                placeholder="Nenhuma Informação"
                                disabled={!isEditing}
                                
                            />
                        </div>
                    </div>

                    {/* Link do Portfólio, Estado, Cidade, País */}
                    <div className="about-info">

                        <div>
                            <label htmlFor="portfolio">
                                Link do Portfólio {isEditing && <span className="optional">Opcional</span>}
                            </label>
                            <input
                                type="text"
                                name="portfolio"
                                value={formData.portfolio}
                                onChange={handleInputChange}
                                placeholder="Nenhuma Informação"
                                disabled={!isEditing}
                                style={{ width: "350px" }}
                            />
                        </div>

                        <div>
                            <label htmlFor="state">
                                Estado {isEditing && <span>*</span>}
                            </label>
                            <input
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={handleInputChange}
                                placeholder="Nenhuma Informação"
                                disabled={!isEditing}
                            />
                        </div>


                        <div>
                            <label htmlFor="country">
                                País {isEditing && <span>*</span>}
                            </label>
                            <input
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleInputChange}
                                placeholder="Nenhuma Informação"
                                disabled={!isEditing}
                            />
                        </div>
                    </div>

                    {/* Botão de Editar/Salvar */}
                    {isOwner && (
                        <div className="line-end">
                            <button onClick={() => setIsEditing(!isEditing)}>
                                {isEditing ? "Salvar" : "Editar"}
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <SocialMedia isOwner={isOwner} />
        </div>
    );
};

export default AdditionalInformation;
