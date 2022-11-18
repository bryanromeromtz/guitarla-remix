import { useLoaderData } from "@remix-run/react";
import { getGuitarra } from "~/models/guitarras.server";
import styles from "~/styles/guitarra.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export async function loader({ request, params }) {
  const guitarra = await getGuitarra(params.guitarraUrl);

  if (guitarra.data.length === 0) {
    throw new Response("No se encontró la guitarra", {
      status: 404,
      statusText: "Elemento no encontrado",
    });
  }

  return guitarra.data;
}

export function meta({ data }) {
  if (!data) {
    return {
      title: "GuitarLA - Guitarra no encontrada",
      description: "Guitarra no encontrada",
    };
  }
  const { nombre, descripcion } = data[0].attributes;
  return {
    title: `GuitarLA - Guitarra ${nombre}`,
    description: `${descripcion.substring(0, 160)}...`,
  };
}

function Guitarra() {
  const guitarra = useLoaderData();
  const { nombre, descripcion, precio, imagen } = guitarra[0].attributes;
  return (
    <div className="guitarra">
      <img
        className="imagen"
        src={imagen.data.attributes.formats.medium.url}
        alt={`
                    Imagen guitarra ${nombre}
                `}
      />
      <div className="contenido">
        <h3>Guitarra {nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">${precio}</p>
      </div>
    </div>
  );
}

export default Guitarra;
