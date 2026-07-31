import SectionContainer from "./SectionContainer";

const Services = () => {
  // Reemplazá las X por tu número, sin espacios ni signos.
  // Ejemplo Argentina: 5493511234567
  const whatsappNumber = "5493512540056";

  const services = [
    {
      title: "Diseño UX/UI",
      icon: "ti-layout",
      description:
        "Diseño interfaces y experiencias digitales claras, funcionales y centradas en las personas, desde la investigación hasta el prototipado.",
      whatsappMessage:
        "Hola Annto, vi tu portfolio y me interesa conversar sobre un proyecto de Diseño UX/UI.",
    },
    {
      title: "Branding e identidad visual",
      icon: "ti-palette",
      description:
        "Desarrollo identidades visuales, sistemas gráficos y aplicaciones coherentes para fortalecer el posicionamiento de cada marca.",
      whatsappMessage:
        "Hola Annto, vi tu portfolio y me interesa conversar sobre Branding e identidad visual.",
    },
    {
      title: "Diseño para redes sociales",
      icon: "ti-instagram",
      description:
        "Creo piezas, campañas y sistemas de contenido adaptados a Instagram, Facebook, LinkedIn y otros canales digitales.",
      whatsappMessage:
        "Hola Annto, vi tu portfolio y me interesa conversar sobre diseño para redes sociales.",
    },
    {
      title: "Estrategia de contenidos",
      icon: "ti-pencil-alt",
      description:
        "Planifico calendarios editoriales, conceptos creativos y contenidos alineados con la identidad, la audiencia y los objetivos del negocio.",
      whatsappMessage:
        "Hola Annto, vi tu portfolio y me interesa conversar sobre estrategia de contenidos.",
    },
    {
      title: "Web y ecommerce",
      icon: "ti-desktop",
      description:
        "Diseño y optimizo sitios web, landings y tiendas online con foco en navegación, conversión y experiencia mobile.",
      whatsappMessage:
        "Hola Annto, vi tu portfolio y me interesa conversar sobre un proyecto web o ecommerce.",
    },
    {
      title: "Marketing digital y análisis",
      icon: "ti-bar-chart",
      description:
        "Analizo campañas, comportamiento de usuarios y métricas para detectar oportunidades y mejorar resultados.",
      whatsappMessage:
        "Hola Annto, vi tu portfolio y me interesa conversar sobre marketing digital y análisis.",
    },
  ];

  const tools = [
    "Figma",
    "Illustrator",
    "Photoshop",
    "InDesign",
    "Canva",
    "CapCut",
    "WordPress",
    "HTML · CSS · JavaScript",
    "Meta Ads",
    "Google Analytics 4",
    "Looker Studio",
    "Email Marketing",
  ];

  const createWhatsappLink = (message) =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <SectionContainer
      name="services"
      extraClass="services-section"
      title="Servicios que ofrezco"
      subTitle="Especialidades"
      leftImage="/static/img/title-2.jpg"
    >
      <div className="services-grid">
        {services.map((service) => (
          <a
            className="service-card"
            href={createWhatsappLink(service.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Consultar por ${service.title} en WhatsApp`}
            key={service.title}
          >
            <div className="service-card__icon">
              <i className={service.icon} aria-hidden="true" />
            </div>

            <div className="service-card__content">
              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </div>

            <div className="service-card__cta">
              <span>Consultar por este servicio</span>
              <span className="service-card__arrow" aria-hidden="true">
                →
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="services-stack">
        <div className="sub-title m-30px-b">
          <h2 className="dark-color theme-after">
            Herramientas y plataformas
          </h2>
        </div>

        <div className="services-tools">
          {tools.map((tool) => (
            <span className="service-tool" key={tool}>
              {tool}
            </span>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Services;