import { ContainerJobs } from "./style";
import acreditar from "/jobs/acreditar.png";
import aviva from "/jobs/aviva.png";
import cic from "/jobs/cic.png";
import energia from "/jobs/energia.png";
import renove from "/jobs/renove.png";
import restora from "/jobs/restora.png";
import tec2 from "/jobs/tec2.png";
import wpp from "/header/wpp.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Jobs = () => {
  return (
    <ContainerJobs id="jobs">
      <div className="container">
        <div className="top_jobs">
          <p className="overline16 margin4 brown_light">Jobs</p>
          <h2 className="heading40 brown">Meus Trabalhos</h2>
        </div>
        <div className="mid_jobs">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            draggable={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div className="slider_jobs">
                <a href="https://renovedigital.com.br/" target="_blank">
                  <img src={renove} alt="acreditar" />
                </a>
                <div className="text_content_slider">
                  <h5 className="heading18 brown margin4">
                    Renove Digital (Instituicional)
                  </h5>
                  <p className="body16 gray2 margin16">
                    Este é um site Institucional, criada para ser exportada com
                    o um thema para o Wordpress, ela foi desenvolvido com as
                    seguintes tecnologias: PHP, CSS, HTML, Wordpress e
                    Javascript, site totalmente responsivo para atender as
                    demanas do mercado..
                  </p>
                  <p className="body12 gray3 margin12">
                    *Design do site foi feito pelo Designer da empresa Renove
                    Digital, e desenvolvido por mim, para a empresa Renove
                    Digital, detentora de toda a imagem do projeto.
                  </p>
                  <p className="body12 gray3 link">
                    Acesse o site{" "}
                    <a href="https://renovedigital.com.br/" target="_blank">
                      clicando aqui!
                    </a>
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider_jobs">
                <a href="https://app.tec2contabilidade.com.br/" target="_blank">
                  <img src={tec2} alt="tec2" />
                </a>
                <div className="text_content_slider">
                  <h5 className="heading18 brown margin4">
                    Te2 Contabilidade (sistema)
                  </h5>
                  <p className="body16 gray2 margin16">
                    Este é um sistema, criada para conter principalmente as
                    segintes funcionalidades: registro, criação de plano, upload
                    de arquivo e dashboard adm, ela foi desenvolvido
                    principalmente pelas seguintes tecnologias: React,
                    Typescript, Styled Components, Axios e Api do back-end.
                  </p>
                  <p className="body12 gray3 margin12">
                    *Design do site foi feito pelo Designer da empresa Renove
                    Digital e o front-end desenvolvido por mim, para a empresa
                    tec2 contabilidade, detentora de toda a imagem do projeto.
                  </p>
                  <p className="body12 gray3 link">
                    Acesse o site{" "}
                    <a
                      href="https://app.tec2contabilidade.com.br/"
                      target="_blank"
                    >
                      clicando aqui!
                    </a>
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider_jobs">
                <a href="https://acreditarsaude.com.br/" target="_blank">
                  <img src={acreditar} alt="acreditar" />
                </a>
                <div className="text_content_slider">
                  <h5 className="heading18 brown margin4">Acreditar saúde</h5>
                  <p className="body16 gray2 margin16">
                    Esta é uma Landing Page, criada para ser exportada como um
                    thema para o Wordpress, ela foi desenvolvido com as
                    seguintes tecnologias: PHP, CSS, HTML, Wordpress e
                    Javascript, site totalmente responsivo para atender as
                    demanas do mercado..
                  </p>
                  <p className="body12 gray3 margin12">
                    *Design do site foi feito pelo Designer da empresa Renove
                    Digital, e desenvolvido por mim, para a empresa Acreditar
                    Saúde, detentora de toda a imagem do projeto.
                  </p>
                  <p className="body12 gray3 link">
                    Acesse o site{" "}
                    <a href="https://acreditarsaude.com.br/" target="_blank">
                      clicando aqui!
                    </a>
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider_jobs">
                <a href="https://avivasaude.com.br/" target="_blank">
                  <img src={aviva} alt="acreditar" />
                </a>
                <div className="text_content_slider">
                  <h5 className="heading18 brown margin4">Aviva Saúde</h5>
                  <p className="body16 gray2 margin16">
                    Esta é uma Landing Page, criada para ser exportada como um
                    thema para o Wordpress, ela foi desenvolvido com as
                    seguintes tecnologias: PHP, CSS, HTML, Wordpress e
                    Javascript, site totalmente responsivo para atender as
                    demanas do mercado..
                  </p>
                  <p className="body12 gray3 margin12">
                    *Design do site foi feito pelo Designer da empresa Renove
                    Digital, e desenvolvido por mim, para a empresa Aviva Saúde,
                    detentora de toda a imagem do projeto.
                  </p>
                  <p className="body12 gray3 link">
                    Acesse o site{" "}
                    <a href="https://avivasaude.com.br/" target="_blank">
                      clicando aqui!
                    </a>
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider_jobs">
                <a href="https://cicadministracao.com.br/" target="_blank">
                  <img src={cic} alt="acreditar" />
                </a>
                <div className="text_content_slider">
                  <h5 className="heading18 brown margin4">Cic Administração</h5>
                  <p className="body16 gray2 margin16">
                    Esta é uma Landing Page, criada para ser exportada como um
                    thema para o Wordpress, ela foi desenvolvido com as
                    seguintes tecnologias: PHP, CSS, HTML, Wordpress e
                    Javascript, site totalmente responsivo para atender as
                    demanas do mercado..
                  </p>
                  <p className="body12 gray3 margin12">
                    *Design do site foi feito pelo Designer da empresa Renove
                    Digital, e desenvolvido por mim, para a empresa Cic
                    Administração, detentora de toda a imagem do projeto.
                  </p>
                  <p className="body12 gray3 link">
                    Acesse o site{" "}
                    <a href="https://cicadministracao.com.br/" target="_blank">
                      clicando aqui!
                    </a>
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider_jobs">
                <a
                  href="https://energiasolar.agentesolar.com.br/"
                  target="_blank"
                >
                  <img src={energia} alt="acreditar" />
                </a>
                <div className="text_content_slider">
                  <h5 className="heading18 brown margin4">
                    Agente Solar (LP para campanha)
                  </h5>
                  <p className="body16 gray2 margin16">
                    Esta é uma Landing Page, criada para ser exportada como um
                    thema para o Wordpress, ela foi desenvolvido com as
                    seguintes tecnologias: PHP, CSS, HTML, Wordpress e
                    Javascript, site totalmente responsivo para atender as
                    demanas do mercado..
                  </p>
                  <p className="body12 gray3 margin12">
                    *Design do site foi feito pelo Designer da empresa Renove
                    Digital, e desenvolvido por mim, para a empresa Agente Solar
                    (LP para campanha), detentora de toda a imagem do projeto.
                  </p>
                  <p className="body12 gray3 link">
                    Acesse o site{" "}
                    <a
                      href="https://energiasolar.agentesolar.com.br/"
                      target="_blank"
                    >
                      clicando aqui!
                    </a>
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider_jobs">
                <a href="https://restora.arq.br/" target="_blank">
                  <img src={restora} alt="acreditar" />
                </a>
                <div className="text_content_slider">
                  <h5 className="heading18 brown margin4">Restora</h5>
                  <p className="body16 gray2 margin16">
                    Esta é uma Landing Page, criada para ser exportada como um
                    thema para o Wordpress, ela foi desenvolvido com as
                    seguintes tecnologias: PHP, CSS, HTML, Wordpress e
                    Javascript, site totalmente responsivo para atender as
                    demanas do mercado..
                  </p>
                  <p className="body12 gray3 margin12">
                    *Design do site foi feito pelo Designer da empresa Renove
                    Digital, e desenvolvido por mim, para a empresa Restora,
                    detentora de toda a imagem do projeto.
                  </p>
                  <p className="body12 gray3 link">
                    Acesse o site{" "}
                    <a href="https://restora.arq.br/" target="_blank">
                      clicando aqui!
                    </a>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="bottom_jobs">
          <a href="https://wa.me/5513982051521" target="_blank">
            <button className="button button14 ajust_gap button_primary">
              <p>Fale Comigo</p> <img src={wpp} alt="whatsapp" />
            </button>
          </a>
        </div>
      </div>
    </ContainerJobs>
  );
};
