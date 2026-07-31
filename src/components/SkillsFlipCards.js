import { useState } from "react";

const skills = [
  {
    title: "UX/UI",
    tools: ["Figma", "Maze", "Whimsical", "Hotjar", "GA4"],
  },
  {
    title: "Marketing",
    tools: [
      "Ads Google - Meta",
      "Google Analytics",
      "Tag Manager",
      "Looker Studio",
      "Email Marketing",
    ],
  },
  {
    title: "Front-End Dev",
    tools: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "WordPress",
    ],
  },
  {
    title: "Branding",
    tools: [
      "Illustrator",
      "Photoshop",
      "InDesign",
      "Premiere Pro",
      "After Effects",
      "Figma",
    ],
  },
];

const SkillsFlipCards = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <section className="skills-flip-section">
      <div  className="section-titel">
        <h5>Mi Stack Digital</h5>
        <h3>Herramientas & Software</h3>

        <p>
          Las herramientas detrás de mis proyectos de diseño, estrategia,
          marketing y desarrollo.
        </p>
      </div>

      <div className="skills-flip-grid">
        {skills.map((skill, index) => (
          <button
            type="button"
            className={`skill-flip-card ${
              activeCard === index ? "is-flipped" : ""
            }`}
            onClick={() => handleCardClick(index)}
            aria-expanded={activeCard === index}
            key={skill.title}
          >
            <span className="skill-flip-inner">
              <span className="skill-flip-front">
                <span className="skill-flip-number">0{index + 1}</span>

                <span className="skill-flip-title">{skill.title}</span>

                <span className="skill-flip-action">Ver herramientas +</span>
              </span>

              <span className="skill-flip-back">
                <span className="skill-flip-title">{skill.title}</span>

                <span className="skill-tools">
                  {skill.tools.map((tool) => (
                    <span className="skill-tool" key={tool}>
                      {tool}
                    </span>
                  ))}
                </span>

                <span className="skill-flip-action">Cerrar −</span>
              </span>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default SkillsFlipCards;