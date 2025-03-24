import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp, IoIosAdd } from 'react-icons/io';
import './AboutHabilities.css';
import HabilitiesCards from '../HabilitiesCards/HabilitiesCards';

const AboutHabilities = ({ isOwner }) => {
    const [minimize, setMinimize] = useState(false);

    return (
        <div className='about_box'>
            <div className='top_line'>
                <h2>{isOwner ? 'Quais são suas experiências' : 'Minhas experiências'}</h2>
                {isOwner && (
                    <button 
                        onClick={() => setMinimize(!minimize)} 
                        aria-label={minimize ? 'Expandir' : 'Minimizar'}
                    >
                        {minimize ? <IoIosArrowDown /> : <IoIosArrowUp />}
                    </button>
                )}
            </div>
            {isOwner && (
                <button className='add_experience' aria-label="Adicionar experiências">
                    <h3>Adicionar experiências</h3>
                    <IoIosAdd />
                </button>
            )}
            {!minimize && (
                <div className='experience_details'>
                    <HabilitiesCards />
                </div>
            )}
        </div>
    );
};

export default AboutHabilities;
