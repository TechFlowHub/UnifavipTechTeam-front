import './SearchCurriculumns.css';

const SearchCurriculumns = () => {
    return (
        <>
        <div className="page-header">
            <h1>Buscar Pessoas</h1>
            <p>Encontre estudantes e profissionais da nossa faculdade. Explore perfis, habilidades e experiências para conectar-se com <br/>talentos da nossa comunidade acadêmica.</p>
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
        </>
    );
}

export default SearchCurriculumns;