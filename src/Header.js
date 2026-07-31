import { useContext } from "react";
import { PortfolioContext } from "./Context";

const Header = () => {
  const { changeNav, nav, toggle } = useContext(PortfolioContext);

  return (
    <header className="header theme-bg">
    <div
      className="logo"
      onClick={() => changeNav("home", false)}
      onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
      changeNav("home", false);
      }
      }}
        role="button"
        tabIndex={0}
        aria-label="Volver al inicio"
      >
        ANNTO.
    </div>

      <div className="menu-toggle">
        <button
          className={`menu-button ${toggle ? "menu-button--open" : ""}`}
          onClick={() => changeNav(nav, !toggle)}
          aria-label="Abrir menú de navegación"
        >
          <span>Abrir menú</span>
        </button>
      </div>
    </header>
  );
};

export default Header;