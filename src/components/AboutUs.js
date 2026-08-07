import SectionContainer from "./SectionContainer";
import SkillsFlipCards from "./SkillsFlipCards";


const AboutUs = () => {
  const { changeNav } = useContext(PortfolioContext);

  return (
    <SectionContainer
      name="about"
      extraClass="about-section"
      title="Sobre mí"
      subTitle="Te cuento..."
      leftImage="static/img/title-1.jpg"
      leftImageTitle="Sobre mí"
    >
      <div className="row">
        <div className="col-md-4">
          <img
            className="about-photo"
            src="static/img/my-pic.jpg"
            alt="Antonella Gatti"
            title="Antonella Gatti"
          />
        </div>

        <div className="col-md-8 md-m-30px-t">
          <div className="about-text">
            <h3 className="dark-color">Soy Annto</h3>

            <p className="about-intro">
              Diseño experiencias digitales donde la{" "}
              <strong>estrategia, el branding y la tecnología</strong>{" "}
              trabajan en conjunto.
            </p>

            <p className="m-0px">
              Mi perfil combina diseño, comunicación y análisis para
              transformar ideas en soluciones claras, funcionales y alineadas
              con los objetivos de cada marca.
            </p>
          </div>

          <div className="row m-30px-t">
            <div className="col-md-6 col-sm-6 m-30px-b">
              <div className="feature-box">
                <i className="icon dark-color theme-after ti-ruler-pencil" />

                <div className="feature-content">
                  <h5 className="dark-color">Diseño UX/UI</h5>

                  <p>
                    Diseño interfaces y experiencias digitales centradas en las
                    personas, desde la investigación hasta el prototipado.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-6 m-30px-b">
              <div className="feature-box">
                <i className="icon dark-color theme-after ti-image" />

                <div className="feature-content">
                  <h5 className="dark-color">Marketing &amp; Análisis</h5>

                  <p>
                    Planifico estrategias, campañas y contenidos basados en
                    objetivos, métricas y comportamiento de las audiencias.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-6 m-30px-b">
              <div className="feature-box">
                <i className="icon dark-color theme-after ti-brush-alt" />

                <div className="feature-content">
                  <h5 className="dark-color">
                    Diseño Gráfico &amp; Branding
                  </h5>

                  <p>
                    Desarrollo identidades visuales, campañas y sistemas
                    gráficos coherentes para distintos puntos de contacto.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-6 m-30px-b">
              <div className="feature-box">
                <i className="icon dark-color theme-after ti-mobile" />

                <div className="feature-content">
                  <h5 className="dark-color">
                    Contenido &amp; Estrategia
                  </h5>

                  <p>
                    Creo contenidos y calendarios editoriales conectados con la
                    identidad, la comunidad y los objetivos del negocio.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-6 m-30px-b">
              <div className="feature-box">
                <i className="icon dark-color theme-after ti-layout" />

                <div className="feature-content">
                  <h5 className="dark-color">Front-end</h5>

                  <p>
                    Desarrollo interfaces responsive con HTML, CSS, JavaScript
                    y React, trasladando el diseño a experiencias funcionales.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-6 m-30px-b">
              <div className="feature-box">
                <i className="icon dark-color theme-after ti-stats-up" />

                <div className="feature-content">
                  <h5 className="dark-color">Ecommerce y optimización</h5>

                  <p>
                    Analizo navegación, datos y comportamiento para mejorar la
                    experiencia, la conversión y el rendimiento digital.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SkillsFlipCards />
    </SectionContainer>
  );
};

export default AboutUs;