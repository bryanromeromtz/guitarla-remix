import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  useCatch,
  Link,
} from "@remix-run/react";

import styles from "~/styles/index.css";
import Header from "~/components/header";
import Footer from "~/components/footer";
import ErrorPage from "~/components/errorPage";
import { useEffect } from "react";
import { getVisitantes } from "./models/visitantes.server";
import axios from "axios";

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
  useEffect(() => {
    const datosDelUsuario = async () => {
      let dispositivo = "";
      await navigator?.userAgentData
        ?.getHighEntropyValues?.(["platform"])
        .then((res) => res.platform)
        .then((res) => {
          if (res.includes("Android") || res.includes("iOS")) {
            dispositivo = "mobile";
          } else if (res.includes("Windows") || res.includes("Mac")) {
            dispositivo = "desktop";
          } else {
            dispositivo = "tablet";
          }
        });
      const res = await axios.get("http://localhost:1337/api/visitantes");
      const visitantes = res.data;
      console.log(visitantes);
    };
    datosDelUsuario();
  }, []);

  return (
    <Document>
      <Outlet />
      <ErrorPage />
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
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

// Manejo de errores

export function CatchBoundary() {
  const error = useCatch();
  console.log(error);
  return (
    <Document>
      <div className="error">
        <h1 className="error-heading">Ups! Algo salió mal</h1>
        <p className="error-error">
          <strong>Error:</strong> {error?.status}
        </p>
        <p className="error-mensaje">{error?.data}</p>

        <p className="error-link">
          <Link className="error-link" to="/">
            Volver al inicio
          </Link>
        </p>
      </div>
    </Document>
  );
}

export function ErrorBoundary({ error }) {
  return <Document></Document>;
}
