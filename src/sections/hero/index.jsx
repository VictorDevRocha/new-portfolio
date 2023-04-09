import { ContainerHero } from "./style";
import { Header } from "../headerPage";
import wpp from "/header/wpp.svg";
import image_hero from "/hero/victor.png";

export const Hero = () => {
  return (
    <ContainerHero>
      <section className="container" id="hero">
        <div className="content">
          <h5 className="heading18 white">Olá, eu sou o</h5>
          <h1 className="heading56 white">Victor Rocha</h1>
          <h4 className="heading24 white">Desenvolvedor front end</h4>
          <div className="buttons">
            <a href="https://wa.me/5513982051521" target="_blank">
              <button className="button button14 ajust_gap button_primary">
                <p>Fale Comigo</p> <img src={wpp} alt="whatsapp" />
              </button>
            </a>

            <a href="#about">
              <button className="button button14 ajust_gap button_primary">
                <p>Sobre Mim</p>
              </button>
            </a>
          </div>
        </div>
        <div className="image_content">
          <img src={image_hero} alt="victor" />
        </div>
      </section>
    </ContainerHero>
  );
};
