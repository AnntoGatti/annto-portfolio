import TypeIt from "typeit-react";

const TypingAnimation = () => {
  return (
    <span className="type-it">
      <TypeIt
        options={{
          speed: 150,
          loop: true,
          strings: ["Diseñadora UX-UI", "Branding designer", "Front-End Dev", "Analista de Marketing"],
          breakLines: false,
        }}
      />
    </span>
  );
};
export default TypingAnimation;
