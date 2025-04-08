import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import "./Languages.css";

const allLanguages = [
    "Inglês", "Espanhol", "Francês", "Alemão", "Italiano", "Português", "Japonês", "Mandarim", "Russo", "Árabe"
];

const proficiencyLevels = [
    { id: "basic", label: "Básico", description: "Eu consigo compreender palavras simples e cotidianas." },
    { id: "initial", label: "Iniciante", description: "Estou iniciando agora os estudos do idioma." },
    { id: "intermediate", label: "Intermediário", description: "Compreendo textos inteiros. Mas com dificuldades em discussões" },
    { id: "advanced", label: "Avançado", description: "Consigo me comunicar com fluência e naturalidade." },
    { id: "fluent", label: "Fluente", description: "Tenho alto conhecimento gramatical. Compreendo assuntos complexos." },
    { id: "native", label: "Nativo", description: "Eu sou nativo nesse idioma." },
];

const Languages = ({ isOwner }) => {
    const [minimize, setMinimize] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [userLanguages, setUserLanguages] = useState([]);
    const [selectedLevels, setSelectedLevels] = useState({}); // idioma: levelId

    const handleAddLanguage = (lang) => {
        if (!userLanguages.includes(lang)) {
            setUserLanguages([...userLanguages, lang]);
            setSearchTerm("");
        }
    };

    const handleRemoveLanguage = (lang) => {
        setUserLanguages(userLanguages.filter(l => l !== lang));
        const updatedLevels = { ...selectedLevels };
        delete updatedLevels[lang];
        setSelectedLevels(updatedLevels);
    };

    const handleLevelChange = (lang, levelId) => {
        setSelectedLevels(prev => ({ ...prev, [lang]: levelId }));
    };

    const filteredSuggestions = allLanguages.filter(
        lang =>
            lang.toLowerCase().includes(searchTerm.toLowerCase()) &&
            !userLanguages.includes(lang)
    );

    return (
        <div className="languages">
            <div className="languages-header">
                <h2>{isOwner ? "Quais são seus idiomas" : "Idiomas"}</h2>
                {isOwner && (
                    <button
                        onClick={() => setMinimize(!minimize)}
                        aria-label={minimize ? "Expandir" : "Minimizar"}
                    >
                        {minimize ? <IoIosArrowDown /> : <IoIosArrowUp />}
                    </button>
                )}
            </div>

            {!minimize && isOwner && (
                <>

                    <div className="search-container">
                        <FaSearch className="search-icon" />
                        <input
                            type="text"
                            className="search-ability"
                            placeholder="Digite o idioma"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSearchAdd()} />
                    </div>
                    <div>
                        {searchTerm && filteredSuggestions.length > 0 && (
                            <ul className="search-suggestions">
                                {filteredSuggestions.map((lang, index) => (
                                    <li
                                        key={index}
                                        onClick={() => handleAddLanguage(lang)}
                                    >
                                        {lang}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                </>
            )}

            <div className="languages-content">
                {userLanguages.length === 0 && <p>Nenhum idioma adicionado.</p>}

                {userLanguages.map(lang => (
                    <div key={lang} className="language-item">
                        <h3>{lang}</h3>
                        {isOwner ? (
                            <div className="languages-list">
                            <div>
                                {proficiencyLevels.slice(0, 3).map(level => (
                                    <div key={level.id} className="level-item">
                                        <input
                                            type="radio"
                                            name={`level-${lang}`}
                                            id={`${lang}-${level.id}`}
                                            checked={selectedLevels[lang] === level.id}
                                            onChange={() => handleLevelChange(lang, level.id)}
                                        />
                                        <label htmlFor={`${lang}-${level.id}`}>{level.label}</label>
                                        <p>{level.description}</p>
                                    </div>
                                ))}
                            </div>
                            <div>
                                {proficiencyLevels.slice(3).map(level => (
                                    <div key={level.id} className="level-item">
                                        <input
                                            type="radio"
                                            name={`level-${lang}`}
                                            id={`${lang}-${level.id}`}
                                            checked={selectedLevels[lang] === level.id}
                                            onChange={() => handleLevelChange(lang, level.id)}
                                        />
                                        <label htmlFor={`${lang}-${level.id}`}>{level.label}</label>
                                        <p>{level.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>                        
                        ) : (
                            <div className="languages-list-non-editable">
                                <div>
                                    {proficiencyLevels.slice(0, 3).map(level => (
                                        selectedLevels[lang] === level.id && (
                                            <div key={level.id} className="level-item">
                                                <input
                                                    type="radio"
                                                    name={`level-${lang}`}
                                                    id={`${lang}-${level.id}`}
                                                    checked={selectedLevels[lang] === level.id}
                                                    onChange={() => handleLevelChange(lang, level.id)}
                                                />
                                                <label>{level.label}</label>
                                                <p>{level.description}</p>
                                            </div>
                                        )
                                    ))}
                                </div>
                                <div>
                                    {proficiencyLevels.slice(3).map(level => (
                                        selectedLevels[lang] === level.id && (
                                            <div key={level.id} className="level-item">
                                                <input
                                                    type="radio"
                                                    name={`level-${lang}`}
                                                    id={`${lang}-${level.id}`}
                                                    checked={selectedLevels[lang] === level.id}
                                                    onChange={() => handleLevelChange(lang, level.id)}
                                                />
                                                <label>{level.label}</label>
                                                <p>{level.description}</p>
                                            </div>
                                        )
                                    ))}
                                </div>
                        </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Languages;
