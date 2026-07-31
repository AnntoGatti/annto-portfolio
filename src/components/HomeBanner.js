import { useContext } from "react";
import { PortfolioContext } from "../Context";
import TypingAnimation from "./TypingAnimation";

const HomeBanner = () => {
  const { nav, changeNav } = useContext(PortfolioContext);

  const activePageClass = () =>
    nav === "home" ? "" : "page--inactive";

  return (
    <div
      className={`page home-banner white-bg ${activePageClass()}`}
      id="home"
    >
      <div className="container-fluid p-0">
        <div className="row no-gutters full-screen">
          <div className="col-lg-3 col-xl-4 blue-bg">
            <div className="d-flex align-items-end home-user-avtar v-center-box">
              <img
                src="/static/img/user.png"
                alt="Identidad visual de Annto"
              />
            </div>
          </div>

          <div className="col-lg-9 col-xl-8">
            <div className="page-scroll">
              <div className="page-content">
                <div className="v-center-box d-flex align-items-center">
                  <div className="home-text">
                    <h6 className="dark-color theme-after">
                      Hola 👋
                    </h6>

                    <h1 className="dark-color blue-after">
                      Soy Annto
                    </h1>

                    <p className="hero-description">
                      Diseño productos digitales, marcas y estrategias
                      <br />
                      que hacen crecer negocios.
                    </p>

                    <p className="hero-typing">
                      Soy tu próxima <TypingAnimation />
                    </p>

                    <div className="home-actions">

                      <button
                        type="button"
                        className="btn btn-theme"
                        onClick={() => changeNav("portfolio", false)}
                      >
                        Ver Portfolio
                      </button>

                      <a
                        href="/static/docs/Antonella-Gatti-CV.pdf"
                        className="btn btn-outline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Descargar CV
                      </a>

                    </div>
                  </div>

                  <ul className="social-icons">
                    <li>
                      <a
                        href="mailto:dg.antonellagatti@gmail.com"
                        aria-label="Enviar email"
                      >
                        <i className="fas fa-envelope" />
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://linkedin.com/in/antonnellagatti/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://roam-studio.site"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="ROAM Studio"
                      >
                        <i className="fas fa-globe" />
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://wa.me/5493512540056?text=Hola%20Annto%2C%20vi%20tu%20portfolio%20y%20me%20gustaría%20hacerte%20una%20consulta."
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                      >
                        <i className="fab fa-whatsapp" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;