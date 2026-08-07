import emailjs from "emailjs-com";
import { useState } from "react";
import SectionContainer from "./SectionContainer";

const Contact = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = mailData;

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);

  const onChange = (e) => {
    setMailData({
      ...mailData,
      [e.target.name]: e.target.value,
    });

    setError(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      name.trim().length === 0 ||
      email.trim().length === 0 ||
      message.trim().length === 0
    ) {
      setError(true);
      setSuccess(false);
      return;
    }

    setSending(true);

    emailjs
      .send(
        "TU_SERVICE_ID",
        "TU_TEMPLATE_ID",
        mailData,
        "TU_PUBLIC_KEY"
      )
      .then(
        () => {
          setError(false);
          setSuccess(true);
          setSending(false);

          setMailData({
            name: "",
            email: "",
            message: "",
          });

          setTimeout(() => {
            setSuccess(false);
          }, 5000);
        },
        (err) => {
          console.error("Error al enviar el mensaje:", err);
          setSending(false);
          setError(true);
        }
      );
  };

  return (
    <SectionContainer
      name="contact"
      title="Charlemos"
      subTitle="¿TENÉS UN PROYECTO EN MENTE?"
      leftImage="static/img/title-4.jpg"
      leftImageTitle="Charlemos"
    >
      <div className="contact-intro">
        <h3 className="dark-color">Contame qué necesitás</h3>

        <p>
          Puede ser una marca, una web, contenido o una idea que todavía está
          tomando forma. Escribime y vemos cómo llevarla adelante.
        </p>
      </div>

      <div className="row">
        <div className="col-lg-12 m-30px-b sm-m-15px-b">
          <div className="contact-form">
            <form className="contactform" onSubmit={onSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      id="name"
                      name="name"
                      onChange={onChange}
                      value={name}
                      type="text"
                      placeholder="Tu nombre"
                      className="validate form-control"
                      required
                    />

                    <span className="input-focus-effect theme-bg" />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      id="email"
                      type="email"
                      placeholder="Tu email"
                      name="email"
                      onChange={onChange}
                      value={email}
                      className="validate form-control"
                      required
                    />

                    <span className="input-focus-effect theme-bg" />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      id="message"
                      placeholder="Contame brevemente sobre tu proyecto o necesidad"
                      name="message"
                      onChange={onChange}
                      value={message}
                      className="form-control"
                      required
                    />

                    <span className="input-focus-effect theme-bg" />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="send">
                    <button
                      className="btn btn-theme"
                      type="submit"
                      disabled={sending}
                    >
                      {sending ? "Enviando..." : "Enviar mensaje"}
                    </button>
                  </div>

                  {error && (
                    <p className="contact-message contact-message-error">
                      Revisá que todos los campos estén completos.
                    </p>
                  )}

                  {success && (
                    <p className="contact-message contact-message-success">
                      ¡Gracias! Tu mensaje fue enviado correctamente.
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="row contact-details">
        <div className="col-md-4 m-15px-tb">
          <div className="contact-info">
            <i className="theme-color ti-location-pin" />

            <h6 className="dark-color font-alt">Desde Córdoba</h6>

            <p>Trabajo de manera remota con proyectos de Argentina y Latam.</p>
          </div>
        </div>

        <div className="col-md-4 m-15px-tb">
          <div className="contact-info">
            <i className="theme-color ti-email" />

            <h6 className="dark-color font-alt">Email</h6>

            <p>
              <a href="mailto:dg.antonellagatti@gmail.com">
                dg.antonellagatti@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="col-md-4 m-15px-tb sm-m-0px-b">
          <div className="contact-info">
            <i className="theme-color ti-link" />

            <h6 className="dark-color font-alt">También podés encontrarme en</h6>

            <p>
              <a
                href="https://www.linkedin.com/in/antonnellagatti/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>

              {" · "}

              <a
                href="https://www.instagram.com/roamstudio.ar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Contact;