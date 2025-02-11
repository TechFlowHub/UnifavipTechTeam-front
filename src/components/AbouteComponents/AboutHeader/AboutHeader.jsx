import { Link, useLocation } from "react-router-dom";
import "./AboutHeader.css";

const AboutHeader = ({ stepOne, stepTwo, stepThree, stepFour }) => {
    const location = useLocation();

    return (
        <div className="header-container">
            <nav className="navigation">
                <Link 
                    to={stepOne} 
                    className={`about-link ${location.pathname === stepOne ? "active" : ""}`}
                >
                    Sobre mim
                </Link>
                <Link 
                    to={stepTwo} 
                    className={`about-link ${location.pathname === stepTwo ? "active" : ""}`}
                >
                    Minhas experiências
                </Link>
                <Link 
                    to={stepThree} 
                    className={`about-link ${location.pathname === stepThree ? "active" : ""}`}
                >
                    Minhas habilidades
                </Link>
                <Link 
                    to={stepFour} 
                    className={`about-link ${location.pathname === stepFour ? "active" : ""}`}
                >
                    Informações adicionais
                </Link>    
            </nav>
        </div>
    );
};

export default AboutHeader;
