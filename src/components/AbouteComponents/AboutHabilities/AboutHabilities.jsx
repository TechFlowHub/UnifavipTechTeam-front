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
                    <HabilitiesCards
                        title={'Desenvolvedor Front-end'}
                        company={'Empresa exemplo 1'}
                        period={'08/2019 - 02/2021'}
                        badges={['React', 'Java', 'MySQL', 'Node.js']}
                        description={'Lorem Ipsum is simply dummy text of the printing and typesetting ' +
                                    "industry. Lorem Ipsum has been the industry's standard dummy text ever " +
                                    'since the 1500s, when an unknown printer took a galley of type and ' +
                                    'scrambled it to make a type specimen book. It has survived not only ' +
                                    'five centuries, but also the leap into electronic typesetting, ' +
                                    'remaining essentially unchanged. It was popularised in the 1960s with ' +
                                    'the release of Letraset sheets containing Lorem Ipsum passages, and ' +
                                    'more recently with desktop publishing software like Aldus PageMaker ' +
                                    'including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of ' +
                                    'the printing and typesetting industry. Lorem Ipsum has been the ' +
                                    "industry's standard dummy text ever since the 1500s, when an unknown " +
                                    'printer took a galley of type and scrambled.'}
                    />
                </div>
            )}
        </div>
    );
};

export default AboutHabilities;