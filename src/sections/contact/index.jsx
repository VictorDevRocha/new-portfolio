import { ContainerContact } from "./style";
import linkedin from "/icons/linkedin.svg";
import instagram from "/icons/instagram.svg";
import wpp from "/icons/wpp.svg";
import { useState } from "react";
import axios from "axios";

export const Contact = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [emaill, setEmaill] = useState("");
  const [assunto, setAssunto] = useState("");

  function formatPhoneNumber(phoneNumberString) {
    const cleaned = ("" + phoneNumberString).replace(/\D/g, "");
    const match = cleaned.match(/^(\d{2})(\d{4,5})(\d{4})$/);
    if (match) {
      return "(" + match[1] + ") " + match[2] + "-" + match[3];
    }
    return null;
  }

  function handleInputChange(event) {
    const inputPhoneNumber = event.target.value;
    const formattedPhoneNumber = formatPhoneNumber(inputPhoneNumber);
    setPhoneNumber(formattedPhoneNumber || inputPhoneNumber);
  }

  function enviarEmail(nome, email, phone, assunto) {
    const serviceID = "service_3di93td";
    const templateID = "template_fwgzx9p";
    const userID = "Cfe9e-hDgeIhemQYY";

    const data = {
      service_id: serviceID,
      template_id: templateID,
      user_id: userID,
      template_params: {
        nome: nome,
        email: email,
        telefone: phone,
        assunto: assunto,
      },
    };

    axios
      .post("https://api.emailjs.com/api/v1.0/email/send", data)
      .then((response) => {
        console.log("E-mail enviado:", response.status, response.data);
        if (response.status == 200) {
          alert("e-mail enviado");
        } else {
          alert("Erro ao enviar o formulario!");
        }
      })
      .catch((error) => {
        console.error("Erro ao enviar e-mail:", error);
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (name != "" && phoneNumber != "" && emaill != "") {
      enviarEmail(name, emaill, phoneNumber, assunto);
      setName("");
      setEmaill("");
      setPhoneNumber("");
      setAssunto("");
    } else {
      alert("Por favor, preencha os campos do formulario!");
    }
  }

  return (
    <ContainerContact id="contact">
      <div className="container">
        <div className="left_contact">
          <p className="overline16 brown_light margin4">CONTACT</p>
          <h2 className="heading40 brown margin8">Entre em contato comigo!</h2>
          <p className="body16 primary">
            Fique a vontade para <strong>entrar em contato comigo para qualquer tipo de assunto,</strong>{" "}
            tanto pelo formulário quanto para qualquer outro meio, <strong>estou disponível!</strong>{" "}
          </p>
          <div className="socials">
            <a target="_blank" href="https://wa.me/5513982051521">
              <button className="button_primary icon_social">
                <img src={wpp} alt="wpp" />
              </button>
            </a>

            <a target="_blank" href="https://github.com/VictorDevRocha">
              <button className="button_primary icon_social">
                <img src={linkedin} alt="linkedin" />
              </button>
            </a>

            <a target="_blank" href="https://www.instagram.com/viictor_rxd/">
              <button className="button_primary icon_social">
                <img src={instagram} alt="instagram" />
              </button>
            </a>
          </div>
        </div>
        <div className="right_contact">
          <form action="submit">
            <h3 className="heading32 primary">Preencha o Formulario</h3>
            <input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="email"
              placeholder="E-mail"
              value={emaill}
              onChange={(e) => {
                setEmaill(e.target.value);
              }}
            />
            <input type="tel" placeholder="Telefone" value={phoneNumber} onChange={handleInputChange} />
            <input
              type="text"
              placeholder="Assunto"
              value={assunto}
              onChange={(e) => {
                setAssunto(e.target.value);
              }}
            />
            <button
              className="button16 white"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit(e);
              }}>
              ENVIAR
            </button>
          </form>
        </div>
      </div>
    </ContainerContact>
  );
};
