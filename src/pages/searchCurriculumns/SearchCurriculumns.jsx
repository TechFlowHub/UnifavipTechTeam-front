import './SearchCurriculumns.css';
import CurriculumnCard from '../../components/CurriculumnCard/CurriculumnCard';
import ProfilePic from '../../assets/placeholder_person.png';

const SearchCurriculumns = () => {
    return (
        <>
        <div className="page-header">
            <h1>Buscar Pessoas</h1>
            <p>Encontre estudantes e profissionais da nossa faculdade. Explore perfis, habilidades e experiências para conectar-se com talentos da nossa comunidade acadêmica.</p>
        </div>
        <div className='search-card'>
            <div>
                <label>Buscar pessoa por nome/cargo:</label>
                <input type="search" name="search" id="search" placeholder="Nome do aluno ou do cargo" />
            </div>
            <div>
                <label>Buscar pessoa por curso:</label>
                <select name="course" id="course">
                    <option value="">Selecione um curso</option>
                    <option value="1">Administração</option>
                    <option value="2">Ciência da Computação</option>
                    <option value="3">Engenharia de Software</option>
                    <option value="4">Sistemas de Informação</option>
                </select>
            </div>
            <input type="submit" value="Buscar currículo" />
        </div>
        <div className='search-results'>
            <div className='search-results-left'>
                <h2>Currículos</h2>
                <p>xxxx pessoa(s) encontrada(s)</p>
            </div>
            <div className='search-results-right'>
                <label>Ordenados por: Quantidade de estrelas</label>
                <select name="filter" id="filter">
                    <option value="all">Filtros</option>
                    <option value="">Opção 1</option>
                    <option value="">Opção 2</option>
                    <option value="">Opção 3</option>
                    <option value="">Opção 4</option>
                    <option value="">Opção 5</option>
                </select>
            </div>
        </div>
        <hr />
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
        </>
    );
}

export default SearchCurriculumns;