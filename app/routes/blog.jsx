import { useLoaderData } from "@remix-run/react";

import { getPosts } from "~/models/posts.server";
import styles from "~/styles/blog.css";
import ListadoPosts from "../components/listado-posts";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export function meta() {
  return {
    title: "GuitarLA - Blog de Noticias",
    description: "Blog de Noticias musicales",
  };
}

export async function loader() {
  const blogs = await getPosts();

  const error = new Response("No se encontraron blogs", {
    status: 404,
    statusMessage: "Quiza este mal el link, por favor de verificarlo",
    statusText: "¿Quieres volver a la página principal?",
  });

  return blogs ? blogs?.data : error;
}

function Blog() {
  const blogs = useLoaderData();
  return (
    <main className="contenedor">
      <ListadoPosts blogs={blogs} />
    </main>
  );
}

export default Blog;
