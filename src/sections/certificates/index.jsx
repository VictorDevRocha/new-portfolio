import { ContainerCertificates } from "./style";
import wpp from "/header/wpp.svg";
import check from "/certificates/check.svg";
import book from "/certificates/book.svg";
import download from "/certificates/download.svg";

export const Certificates = () => {
  return (
    <ContainerCertificates id="certifications">
      <div className="container">
        <div className="top_certificates">
          <p className="overline16 white">certifications</p>
          <h2 className="heading40 white">Minhas Certificações</h2>
        </div>

        <div className="mid_certificates">
          <div className="left_certificates">
            <div className="free">
              <h3 className="heading32 white">Cursos livres</h3>
              <div className="links_free">
                <ul>
                  <li className="body18 white">
                    <span className="ajust_gap">
                      <img src={check} alt="check" /> DevOps & Agile Culture |
                      FIAP
                    </span>
                    <a
                      href="/certificates/dev.pdf"
                      target="_blank"
                      className="ajust_gap"
                    >
                      <img src={download} alt="download" />
                    </a>
                  </li>
                  <li className="body18 white">
                    <span className="ajust_gap">
                      <img src={check} alt="check" /> Cloud Fundamentals | FIAP
                    </span>
                    <a
                      href="/certificates/cloud.pdf"
                      target="_blank"
                      className="ajust_gap"
                    >
                      <img src={download} alt="download" />
                    </a>
                  </li>
                  <li className="body18 white">
                    <span className="ajust_gap">
                      <img src={check} alt="check" /> User Experience | FIAP
                    </span>
                    <a
                      href="/certificates/user.pdf"
                      target="_blank"
                      className="ajust_gap"
                    >
                      <img src={download} alt="download" />
                    </a>
                  </li>
                  <li className="body18 white">
                    <span className="ajust_gap">
                      <img src={check} alt="check" /> Design Gráfico | FIAP
                    </span>
                    <a href="#" target="_blank" className="ajust_gap">
                      <img src={download} alt="download" />
                    </a>
                  </li>
                  <li className="body18 white">
                    <span className="ajust_gap">
                      <img src={check} alt="check" /> Excell | Udemy
                    </span>
                    <a
                      href="/certificates/excell.pdf"
                      target="_blank"
                      className="ajust_gap"
                    >
                      <img src={download} alt="download" />
                    </a>
                  </li>
                  <li className="body18 white">
                    <span className="ajust_gap">
                      <img src={check} alt="check" /> Inglês | Udemy
                    </span>
                    <a
                      href="/certificates/ingles.pdf"
                      target="_blank"
                      className="ajust_gap"
                    >
                      <img src={download} alt="download" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right_certificates">
            <div className="dev">
              <h3 className="heading32 white">Faculdade / Dev </h3>
              <div className="links_dev">
                <div className="content">
                  <h5 className="heading18 white ajust_gap margin4">
                    <img src={book} alt="book" />
                    Análise e Desenvolvimento de Sistemas - EAD
                  </h5>
                  <h6 className="heading16 white margin4">
                    UNICV - Centro Universitário Cidade Verde
                  </h6>
                  <p className="body14 white ">
                    Set. de 2022 - Abril de 2025 - Segundo semestre atualmente
                  </p>
                </div>
              </div>

              <div className="links_dev divider">
                <div className="content">
                  <h5 className="heading18 white ajust_gap margin4">
                    <img src={book} alt="book" />
                    Programador Full-Stack - EAD
                  </h5>
                  <h6 className="heading16 white margin4">OneBitCode</h6>
                  <p className="body14 white ">Maio de 2022 - Agosto de 2022</p>
                </div>
                <a
                  href="/certificates/fullstack.pdf"
                  target="_blank"
                  className="ajust_gap"
                >
                  <img src={download} alt="download" />
                </a>
              </div>

              <div className="links_dev divider">
                <div className="content">
                  <h5 className="heading18 white ajust_gap margin4">
                    <img src={book} alt="book" />
                    PRO FIGMA - EAD
                  </h5>
                  <h6 className="heading16 white margin4">
                    Udemy - Lucas Marte
                  </h6>
                  <p className="body14 white ">Março de 2023 - Abril de 2023</p>
                </div>
                <a
                  href="/certificates/figma.pdf"
                  target="_blank"
                  className="ajust_gap"
                >
                  <img src={download} alt="download" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom_certificates">
          <a href="https://wa.me/5513982051521" target="_blank">
            <button className="button button14 ajust_gap button_primary">
              <p>Fale Comigo</p> <img src={wpp} alt="whatsapp" />
            </button>
          </a>
        </div>
      </div>
    </ContainerCertificates>
  );
};
