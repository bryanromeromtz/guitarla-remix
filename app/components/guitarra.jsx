import { Link } from "@remix-run/react";

function Guitarra({ guitarra }) {
  const { nombre, descripcion, precio, imagen } = guitarra;
  const { url } = imagen.data.attributes.formats.medium;
  return (
    <div className="guitarra">
      <img src={url} alt={`Imagen guitarra ${nombre}`} />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="descripcion">{descripcion}</p>
        <p className="precio">${precio}</p>
        <Link className="enlace" to={`/guitarras/${guitarra.url}`}>
          Ver Producto
        </Link>
      </div>
    </div>
  );
}

export default Guitarra;
