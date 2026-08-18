import { useContext } from "react";
import { PortfolioContext } from "../Context";
import SectionTitle from "./SectionTitle";

const SectionContainer = ({
  extraClass,
  name,
  children,
  title,
  subTitle,
}) => {
  const { nav, changeNav } = useContext(PortfolioContext);

  const activePageClass = () =>
    name === nav ? "" : "page--inactive";

  return (
    <div
      className={`page ${extraClass || ""} white-bg ${activePageClass()}`}
      id={name}
      onClick={() => changeNav(name, false)}
    >
      <div className="container-fluid p-0">
        <div className="row no-gutters">
          <div className="col-12">
            <div className="page-scroll">
              <div className="page-content">
                <SectionTitle
                  title={title}
                  subTitle={subTitle}
                />

                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionContainer;