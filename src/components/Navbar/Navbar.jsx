import './Navbar.css';
import Logo from '../../assets/logo_favip.png'
import { Link } from 'react-router-dom';
import PersonPlaceholder from '../../assets/placeholder_person.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/' className='navbar-logo'><img src={Logo} alt="LogoFavip" /></Link>

      <div className='navegation'>
        <Link to='/'>Home</Link>
        <Link to='/search-cv'>Buscar currículos</Link>
        <Link to='/login'>
          {true ? (
            'Entrar'
          ) : 
            <>
              Meu Perfil <img src={PersonPlaceholder} alt="User" />
            </>
          }
        </Link>

      </div>
    </div>
  )
}

export default Navbar;