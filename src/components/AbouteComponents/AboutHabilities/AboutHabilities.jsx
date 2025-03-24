import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp, IoIosAdd } from 'react-icons/io';
import './AboutHabilities.css';
import HabilitiesCards from '../HabilitiesCards/HabilitiesCards';

const AboutHabilities = ({ isOwner }) => {
    const [minimize, setMinimize] = useState(false);

    return (
        <div className='about_box'>
            <div className='top_line'>
                <h2>Quais são suas experiências</h2>
                <button onClick={() => setMinimize(!minimize)}>
                    {minimize ? <IoIosArrowDown /> : <IoIosArrowUp />}
                </button>
            </div>
            <button className='add_experience'>
                <h3>Adicionar experiências</h3>
                <IoIosAdd />
            </button>
            {!minimize && (
                <div className='experience_details'>
                    <HabilitiesCards />
                </div>
            )}
        </div>
    );
}

export default AboutHabilities;