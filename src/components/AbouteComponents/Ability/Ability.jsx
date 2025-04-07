import './Ability.css'
import { FaSearch } from "react-icons/fa";

const Ability = ({ isOwner }) => {
  return (
    <div className="ability">
      <div className='title'>
        <h1>Habilidades</h1>
        <span>Adicione uma nova habilidade</span>
      </div>

      <div className="ability-content">
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            className="search-ability"
            placeholder="Escreva ou pesquise suas habilidades"
          />
        </div>

        <div className="ability-list">
          {[...Array(20)].map((_, index) => (
            <div className='ability-info' key={index}>
              <span>Lorem Ipsum {index + 1}</span>
              <div className='ability-level'>
                <div>
                  <input type="radio" name={`ability-${index}`} id={`basic-${index}`} />
                  <label htmlFor={`basic-${index}`}>Básico</label>
                </div>
                <div>
                  <input type="radio" name={`ability-${index}`} id={`inter-${index}`} />
                  <label htmlFor={`inter-${index}`}>Intermediário</label>
                </div>
                <div>
                  <input type="radio" name={`ability-${index}`} id={`adv-${index}`} />
                  <label htmlFor={`adv-${index}`}>Avançado</label>
                </div>
              </div>
              <button>Remover Habilidade</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Ability;
