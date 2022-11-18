import { useLoaderData, useLocation } from "@remix-run/react";
import { getGuitarras } from "~/models/guitarras.server";
import { getPosts } from "~/models/posts.server";
import { getCursos } from "~/models/cursos.server";
import {
  obtenerDatosDelUsuario,
  createVisitante,
} from "~/models/visitantes.server";
import ListadoGuitarras from "../components/listado-guitarras";
import ListadoPosts from "../components/listado-posts";
import Curso from "../components/curso";
import stylesGuitarras from "~/styles/tienda.css";
import stylesPosts from "~/styles/blog.css";
import stylesCursos from "~/styles/curso.css";

export function meta() {
  return {
    title: "Index",
    description: "Index page",
  };
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: stylesGuitarras,
    },
    {
      rel: "stylesheet",
      href: stylesPosts,
    },
    {
      rel: "stylesheet",
      href: stylesCursos,
    },
  ];
}

export async function loader() {
  const [guitarras, posts, cursos] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCursos(),
  ]);

  const userVisitor = await obtenerDatosDelUsuario();
  const { ciudad, region, pais, ip } = userVisitor;

  vistor = {
    data: {
      direccion_ip: ip,
      pagina: "index",
      dispositivo: "desktop",
      ubicacion: `${ciudad}, ${region}, ${pais}`,
    },
  };
  // const res = await createVisitante(vistor);
  // console.log(res);
  return {
    guitarras: guitarras.data,
    posts: posts.data,
    cursos: cursos.data,
    userVisitor,
  };
}

function Index() {
  const { guitarras, posts, cursos, userVisitor } = useLoaderData();

  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras guitarras={guitarras} />
      </main>
      <Curso cursos={cursos} />
      <section>
        <ListadoPosts blogs={posts} />
      </section>
    </>
  );
}

export default Index;
