import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import ForgotPassword from "../pages/Auth/ForgotPassword/ForgotPassword";
import RecoverToken from "../pages/Auth/RecoverToken/RecoverToken";
import SearchCV from "../pages/searchCV/SearchCV";
import PersonProfile from "../pages/PersonProfile/PersonProfile";
import { useContext } from "react";
import { AuthContext } from "../contexts/Auth/AuthContext";
import PublicRouteWithRedirect from "./PublicRouteWithRedirect";

const AppRoutes = () => {
  return (
    <Routes>
       <Route path="/login" element={
            <PublicRouteWithRedirect>
              <Login />
            </PublicRouteWithRedirect>
          } />

        <Route path="/register" element={
          <PublicRouteWithRedirect>
            <Register />
          </PublicRouteWithRedirect>
        } />

        <Route path="/forgot-password" element={
          <PublicRouteWithRedirect>
            <ForgotPassword />
          </PublicRouteWithRedirect>
        } />

        <Route path="/recover-token" element={
          <PublicRouteWithRedirect>
            <RecoverToken />
          </PublicRouteWithRedirect>
        } />
      
      <Route path="/" element={<Home/>} /> 
      <Route path="/search-cv" element={<SearchCV/>} />

      <Route path="/about-me" element={<PersonProfile />} />
      <Route path="/about-me/experiences" element={<PersonProfile />} />
      <Route path="/about-me/skils" element={<PersonProfile />} />
      <Route path="/about-me/info-add" element={<PersonProfile />} />

      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  )
}

export default AppRoutes;