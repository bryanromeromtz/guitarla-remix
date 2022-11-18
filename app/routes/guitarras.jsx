import { Outlet } from "@remix-run/react";
import styles from "~/styles/tienda.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

function Tienda() {
  return (
    <main className="contenedor">
      <Outlet />
    </main>
  );
}

export default Tienda;
