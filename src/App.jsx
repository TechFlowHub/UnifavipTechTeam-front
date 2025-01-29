import './App.css'
import Navbar from './components/Navbar/Navbar';
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <>
      <Navbar />
      
      <div className='container'>
        <AppRoutes clasname='container'/>
      </div>
      
    </>
  )
}

export default App;
