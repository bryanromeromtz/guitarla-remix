import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/posts.server";
import { formatearFecha } from "~/utils/helpers";
import style from "~/styles/single-blog.css";

export function links() {
  return [{ rel: "stylesheet", href: style }];
}

export function meta({ data }) {
  if (!data) {
    return {
      title: "GuitarLA - Blog no encontrado",
      description: "Blog no encontrado",
    };
  }

  const { titulo, contenido } = data[0]?.attributes;
  return {
    title: `GuitarLA - ${titulo}`,
    description: `${contenido.substring(0, 160)}...`,
  };
}

export async function loader({ request, params }) {
  const post = await getPost(params.postUrl);

  if (post.data.length === 0) {
    throw new Response("No se encontró el post", {
      status: 404,
      statusText: "Elemento no encontrado",
    });
  }

  return post.data;
}

function Post() {
  const post = useLoaderData();

  const { titulo, contenido, imagen, publishedAt } = post[0]?.attributes;
  return (
    <main className="contenedor">
      <h2 className="heading heading-line">{titulo}</h2>
      <div className="blog">
        <article className="blog-single">
          <div className="blog-single__img">
            <img src={imagen?.data?.attributes?.url} alt={titulo} />
          </div>
          <div className="blog-single__content">
            <p className="blog-single__date">{formatearFecha(publishedAt)}</p>
            <p className="blog-single__description">{contenido}</p>
          </div>
        </article>
      </div>
    </main>
  );
}

export default Post;
