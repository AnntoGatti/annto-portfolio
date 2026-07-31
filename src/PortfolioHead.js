import Head from "next/head";

const PortfolioHead = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      
      {/* Page Title */}
      <title>Annto Gatti | Diseño, UX/UI y Marketing Digital</title>

      <meta
      name="description"
      content="Portfolio de Antonella Gatti. Diseño UX/UI, branding, marketing digital, diseño gráfico y desarrollo front-end."
      />

      <meta
      name="author"
      content="Antonella Gatti"
      />

      <meta
      name="keywords"
      content="UX UI, Branding, Diseño Gráfico, Marketing Digital, Front-End, React, Portfolio, Córdoba, Argentina"
      />

      <meta
        property="og:title"
        content="Annto Gatti | Diseño, UX/UI y Marketing Digital"
      />

      <meta
      property="og:description"
      content="Portfolio profesional con proyectos de UX/UI, branding, marketing digital y desarrollo web."
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
      property="og:url"
      content="https://annto.site"
      />

      {/* / */}
      {/*-Font Icon*/}
      <link
        href="static/plugin/font-awesome/css/fontawesome-all.min.css"
        rel="stylesheet"
      />
      <link
        href="static/plugin/themify-icons/themify-icons.css"
        rel="stylesheet"
      />
      {/* / */}
      {/* Plugin CSS */}
      <link
        href="static/plugin/bootstrap/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="static/plugin/owl-carousel/css/owl.carousel.min.css"
        rel="stylesheet"
      />
      <link href="static/plugin/magnific/magnific-popup.css" rel="stylesheet" />
      <link href="static/plugin/nav/css/component.css" rel="stylesheet" />
      {/* / */}
      {/* Theme Style */}
      <link href="static/css/styles.css" rel="stylesheet" />
      <link href="static/css/color/default.css" rel="stylesheet" />
      {/* / */}
      {/* Favicon */}
      <link rel="icon" type="image/png" href="/static/img/annto-icon.png" />
      </Head>
  );
};
export default PortfolioHead;
