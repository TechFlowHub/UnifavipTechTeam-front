import './Navbar.css';
import Logo from '../../assets/logo_favip.png'
import { Link } from 'react-router-dom';
import PersonPlaceholder from '../../assets/placeholder_person.png'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';

const Navbar = () => {
  const auth = useContext(AuthContext);
  const isLogged = auth.user !== null;

  const handleClick = () => {
    auth.signout();
  }

  return (
    <div className='navbar'>
      <Link to='/' className='navbar-logo'><img src={Logo} alt="LogoFavip" /></Link>

      <div className='navegation'>
        <Link to='/'>Home</Link>
        <Link to='/search-cv'>Buscar currículos</Link>
        {!isLogged ? (
            <Link to='/login'>
              Entrar
            </Link>
          ) : (
            <div className="profile-menu">
              <div className="profile-trigger">
                <span>Meu Perfil</span>
                <img src={PersonPlaceholder} alt="User" />
              </div>
              <div className="dropdown-content">
                <Link to="/about-me">Meu Perfil</Link>
                <button onClick={handleClick}>Sair</button>
              </div>
            </div>
        )}

        

      </div>
    </div>
  )
}

export default Navbar;