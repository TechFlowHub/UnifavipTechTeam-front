import React, { useState } from "react";
import "./Footer.css";
import Logo from "../../assets/logo_favip_white_210.png";
import QrCode from "../../assets/qrcode_wyden_2.png";
import { FaGithub } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const footerLinks = [
    {
      title: "Quem somos ?",
      links: [
        { text: "Nossas unidades", href: "#" },
        { text: "Onde estamos", href: "#" },
        { text: "Ouvidoria", href: "#" },
        { text: "Responsabilidade", href: "#" },
      ],
    },
    {
      title: "Redes sociais",
      links: [
        { text: "Instagram", href: "#" },
        { text: "Facebook", href: "#" },
        { text: "Twitter", href: "#" },
        { text: "Linkedin", href: "#" },
        { text: "Youtube", href: "#" },
      ],
    },
    {
      title: "Cursos",
      links: [
        { text: "Graduação", href: "#" },
        { text: "Pós-graduação", href: "#" },
        { text: "Experimentar", href: "#" },
        { text: "EAD", href: "#" },
      ],
    },
    {
      title: "Área do aluno",
      links: [
        { text: "Portal do aluno", href: "#" },
        { text: "Consultar diploma", href: "#" },
        { text: "Enade", href: "#" },
        { text: "SIA", href: "#" },
      ],
    },
  ];

  return (
    <div className="footer">
      <div className="footer-top">
        <img src={Logo} alt="logo" />
      </div>
      <div className="footer-content">
        <div className="list-container">
          {footerLinks.map((column, index) => (
            <div className="list-column" key={index}>
              <h3 onClick={() => toggleDropdown(index)}>
                {column.title} {activeDropdown === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </h3>
              <ul className={activeDropdown === index ? "active" : ""}>
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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