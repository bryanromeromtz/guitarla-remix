import { Link } from "@remix-run/react";

import { formatearFecha } from "~/utils/helpers";

function BlogCard({ blog }) {
  const { titulo, contenido, url, imagen, publishedAt } = blog.attributes;

  return (
    <article className="blog-card">
      <div className="blog-card__img">
        <img src={imagen.data.attributes.formats.medium.url} alt={titulo} />
      </div>
      <div className="blog-card__content">
        <h3 className="blog-card__title">{titulo}</h3>
        <p className="blog-card__description">{contenido}</p>
        <p className="blog-card__date">{formatearFecha(publishedAt)}</p>
        <Link to={`/posts/${url}`} className="blog-card__link">
          Leer más..
        </Link>
      </div>
    </article>
  );
}

export default BlogCard;
