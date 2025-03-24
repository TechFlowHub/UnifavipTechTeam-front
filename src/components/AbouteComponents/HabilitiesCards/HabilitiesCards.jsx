import { useState } from "react";
import './HabilitiesCards.css';

const HabilitiesCards = () => {
    return (
        <div className="skill_card">
            <div className="first_line">
                <h3>Desenvolvedor Full-Stack</h3>
                <p>Totvs com muita fé</p>
            </div>
            <div className="period">
                <p>Período</p>
                <p style={{ color: 'var(--gray-emphasis)' }}>08/2020 - 02/2021</p>
            </div>
            <div className="badges">
                <span>React</span>
                <span>Node</span>
                <span>Express</span>
                <span>SQL</span>
            </div>
            <div className="text_box">
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum passages, and
                    more recently with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled.
                </p>
            </div>
        </div>
    );
};

export default HabilitiesCards;
