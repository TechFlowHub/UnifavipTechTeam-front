import { NavLink } from "react-router-dom";
import "./AboutHeader.css";

const AboutHeader = ({ link1, link2, link3, link4, activeLink }) => {
    return (
        <div>
            <div className="links-container">
                <NavLink
                    to={link1}
                    className={activeLink === link1 ? "active-link" : ""}
                >
                    <h3>Sobre mim</h3>
                </NavLink>
                <NavLink
                    to={link2}
                    className={activeLink === link2 ? "active-link" : ""}
                >
                    <h3>Minhas experiências</h3>
                </NavLink>
                <NavLink
                    to={link3}
                    className={activeLink === link3 ? "active-link" : ""}
                >
                    <h3>Minhas habilidades</h3>
                </NavLink>
                <NavLink
                    to={link4}
                    className={activeLink === link4 ? "active-link" : ""}
                >
                    <h3>Informações adicionais</h3>
                </NavLink>
            </div>
        </div>
    );
};

export default AboutHeader;