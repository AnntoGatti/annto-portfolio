import {
  createContext,
  useCallback,
  useEffect,
  useReducer,
} from "react";

import { useRouter } from "next/router";

const PortfolioContext = createContext();

const type = {
  NAV: "NAV",
  TOGGLE: "TOGGLE",
};

const { NAV, TOGGLE } = type;

const getInitialNav = () => {
  if (typeof window !== "undefined") {
    if (window.location.pathname === "/portfolio") {
      return "portfolio";
    }
  }

  return "home";
};

const initialState = {
  nav: getInitialNav(),
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
  const router = useRouter();

  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
  if (!router.isReady) return;

  if (router.pathname === "/portfolio") {
    dispatch({
      type: NAV,
      payload: "portfolio",
    });
  } else {
    dispatch({
      type: NAV,
      payload: "home",
    });
  }

  dispatch({
    type: TOGGLE,
    payload: false,
  });
}, [router.isReady, router.pathname]);

  const changeNav = useCallback(
  (value, toggleValue) => {
    dispatch({
      type: NAV,
      payload: value,
    });

    dispatch({
      type: TOGGLE,
      payload: toggleValue,
    });

    if (value === "portfolio") {
      router.push("/portfolio");
    }

    if (value === "home") {
      router.push("/");
    }
  },
  [router]
);

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