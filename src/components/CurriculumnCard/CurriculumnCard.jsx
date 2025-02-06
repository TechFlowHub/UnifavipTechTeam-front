import React from "react";
import { FaRegStar, FaRegEye } from "react-icons/fa";
import "./CurriculumnCard.css";

const CurriculumnCard = ({ imageSrc, name, description, additionalInfo, starCount, viewCount, text1, text2 }) => {
    return (
        <div className="card">
            <img src={imageSrc} alt={name} />
            <div className="card-info">
                <h2>{name}</h2>
                <p>{additionalInfo}</p>
                <p>{description}</p>
                <div className="card-info-icons">
                    <FaRegStar />
                    <h3 style={{ color: 'var(--color-yellow-light)' }}>{starCount}</h3>
                    <FaRegEye />
                    <h3>{viewCount}</h3>
                </div>
            </div>
            <div className="card-text">
                <p>{text1}</p>
                <p><span style={{ color: 'var(--color-yellow-light)' }}>Recomendado por:</span> {text2}</p>
            </div>
        </div>
    );
};

export default CurriculumnCard;
