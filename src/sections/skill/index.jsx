import { ContainerSkills } from "./style";
import autodidata from "/skill/autodidata.svg";
import comunicacao from "/skill/comunicacao.svg";
import colaboracao from "/skill/colaboracao.svg";
import flexibilidade from "/skill/flexibilidade.svg";
import organizacao from "/skill/organizacao.svg";
import adaptabilidade from "/skill/adaptabilidade.svg";
import html from "/skill/html.svg";
import css from "/skill/css.svg";
import figma from "/skill/figma.svg";
import git from "/skill/git.svg";
import react from "/skill/react.svg";
import javascript from "/skill/javascript.svg";
import typescript from "/skill/typescript.svg";
import wordpress from "/skill/wordpress.svg";
import php from "/skill/php.svg";
import wpp from "/icons/wpp.svg";

export const Skills = () => {
  return (
    <ContainerSkills id="skills">
      <div className="container">
        <div className="top_skills">
          <p className="overline16 brown_light">SKILLS</p>
          <h2 className="heading40 brown">Minhas Habilidades</h2>
        </div>
        <div className="mid_skills">
          <div className="soft_skills">
            <h3 className="heading32 brown title_skills">Soft Skills</h3>
            <div className="cards_softs">
              <div className="card_soft">
                <img src={autodidata} alt="autodidata" />
                <p className="body14 brown">Autodidata</p>
              </div>
              <div className="card_soft">
                <img src={comunicacao} alt="comunicacao" />
                <p className="body14 brown">Comunicação</p>
              </div>
              <div className="card_soft">
                <img src={colaboracao} alt="colaboracao" />
                <p className="body14 brown">Colaboração</p>
              </div>
              <div className="card_soft">
                <img src={flexibilidade} alt="flexibilidade" />
                <p className="body14 brown">Flexibilidade</p>
              </div>
              <div className="card_soft">
                <img src={organizacao} alt="organizacao" />
                <p className="body14 brown">Organização</p>
              </div>
              <div className="card_soft">
                <img src={adaptabilidade} alt="adaptabilidade" />
                <p className="body14 brown">Adaptabilidade</p>
              </div>
            </div>
          </div>

          <div className="hard_skills">
            <h3 className="heading32 brown title_skills">Hard Skills</h3>
            <div className="icons_softs">
              <div className="icon_soft">
                <img src={html} alt="html" />
              </div>
              <div className="icon_soft">
                <img src={css} alt="css" />
              </div>
              <div className="icon_soft">
                <img src={figma} alt="figma" />
              </div>
              <div className="icon_soft">
                <img src={git} alt="git" />
              </div>
              <div className="icon_soft">
                <img src={react} alt="react" />
              </div>
              <div className="icon_soft">
                <img src={javascript} alt="javascript" />
              </div>
              <div className="icon_soft">
                <img src={typescript} alt="typescript" />
              </div>
              <div className="icon_soft">
                <img src={php} alt="php" />
              </div>
              <div className="icon_soft">
                <img src={wordpress} alt="wordpress" />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom_Skills">
          <a href="https://wa.me/5513982051521" target="_blank">
            <button className="button button14 ajust_gap button_primary">
              <p>Fale Comigo</p> <img src={wpp} alt="whatsapp" />
            </button>
          </a>
        </div>
      </div>
    </ContainerSkills>
  );
};
