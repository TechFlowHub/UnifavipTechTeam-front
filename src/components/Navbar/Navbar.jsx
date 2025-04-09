import './Navbar.css';
import Logo from '../../assets/logo_favip.png';
import { Link, useNavigate } from 'react-router-dom';
import PersonPlaceholder from '../../assets/placeholder_person.png';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { useNotification } from '../../contexts/NotificationContext';
import Loading from '../Loading/Loading'; // ✅ import

const Navbar = () => {
  const auth = useContext(AuthContext);
  const isLogged = auth.user !== null;
  const navigate = useNavigate();
  const { showNotification } = useNotification();
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    auth.signout();

    showNotification({
      message: "Você foi deslogado!",
      type: "info",
      duration: 1000,
    });

    setLoading(true);

    setTimeout(() => {
      navigate("/");
      setLoading(false);
    }, 1000);
  };

  if (loading) return <Loading />; 

  return (
    <div className='navbar'>
      <Link to='/' className='navbar-logo'><img src={Logo} alt="LogoFavip" /></Link>

      <div className='navegation'>
        <Link to='/'>Home</Link>
        <Link to='/search-cv'>Buscar currículos</Link>
        {!isLogged ? (
          <Link to='/login'>Entrar</Link>
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
  );
};

export default Navbar;
