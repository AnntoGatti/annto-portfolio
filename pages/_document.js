import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link
          rel="icon"
          type="image/png"
          href="/static/img/annto-icon.png"
        />

        <link
          rel="shortcut icon"
          type="image/png"
          href="/static/img/annto-icon.png"
        />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
