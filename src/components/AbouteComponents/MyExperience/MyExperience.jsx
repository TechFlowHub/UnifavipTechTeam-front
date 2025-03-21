import React, { useState } from 'react';
import './MyExperience.css';

const MyExperience = ({ isOwner }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [resume, setResume] = useState(''); 
    return (
        <>
            <div className='box'>
                <h2>Resumo profissional</h2>
                <input
                    type="text"
                    value={resume}
                    onChange={(e) => setResume(e.target.value)}
                    disabled={!isEditing}
                    placeholder='Nenhuma informação'
                />
                {isOwner && (
                    <div className='line-end'>
                            <button onClick={() => setIsEditing(!isEditing)}>
                                {isEditing ? 'Salvar' : 'Editar'}
                            </button>
                    </div>
                )}
            </div>   
        </>
    );
}

export default MyExperience;