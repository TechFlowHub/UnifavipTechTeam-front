import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login/>} /> 
      <Route path="/" element={<Home/>} /> 
      <Route path="/search-cv" element={<Home/>} /> 
    </Routes>
  )
}

export default AppRoutes;