import './App.css'
import Navbar from './components/Navbar/Navbar';
import AppRoutes from './routes/AppRoutes'
import Footer from './components/Footer/Footer.jsx'
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  
  const hiddenRoutes = ["/login", "/register", "/forgot-password", "/recover-token"];
  const hideLayout = hiddenRoutes.includes(location.pathname);


  return (
    <>
      {hideLayout ? null : <Navbar />}

      <div className='container'>
        <AppRoutes clasname='container'/>
      </div>
      
      {hideLayout ? null : <Footer />}
    </>
  )
}

export default App;
