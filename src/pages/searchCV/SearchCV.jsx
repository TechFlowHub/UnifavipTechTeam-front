import './SearchCV.css';
import CardCV from '../../components/CardCV/CardCV';
import ProfilePic from '../../assets/placeholder_person.png';
import { FaSearch, FaGraduationCap, FaFilter } from "react-icons/fa";
import { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import FormModal from '../../components/Forms/FormModal/Form';

const SearchCV = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const formConfig = {
        submitButtonText: "Filtrar",
        resetButtonText: "Limpar",
        onSubmit: (formData) => {
          console.log("Dados enviados:", formData);
        },
        fields: [
          {
            id: "possui_recomendacoes",
            label: "Possui Recomendações",
            type: "select",
            options: [
              { value: "", label: "Ambos" },
              { value: "sim", label: "Sim" },
              { value: "nao", label: "Não" },
            ],
          },
          {
            id: "possui_experiencia",
            label: "Possui Experiência",
            type: "select",
            options: [
              { value: "", label: "Ambos" },
              { value: "sim", label: "Sim" },
              { value: "nao", label: "Não" },
            ],
          },
          {
            id: "previsao_conclusao",
            label: "Previsão de Conclusão",
            type: "select",
            options: [
              { value: "", label: "Nos proximos 2 anos" },
              { value: "2024", label: "2024" },
              { value: "2025", label: "2025" },
              { value: "2026", label: "2026" },
              { value: "2027", label: "2027" },
            ],
          },
          {
            id: "pcd",
            label: "Pessoa com Deficiência",
            type: "select",
            options: [
              { value: "sim", label: "Não" },
              { value: "nao", label: "Sim" },
            ],
          },
          {
            id: "quantidade_estrelas",
            label: "Quantidade de Estrelas",
            type: "select",
            options: [
              { value: "crescente", label: "Crescente" },
              { value: "descrescente", label: "Descrescente" },
            ],
          },
          {
            id: "cargo_pretendido",
            label: "Cargo Pretendido",
            type: "select",
            options: [
              { value: "desenvolvedor", label: "Desenvolvedor Full-Stack" },
              { value: "analista_sistemas", label: "Analista de Sistemas" },
              { value: "engenheiro_software", label: "Engenheiro de Software" },
              { value: "suporte_tecnico", label: "Suporte Técnico" },
              { value: "designer_ui_ux", label: "Designer UI/UX" },
            ],
          },
        ],
      };

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
                        
                        <button onClick={() => setModalOpen(!isModalOpen)}>Filtrar <FaFilter /></button>
                    </div>
                </div>
                <hr id='hr-id'/>
                <CardCV
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

            <div>
            <Modal
                isOpen={isModalOpen}
                title="Filtros"
                onClose={() => setModalOpen(false)}
                onSubmit={null}
            >
                <FormModal formConfig={ formConfig }/>
            </Modal>
            </div>

        </>
    );
}

export default SearchCV;