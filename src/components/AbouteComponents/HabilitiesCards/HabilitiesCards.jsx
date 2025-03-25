import React from 'react';
import './HabilitiesCards.css';

const HabilitiesCards = ({ title, company, period, badges, description }) => {
    return (
        <div className="skill_card">
            <div className="first_line">
                <h3>{title}</h3>
                <p>{company}</p>
            </div>
            <div className="period">
                <p>Período</p>
                <p style={{ color: 'var(--gray-emphasis)' }}>{period}</p>
            </div>
            {badges && badges.length > 0 && (
                <div className="badges">
                    {badges.map((badge, index) => (
                        <span key={index}>{badge}</span>
                    ))}
                </div>
            )}
            <div className="text_box">
                <p>{description}</p>
            </div>
        </div>
    );
};

export default HabilitiesCards;
