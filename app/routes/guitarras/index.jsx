import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "~/models/guitarras.server";
import ListadoGuitarras from "~/components/listado-guitarras";

export function meta() {
  return {
    title: "GuitarLA - Tienda Online de Guitarras",
    description:
      "Venta de guitarras y accesorios, blog de noticias musicales, cursos de guitarra y mucho más",
  };
}

export async function loader() {
  const guitarras = await getGuitarras();

  const error = {
    status: 404,
    message: "No se encontraron guitarras",
  };
  return guitarras ? guitarras.data : error;
}

function Tienda() {
  const guitarras = useLoaderData();
  return <ListadoGuitarras guitarras={guitarras} />;
}

export default Tienda;
