import './SearchCV.css';
import CurriculumnCard from '../../components/CardCV/CardCV';
import ProfilePic from '../../assets/placeholder_person.png';
import { FaSearch, FaGraduationCap, FaFilter } from "react-icons/fa";

const SearchCV = () => {
    return (
        <>
            <div className="page-header">
                <h1>Buscar Pessoas</h1>
                <p>Encontre estudantes e profissionais da nossa faculdade. Explore perfis, habilidades e experiências para conectar-se com talentos da nossa comunidade acadêmica.</p>
            </div>

            <div div className='search-cv'>
                <div className='search-card'>
                    <div className='input-conteiner'>
                        <label>Buscar pessoa por nome/cargo:</label>
                        <div className="search-container">
                            <FaSearch className="search-icon" />
                            <input
                                type="text"
                                name="searchCV"
                                id="searchCV"
                                placeholder="Nome do aluno ou do cargo"
                            />
                        </div>
                    </div>
                    <div className='input-conteiner'>
                        <label>Buscar pessoa por curso:</label>
                        <div className="search-container select-container">
                            <FaGraduationCap className="search-icon graduation" />
                            <select name="course" id="course">
                                <option value="" disabled selected>Selecione um curso</option>
                                <option value="1">Administração</option>
                                <option value="2">Ciência da Computação</option>
                                <option value="3">Engenharia de Software</option>
                                <option value="4">Sistemas de Informação</option>
                            </select>
                        </div>
                    </div>
                    <input type="submit" value="Buscar currículo" />
                </div>
                <div className='search-results'>
                    <div className='search-results-left'>
                        <h2>Currículos</h2>
                        <p>xxxx pessoa(s) encontrada(s)</p>
                    </div>
                    <div className='search-results-right'>
                        <p><span>Ordenados por:</span> Quantidade de estrelas</p>
                        
                        <button>Filtrar <FaFilter /></button>
                    </div>
                </div>
                <hr id='hr-id'/>
                <CurriculumnCard
                    imageSrc={ProfilePic}
                    name="Vinicius Miguel de Arruda"
                    additionalInfo="Ciência da Computação"
                    description="Desenvolvedor Full-Stack"
                    starCount="254"
                    viewCount="12309"
                    text1="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five."
                    text2="Coord. Sebastião, Prof. Kaio Não sei "
                />
            </div>
        </>
    );
}

export default SearchCV;