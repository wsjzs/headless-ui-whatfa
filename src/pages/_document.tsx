import Document, { Html, Main, Head, NextScript } from 'next/document'

export default class AppDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />

          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link rel="alternate" href="/feed" type="application/atom+xml" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link rel="sitemap" href="/sitemap.xml" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        </Head>
        <body id="app" className="ecl">
          <Main />
          <NextScript />
        </body>
      </Html>)
  }
}