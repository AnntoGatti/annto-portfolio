import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* Favicon */}
        <link
          rel="shortcut icon"
          type="image/png"
          href="/static/img/annto-icon.png"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://annto.site/" />
        <meta
          property="og:title"
          content="Annto Gatti | Portfolio"
        />
        <meta
          property="og:description"
          content="Diseño, estrategia y experiencias digitales para marcas y productos."
        />
        <meta
          property="og:image"
          content="https://annto.site/og-image.png"
        />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Annto Gatti | Portfolio"
        />
        <meta
          name="twitter:description"
          content="Diseño, estrategia y experiencias digitales para marcas y productos."
        />
        <meta
          name="twitter:image"
          content="https://annto.site/og-image.png"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}