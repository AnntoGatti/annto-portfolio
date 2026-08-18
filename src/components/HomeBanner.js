import { useContext } from "react";
import { PortfolioContext } from "../Context";
import {
  trackLinkedIn,
  trackWhatsApp,
  trackEmail,
  trackRoamStudio,
} from "../utils/analytics";
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
      {/* Barra de disponibilidad */}
      <div className="availability-bar">
        AGENDA ABIERTA · AGOSTO 2026
      </div>

      <div className="page-scroll">
        <div className="home-hero">

          {/* Contenido principal */}
          <div className="home-hero__content">

            <div className="home-hero__copy">
              <h1 className="home-hero__title">
                Convierto tus ideas en
                <span className="home-hero__highlight">
                  marcas
                </span>
              </h1>
              <p className="home-hero__subtitle">
                con concepto, personalidad
                <br />
                y diseño que impacta.
              </p>
            </div>

            {/* GIF */}
            <div className="home-hero__visual">
              <div className="home-hero__visual-placeholder">
                <img
                  src="/static/img/annto-hero.gif"
                  alt="Selección de proyectos de Annto"
                  className="home-hero__gif"
                />
              </div>
            </div>

          </div>

          {/* Banda animada */}
          <div className="home-marquee">
            <div className="home-marquee__track">
              <span>BRANDING</span>
              <span>UX/UI</span>
              <span>SOCIAL MEDIA</span>
              <span>WEB DESIGN</span>
              <span>MARKETING DIGITAL</span>
              <span>DIRECCIÓN CREATIVA</span>

              <span>BRANDING</span>
              <span>UX/UI</span>
              <span>SOCIAL MEDIA</span>
              <span>WEB DESIGN</span>
              <span>MARKETING DIGITAL</span>
              <span>DIRECCIÓN CREATIVA</span>
            </div>
          </div>

          {/* Presentación */}
              <section className="home-intro">
                <div className="home-intro__content">

                  <div className="home-intro__text">
                    <h2 className="home-intro__title">
                      ¡Hola! Soy Annto.
                    </h2>

                    <p className="home-intro__subtitle">
                      Diseñadora, creativa y estratega.
                    </p>

                    <p className="home-intro__description">
                      Me gusta entender qué hay detrás de cada proyecto antes de empezar
                      a diseñar. Encontrar qué lo hace diferente, qué necesita comunicar
                      y cómo podemos convertirlo en algo que funcione.
                    </p>

                    <p className="home-intro__description">
                      Trabajo entre diseño, estrategia, marketing y tecnología,
                      combinando distintas herramientas según lo que cada idea necesite.
                    </p>

                    <a
                      href="https://wa.me/5493512540056?text=Hola%20Annto%2C%20vi%20tu%20portfolio%20y%20me%20gustaría%20hacerte%20una%20consulta"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="home-intro__button"
                      onClick={trackWhatsApp}
                    >
                      Hablemos
                    </a>
                  </div>

                  <div className="home-intro__image">
                    <img
                      src="/static/img/annto-home.jpeg"
                      alt="Annto, diseñadora y estratega"
                    />
                  </div>

                </div>

                <div className="home-intro__next">
                  <span>Puedo ayudarte a convertir ideas en...</span>
                </div>

                <section className="home-services">

                <div className="home-services__grid">

                  <article className="home-service-card">
                    <div className="home-service-card__image">
                      <img
                        src="/static/img/service-branding.jpg"
                        alt="Proyecto de branding"
                      />
                    </div>

                    <div className="home-service-card__content home-service-card__content--violet">
                      <h3>Marcas con identidad</h3>

                      <p>
                        Branding, identidad visual, sistemas gráficos y packaging
                        pensados para construir marcas con personalidad y coherencia.
                      </p>

                      <a
                        href="https://wa.me/5493512540056?text=Hola%20Annto%2C%20quiero%20consultarte%20por%20branding%20e%20identidad%20visual"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={trackWhatsApp}
                      >
                        Quiero trabajar esto →
                      </a>
                    </div>
                  </article>


                  <article className="home-service-card">
                    <div className="home-service-card__image">
                      <img
                        src="/static/img/service-web.jpg"
                        alt="Proyecto de diseño web y UX UI"
                      />
                    </div>

                    <div className="home-service-card__content home-service-card__content--lime">
                      <h3>Experiencias digitales</h3>

                      <p>
                        UX/UI, diseño web, ecommerce y optimización para crear
                        experiencias claras, funcionales y pensadas para convertir.
                      </p>

                      <a
                        href="https://wa.me/5493512540056?text=Hola%20Annto%2C%20quiero%20consultarte%20por%20UX%2FUI%2C%20web%20o%20ecommerce"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={trackWhatsApp}
                      >
                        Quiero trabajar esto →
                      </a>
                    </div>
                  </article>


                  <article className="home-service-card">
                    <div className="home-service-card__image">
                      <img
                        src="/static/img/service-content.jpg"
                        alt="Proyecto de contenido y social media"
                      />
                    </div>

                    <div className="home-service-card__content home-service-card__content--white">
                      <h3>Contenido que conecta</h3>

                      <p>
                        Social media, campañas, piezas y dirección visual para que
                        tu comunicación tenga criterio, identidad y consistencia.
                      </p>

                      <a
                        href="https://wa.me/5493512540056?text=Hola%20Annto%2C%20quiero%20consultarte%20por%20contenido%20y%20social%20media"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={trackWhatsApp}
                      >
                        Quiero trabajar esto →
                      </a>
                    </div>
                  </article>


                  <article className="home-service-card">
                    <div className="home-service-card__image">
                      <img
                        src="/static/img/service-marketing.jpg"
                        alt="Proyecto de estrategia y marketing digital"
                      />
                    </div>

                    <div className="home-service-card__content home-service-card__content--soft">
                      <h3>Estrategias que hacen crecer</h3>

                      <p>
                        Marketing digital, análisis, performance y optimización para
                        tomar decisiones con datos y mejorar resultados.
                      </p>

                      <a
                        href="https://wa.me/5493512540056?text=Hola%20Annto%2C%20quiero%20consultarte%20por%20marketing%20y%20estrategia"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={trackWhatsApp}
                      >
                        Quiero trabajar esto →
                      </a>
                    </div>
                  </article>

                </div>


                <div className="home-services__actions">

                  <a
                    href="https://wa.me/5493512540056?text=Hola%20Annto%2C%20tengo%20una%20idea%20pero%20no%20sé%20por%20dónde%20empezar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="home-services__primary"
                    onClick={trackWhatsApp}
                  >
                    Tengo una idea, pero no sé por dónde empezar
                  </a>

                  <button
                    type="button"
                    className="home-services__secondary"
                    onClick={() => changeNav("services", false)}
                  >
                    Conocer todos los servicios
                  </button>

                </div>

                </section>
             </section>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;