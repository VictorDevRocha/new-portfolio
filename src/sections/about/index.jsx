import { ContainerAbout } from "./style";
import linkedin from "/icons/linkedin.svg";
import instagram from "/icons/instagram.svg";
import github from "/icons/github.svg";
import download from "/icons/download.svg";
import image_about from "/about/victor.png";

export const About = () => {
  return (
    <ContainerAbout id="about">
      <div className="container">
        <div className="left_about">
          <p className="overline16 brown_light">ABOUT</p>
          <h2 className="heading40 brown">Sobre mim</h2>
          <p className="body16 primary">
            Sou um Desenvolvedor <strong>front-end</strong> residente em Praia
            Grande, São Paulo, com uma sólida formação acadêmica na área.
            Atualmente, estou cursando o segundo semestre na{" "}
            <strong>faculdade UNICV</strong> e estou empenhado em aprimorar
            minhas habilidades e conhecimentos para me tornar um profissional de
            programação de alto nível.
          </p>
          <p className="body16 primary">
            Estou motivado a crescer e desenvolver minhas habilidades em
            programação, e estou ansioso para explorar as muitas oportunidades
            que a carreira em programação pode oferecer. Como um{" "}
            <strong>profissional altamente qualificado e dedicado</strong>,
            estou confiante de que serei capaz de oferecer{" "}
            <strong>valor excepcional</strong> a qualquer equipe de programação
            em que eu trabalhe.
          </p>

          <div className="buttons">
            <a target="_blank" href="./curriculo.pdf">
              <button className="button14 button_primary button_download ajust_gap">
                <span>Download CV</span>
                <img src={download} alt="download" />
              </button>
            </a>

            <div className="buttons_socials">
              <a target="_blank" href="https://github.com/VictorDevRocha">
                <button className="button_primary icon_social">
                  <img src={linkedin} alt="linkedin" />
                </button>
              </a>

              <a
                target="_blank"
                href="https://www.linkedin.com/in/victor-rocha-58056223a/"
              >
                <button className="button_primary icon_social">
                  <img src={github} alt="github" />
                </button>
              </a>

              <a target="_blank" href="https://www.instagram.com/viictor_rxd/">
                <button className="button_primary icon_social">
                  <img src={instagram} alt="instagram" />
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="right_about">
          <img src={image_about} alt="Victor Rocha" />
        </div>
      </div>
    </ContainerAbout>
  );
};
