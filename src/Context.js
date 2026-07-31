import { createContext, useCallback, useReducer } from "react";

const PortfolioContext = createContext();

const type = {
  NAV: "NAV",
  TOGGLE: "TOGGLE",
};

const { NAV, TOGGLE } = type;

const initialState = {
  nav: "home",
  toggle: false,
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case NAV:
      return {
        ...state,
        nav: payload,
      };

    case TOGGLE:
      return {
        ...state,
        toggle: payload,
      };

    default:
      return state;
  }
};

const PortfolioState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeNav = useCallback((value, toggleValue) => {
    dispatch({
      type: NAV,
      payload: value,
    });

    dispatch({
      type: TOGGLE,
      payload: toggleValue,
    });
  }, []);

  const { nav, toggle } = state;

  return (
    <PortfolioContext.Provider
      value={{
        nav,
        changeNav,
        toggle,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioState;
export { PortfolioContext };