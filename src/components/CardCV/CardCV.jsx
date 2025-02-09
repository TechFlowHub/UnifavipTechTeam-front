import React from "react";
import { FaRegStar, FaRegEye } from "react-icons/fa";
import "./CardCV.css";

const CardCV = ({ imageSrc, name, description, additionalInfo, starCount, viewCount, text1, text2 }) => {
    return (
        <div className="card">
            <div className="card-content-left">
                <img src={imageSrc} alt={name} />
                <div className="card-info">
                    <h2>{name}</h2>
                    <p>{additionalInfo}</p>
                    <p>{description}</p>
                    <div className="card-info-icons">
                        <FaRegStar />
                        <span style={{ color: 'var(--color-yellow-light)' }}>{starCount}</span>
                        <FaRegEye />
                        <span>{viewCount}</span>
                    </div>
                </div>
            </div>
            <div className="card-text">
                <p>{text1}</p>
                <p><span style={{ color: 'var(--color-yellow-light)' }}>Recomendado por:</span> {text2}</p>
            </div>
        </div>
    );
};

export default CardCV;
