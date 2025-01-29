import PersonCardHome from '../../components/PersonCardHome/PersonCardHome';
import './Home.css'

const Home = () => {
  return (
    <div className="home-page">
      <div className='banner-home'>
        <h1>Uma das instituições com maior nota do MEC no Brasil.</h1>
        <button>Nossas unidades</button>
      </div>

      <h1>Tecnologia da Informação</h1>

      <div className='content-card-home'>
        <PersonCardHome />
        <PersonCardHome />
      </div>

    </div>
  )
}

export default Home;