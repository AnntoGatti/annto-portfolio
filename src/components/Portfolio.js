import Isotope from "isotope-layout";
import { useCallback, useEffect, useRef, useState } from "react";
import SectionContainer from "./SectionContainer";


const projects = [
  {
    title: "Rediseño de menú web",
    client: "Ecommerce farmacéutico",
    categories: "uxui",
    image: "/static/img/portfolio-1.jpg",
    document: "/static/docs/08-svfarma-menu-uxui.pdf",
    alt: "Rediseño del menú web de SVFarma",
  },
  {
    title: "Desarrollo de personaje",
    client: "Branding de Farmito ",
    categories: "branding marketing",
    image: "/static/img/portfolio-2.jpg",
    document: "/static/docs/07-svfarma-farmito-branding.pdf",
    alt: "Desarrollo de branding del personaje Farmito",
  },
  {
    title: "Estrategia + Identidad de campaña",
    client: "Desarrollo de branding BenjiCuotas",
    categories: "branding marketing",
    image: "/static/img/portfolio-3.jpg",
    document: "/static/docs/04-benjicuotas-branding.pdf",
    alt: "Branding de la campaña BenjiCuotas",
  },
  {
    title: "Rediseño de Marca",
    client: "Para inmobiliaria · Puerto Plata",
    categories: "branding marketing",
    image: "/static/img/portfolio-8.jpg",
    document: "/static/docs/02-puerto-plata-marca.pdf",
    alt: "Rediseño de identidad visual de Puerto Plata",
  },
  {
    title: "Diseño de Stand + Evento",
    client: "Workshop 2025 Turismo B2B",
    categories: "branding otros",
    image: "/static/img/portfolio-9.jpg",
    document: "/static/docs/05-lomejor-stand-branding.pdf",
    alt: "Diseño integral del stand de Lo Mejor Operador",
  },
  {
    title: "Key Visual + Social media",
    client: "MB Microbollos - Automotor",
    categories: "branding marketing otros",
    image: "/static/img/portfolio-6.jpg",
    document: "/static/docs/01-mb-microbollos-keyvisual.pdf",
    alt: "Diseño de key visual y piezas para MB Microbollos",
  },
  {
    title: "Rediseño de Packaging",
    client: "DrivePlus Automotriz",
    categories: "branding marketing otros",
    image: "/static/img/portfolio-7.jpg",
    document: "/static/docs/03-drive-plus-packaging.pdf",
    alt: "Rediseño de etoquetas para packaging de Drive+ aceite automotriz",
  },
  {
    title: "Desarrollo de Merchandising",
    client: "Workshop 2025 Turismo B2B",
    categories: "branding marketing",
    image: "/static/img/portfolio-5.jpg",
    document: "/static/docs/06-lomejor-merchadising-2025.pdf",
    alt: "Diseño de merchandising para Lo Mejor Operador",
  },
  {
    title: "Key Visual + Social media",
    client: "Taller94 Serigrafia",
    categories: "branding otros",
    image: "/static/img/portfolio-15.jpg",
    document: "/static/docs/14-taller94-keyvisual.pdf",
    alt: "Diseño de key visual y piezas para Taller94 escuela de serigrafia",
  },
  {
    title: "Social media Planing",
    client: "IC3 Global - Marca Gammer",
    categories: "branding marketing",
    image: "/static/img/portfolio-14.jpg",
    document: "/static/docs/10-ic3global-socialmedia.pdf",
    alt: "Diseño de key visual y piezas para redes sociales para IC3 Global",
  },
  {
    title: "Key Visual + Social media",
    client: "Hamsa Carpinteria metalica",
    categories: "branding otros",
    image: "/static/img/portfolio-10.jpg",
    document: "/static/docs/09-hamsa-keyvisual.pdf",
    alt: "Diseño de key visual y piezas para hamsa carpinteria metalica",
  },
  {
    title: "Diseño de sistema de packaging",
    client: "Marca Gammer IC3 Global",
    categories: "branding marketing",
    image: "/static/img/portfolio-12.jpg",
    document: "/static/docs/11-ic3global-packaging.pdf",
    alt: "Diseño de sistema de packaging para IC3 Global",
  },
  {
    title: "Rebranding y desarrollo de marca - Hospital",
    client: "IMI Bariloche - Clinica médica",
    categories: "branding",
    image: "/static/img/portfolio-13.jpg",
    document: "/static/docs/13-imibariloche-rebranding.pdf",
    alt: "Diseño marca para rebranding de imi bariloche, centro medíco",
  },
  {
    title: "Desarrollo de marca Gammer",
    client: "IC3 Global - Marca gammer 2020",
    categories: "branding",
    image: "/static/img/portfolio-11.jpg",
    document: "/static/docs/12-ic3global-branding.pdf",
    alt: "Diseño marca para IC3 Global en pandemia 2020",
  },
];

const filters = [
  { label: "Todos", value: "*" },
  { label: "Diseño UX/UI", value: "uxui" },
  { label: "Branding", value: "branding" },
  { label: "Marketing Digital", value: "marketing" },
  { label: "Desarrollo Web", value: "web" },
  { label: "Otros trabajos", value: "otros" },
];

const Portfolio = () => {
  const isotope = useRef(null);
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    const imagesLoaded = require("imagesloaded");
    const portfolioGrid = document.querySelector(".portfolio-cols");

    if (!portfolioGrid) {
      return undefined;
    }

    imagesLoaded(portfolioGrid, () => {
      isotope.current = new Isotope(portfolioGrid, {
        itemSelector: ".portfolio-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".portfolio-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    });

    return () => {
      if (isotope.current) {
        isotope.current.destroy();
        isotope.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!isotope.current) {
      return;
    }

    isotope.current.arrange({
      filter: filterKey === "*" ? "*" : `.${filterKey}`,
    });
  }, [filterKey]);

  const handleFilterKeyChange = useCallback(
    (key) => () => {
      setFilterKey(key);
    },
    []
  );

  const activeBtn = (value) => (value === filterKey ? "active" : "");

  return (
    <SectionContainer
      name="portfolio"
      title="Proyectos y Casos Destacados"
      subTitle="Portfolio"
      leftImage="static/img/title-3.jpg"
      leftImageTitle="Proyectos y casos destacados"
    >
      <div className="portfolio-section">
        <div className="portfolio-filter m-10px-b">
          <ul className="filter text-left text-md-center">
            {filters.map((filter) => (
              <li
                key={filter.value}
                className={`${activeBtn(filter.value)} theme-after`}
                onClick={handleFilterKeyChange(filter.value)}
              >
                {filter.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="portfolio-content">
          <ul className="portfolio-cols portfolio-cols-3">
            {projects.map((project) => (
              <li
                key={project.title}
                className={`portfolio-item ${project.categories}`}
              >
                <a
                  href={project.document}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-card-link"
                  aria-label={`Ver proyecto: ${project.title}`}
                >
                  <article className="portfolio-col portfolio-hover-01">
                    <div className="portfolio-img">
                      <img src={project.image} alt={project.alt} />

                      <div className="hover">
                        <span className="portfolio-cta">
                          Ver proyecto →
                        </span>
                      </div>
                    </div>

                    <div className="portfolio-info">
                      <h5>{project.title}</h5>
                      <span>{project.client}</span>
                    </div>
                  </article>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Portfolio;