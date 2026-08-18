import { useContext, useEffect, useState } from "react";
import { PortfolioContext } from "./Context";

const Header = () => {
  const { changeNav } = useContext(PortfolioContext);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = (e) => {
      const target = e.target;

      const elementScroll =
        target && typeof target.scrollTop === "number"
          ? target.scrollTop
          : 0;

      const windowScroll =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

      const activePageScroll =
        document.querySelector(
          ".page:not(.page--inactive) .page-scroll"
        )?.scrollTop || 0;

      const currentScroll = Math.max(
        elementScroll,
        windowScroll,
        activePageScroll
      );

      setIsVisible(currentScroll < 80);
    };

    setIsVisible(true);

    document.addEventListener("scroll", handleScroll, true);
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      document.removeEventListener("scroll", handleScroll, true);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`flat-header ${
        isVisible
          ? "flat-header--visible"
          : "flat-header--hidden"
      }`}
    >
      <button
        type="button"
        className="flat-header__logo"
        onClick={() => changeNav("home", false)}
      >
        ANNTO.
      </button>

      <nav className="flat-header__nav">
        <button
          type="button"
          onClick={() => changeNav("portfolio", false)}
        >
          Portfolio
        </button>

        <button
          type="button"
          onClick={() => changeNav("services", false)}
        >
          Servicios
        </button>

        <button
          type="button"
          onClick={() => changeNav("contact", false)}
        >
          Contacto
        </button>

        <button
          type="button"
          className="flat-header__cta"
          onClick={() => changeNav("contact", false)}
        >
          ¡Trabajemos juntos!
        </button>
      </nav>
    </header>
  );
};

export default Header;