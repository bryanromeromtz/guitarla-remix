import { Meta, Links, Outlet, Scripts, LiveReload } from "@remix-run/react";

import styles from "~/styles/index.css";
import Header from "~/components/header";

export function meta() {
  return {
    charset: "utf-8",
    title: "Guitar LA - Remix",
    description: "Guitar LA - Remix",
    viewport: "width=device-width, initial-scale=1",
  };
}

export function links() {
  return [
    // normalize.css is a small CSS file that provides better cross-browser
    // consistency in the default styling of HTML elements.
    // https://necolas.github.io/normalize.css/
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap",
    },
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

function Document({ children }) {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {/* This is where the app will be rendered */}
        {children}
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
