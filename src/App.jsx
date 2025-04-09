import './App.css';
import Navbar from './components/Navbar/Navbar';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/Footer/Footer.jsx';
import { useLocation, useNavigationType } from 'react-router-dom';
import { useContext, useEffect, useRef, useState } from 'react';
import Loading from './components/Loading/Loading';
import { AuthContext } from './contexts/Auth/AuthContext.jsx';

function App() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const [isLoading, setIsLoading] = useState(false);
  const { loadingUser } = useContext(AuthContext);

  const hiddenRoutes = ["/login", "/register", "/forgot-password", "/recover-token"];
  const hideLayout = hiddenRoutes.includes(location.pathname);
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current && navigationType === "PUSH") {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 300);
      return () => clearTimeout(timer);
    } else {
      mounted.current = true;
    }
  }, [location.pathname, navigationType]);

  if (loadingUser) return <Loading />;

  return (
    <>
      {isLoading && <Loading />}

      {!hideLayout && <Navbar />}

      <div className="container">
        <AppRoutes />
      </div>

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;