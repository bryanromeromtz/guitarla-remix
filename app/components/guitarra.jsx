import { Link } from "@remix-run/react";

function Guitarra({ guitarra }) {
  const { nombre, precio, imagen } = guitarra;
  const { url } = imagen.data.attributes.formats.medium;
  return (
    <div className="tienda">
      <div className="guitarra-img-wrapp">
        <img src={url} alt={`Imagen guitarra ${nombre}`} />
      </div>

      <div className="contenido">
        <h3>Guitarra {nombre}</h3>
        <p className="tienda-precio">
          <span>${precio}</span>
        </p>
        <Link className="enlace" to={`/guitarras/${guitarra.url}`}>
          Ver Producto
        </Link>
      </div>
    </div>
  );
}

export default Guitarra;
