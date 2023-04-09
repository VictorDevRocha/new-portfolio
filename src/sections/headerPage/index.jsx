import { useState } from "react";
import { ContainerHeader } from "./style";
import logo from "/header/logo.png";
import wpp from "/header/wpp.svg";

export const Header = () => {
  const [menuMobile, setMenuMobile] = useState(false);

  const handleMenu = () => {
    setMenuMobile(!menuMobile);
  };
  return (
    <ContainerHeader>
      <nav className="container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="#home" className="link16 white">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="link16 white">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="link16 white">
                Skills
              </a>
            </li>
            <li>
              <a href="#jobs" className="link16 white">
                Jobs
              </a>
            </li>
            <li>
              <a href="#certifications" className="link16 white">
                Certifications
              </a>
            </li>
            <li>
              <a href="#contact" className="link16 white">
                Contato
              </a>
            </li>
          </ul>
        </div>
        <div className="button_header">
          <a href="https://wa.me/5513982051521" target="_blank">
            <button className="button button14 ajust_gap button_primary">
              <p>Fale Comigo</p> <img src={wpp} alt="whatsapp" />
            </button>
          </a>
        </div>
        <div onClick={handleMenu} className="mobile_click">
          <div className="line_click"></div>
          <div className="line_click"></div>
          <div className="line_click"></div>
        </div>
      </nav>
      <div className={menuMobile ? "active mobile" : "mobile"}>
        <p onClick={handleMenu} className="overline16 brown close_menu">
          x
        </p>
        <div className="links_mobile">
          <ul>
            <li
              onClick={() => {
                setMenuMobile(!menuMobile);
              }}
            >
              <a href="#home" className="link16 white">
                Home
              </a>
            </li>
            <li
              onClick={() => {
                setMenuMobile(!menuMobile);
              }}
            >
              <a href="#about" className="link16 white">
                About
              </a>
            </li>
            <li
              onClick={() => {
                setMenuMobile(!menuMobile);
              }}
            >
              <a href="#skills" className="link16 white">
                Skills
              </a>
            </li>
            <li
              onClick={() => {
                setMenuMobile(!menuMobile);
              }}
            >
              <a href="#jobs" className="link16 white">
                Jobs
              </a>
            </li>
            <li
              onClick={() => {
                setMenuMobile(!menuMobile);
              }}
            >
              <a href="#certifications" className="link16 white">
                Certifications
              </a>
            </li>
            <li
              onClick={() => {
                setMenuMobile(!menuMobile);
              }}
            >
              <a href="#contact" className="link16 white">
                Contato
              </a>
            </li>
          </ul>
          <div className="button_link_mobile">
            <a href="https://wa.me/5513982051521" target="_blank">
              <button className="button button14 ajust_gap button_primary">
                <p>Fale Comigo</p> <img src={wpp} alt="whatsapp" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </ContainerHeader>
  );
};
