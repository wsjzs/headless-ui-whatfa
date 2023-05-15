import '../assets/styles/globals.css'
import { PropsWithChildren } from "react";

export default function RootLayout({
  children,
}: PropsWithChildren) {
  return (
    <html lang="en">
      <head>

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="alternate" href="/feed" type="application/atom+xml" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="sitemap" href="/sitemap.xml" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}