import { Link } from "@remix-run/react";

function Guitarra({ guitarra }) {
  const { nombre, descripcion, precio, imagen } = guitarra;
  const { url } = imagen.data.attributes.formats.medium;
  return (
    <div className="guitarra">
      <div className="guitarra-img-wrapp">
        <img src={url} alt={`Imagen guitarra ${nombre}`} />
      </div>
      <div className="contenido">
        <h3>{nombre}</h3>
        {/* limitar la descripción a 100 caracteres */}
        <p className="descripcion">{descripcion.substr(0, 100)}...</p>
        <p className="precio">
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
