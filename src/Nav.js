import { useContext, useEffect } from "react";
import { PortfolioContext } from "./Context";

const Nav = () => {
  const { nav } = useContext(PortfolioContext);

  useEffect(() => {
    const pages = document.querySelectorAll(".page");

    pages.forEach((page) => {
      const isActive = nav === page.id;

      page.style.opacity = isActive ? "1" : "0";
      page.style.zIndex = isActive ? "5" : "2";

      page.style.transform = isActive
        ? "translate3d(0px, 0px, 0px)"
        : "translate3d(0px, 75%, -300px)";

      page.style.pointerEvents = isActive ? "auto" : "none";
    });
  }, [nav]);

  return null;
};

export default Nav;