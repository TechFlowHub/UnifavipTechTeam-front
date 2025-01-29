import './PersonCardHome.css';
import Image from '../../assets/placeholder_person.png';

const PersonCardHome = () => {
  return (
    <button className="person-card-home">
      <div className='organization-card'>
        <img src={Image} alt="imagem pessoal" />
        
        <div>
          <div className='card-content'>
            <span className='home-card-name'>Vinicius Miguel de Arruda</span>
            <span className='home-card-course'>Ciência da Computação</span>
            <span className='home-card-position'>Desenvolvedor Full-Stack</span>
            <span className='home-card-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five.</span>
          </div>
          
          <div className='card-bottom'>
            <span>estrela</span>
            <span>recomendado</span>
          </div>
        </div>
      </div>
    </button>
  )
}

export default PersonCardHome;