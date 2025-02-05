import "./Footer.css";
import Logo from "../../assets/logo_favip_180.png";
import QrCode from "../../assets/qrcode_wyden_2.png";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <img src={Logo} alt="logo" />
      </div>
      <div className="footer-content">
        <div className="list-container">
          <div className="list-column">
            <h3>Quem somos ?</h3>
            <ul>
              <li>
                <a href="#">Nossas unidades</a>
              </li>
              <li>
                <a href="#">Onde estamos</a>
              </li>
              <li>
                <a href="#">Ouvidoria</a>
              </li>
              <li>
                <a href="#">Responsabilidade</a>
              </li>
            </ul>
          </div>
          <div className="list-column">
            <h3>Redes sociais</h3>
            <ul>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Linkedin</a>
              </li>
              <li>
                <a href="#">Youtube</a>
              </li>
            </ul>
          </div>
          <div className="list-column">
            <h3>Cursos</h3>
            <ul>
              <li>
                <a href="#">Graduação</a>
              </li>
              <li>
                <a href="#">Pós-graduação</a>
              </li>
              <li>
                <a href="#">Experimentar</a>
              </li>
              <li>
                <a href="#">EAD</a>
              </li>
            </ul>
          </div>
          <div className="list-column">
            <h3>Área do aluno</h3>
            <ul>
              <li>
                <a href="#">Portal do aluno</a>
              </li>
              <li>
                <a href="#">Consultar diploma</a>
              </li>
              <li>
                <a href="#">Enade</a>
              </li>
              <li>
                <a href="#">SIA</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="footer-mid">
          <div>
            <p>
              <a href="">Políticas de Privacidade</a>
            </p>
            <p>
              <a href="">Código de Ética</a>
            </p>
            <p>
              <a href="">Regulamentos</a>
            </p>
          </div>
          <img src={QrCode} alt="qrcode" />
        </div>
        <hr />
        <div className="footer-bottom">
          <p>Unifavip Wyden - Todos os diretos reservados </p>
          <p>
            Desenvolvido por{" "}
            <a href="https://github.com/a5ur4" target="_blank">
              a5ur4
            </a>
            ,{" "}
            <a href="https://github.com/viniimiguel" target="_blank">
              Viniimiguel
            </a>{" "}
            e{" "}
            <a href="https://github.com/LeonardoAlmds" target="_blank">
              LeonardoAlmds
            </a>
            <FaGithub />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
