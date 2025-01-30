import './Card.css';
import Image from '../../../assets/placeholder_person.png';

import { FaStar } from "react-icons/fa";

const Card = ({ person }) => {
  return (
    <button className="person-card-home">
      <div className='organization-card'>
        <img src={Image} alt="imagem pessoal" />
        
        <div>
          <div className='card-content'>
            <span className='home-card-name'>{person?.name || 'Vinicius Miguel de Arruda'}</span>
            <span className='home-card-course home-card-config'>{person?.course || 'Ciência da Computação'}</span>
            <span className='home-card-description home-card-config'>
              {person?.description || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five."}
            </span>
          </div>
          
          <div className='card-bottom'>
            <span className='home-card-star home-card-config'>
              <FaStar /> {person?.stars || '0'}
            </span>
            <span className='home-card-recomend home-card-config'>
              {person?.recomend ? `Recomendado por: ${person.recomend}` : "Recomendado por: Coord. Sebastião..."}
            </span>
          </div>
        </div>
      </div>
    </button>
  );
};

export default Card;