import './App.css'
import Navbar from './components/Navbar/Navbar';
import AppRoutes from './routes/AppRoutes'
import Footer from './components/Footer/Footer.jsx'

function App() {

  return (
    <>
      <Navbar />
      
      <div className='container'>
        <AppRoutes clasname='container'/>
      </div>
      
      <Footer />
    </>
  )
}

export default App;
