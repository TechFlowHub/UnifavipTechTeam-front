import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import ForgotPassword from "../pages/Auth/ForgotPassword/ForgotPassword";
import RecoverToken from "../pages/Auth/RecoverToken/RecoverToken";
import SearchCurriculumns from "../pages/SearchCurriculumns/SearchCurriculumns";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login/>} /> 
      <Route path="/register" element={<Register/>} /> 
      <Route path="/forgot-password" element={<ForgotPassword/>} /> 
      <Route path="/recover-token" element={<RecoverToken/>} /> 

      
      <Route path="/" element={<Home/>} /> 
      <Route path="/search-cv" element={<SearchCurriculumns/>} />
    </Routes>
  )
}

export default AppRoutes;