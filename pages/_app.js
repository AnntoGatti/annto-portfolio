import PortfolioHead from "@/src/PortfolioHead";
import PortfolioState from "@/src/Context";
import Preloader from "@/src/Preloader";
import { trackPageView } from "@/src/utils/analytics";

import "@/styles/globals.css";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const [load, setLoad] = useState(false);
  const [load1, setLoad1] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setLoad1(true);
    }, 1000);

    const timer2 = setTimeout(() => {
      setLoad(true);
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      trackPageView(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <PortfolioState>
      <PortfolioHead />

      {!load && <Preloader />}

      {load1 && <Component {...pageProps} />}
    </PortfolioState>
  );
}