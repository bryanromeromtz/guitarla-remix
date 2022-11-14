import { Link } from "@remix-run/react";
import logo from "../../public/img/logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <div className="logo">
          <Link to="/">
            <img className="logo" src={logo} alt="Imagen Logo" />
          </Link>
        </div>
        <div className="footer-texto">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quae, voluptatum, quod, voluptas quibusdam voluptates quidem
            voluptatibus quos quia quas nesciunt. Quisquam, quae. Quisquam quae,
            voluptatum, quod, voluptas quibusdam voluptates quidem
          </p>
        </div>
      </div>
      <div className="footer-enlaces">
        <h3>Enlaces rápidos</h3>
        <nav className="navegacion">
          <ul className="footer-menu">
            <li className="footer-menu-item">
              <Link to="/">Inicio</Link>
            </li>
            <li className="footer-menu-item">
              <Link to="/nosotros">Nosotros</Link>
            </li>
            <li className="footer-menu-item">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="footer-menu-item">
              <Link to="/tienda">Tienda</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer-contacto">
        <h3>Contacto</h3>
        <div className="footer-contacto-texto">
          <p>
            <span>Telefono:</span> 123456789
          </p>
          <p>
            <span>Email:</span>
            <a href="mailto:contacto@guitarla.com">contacto@guitarla.com</a>
          </p>
          <p>
            <span>Dirección:</span> Calle falsa 123
          </p>
        </div>
      </div>
      <span className="footer-linea"></span>
      <div className="footer-copy">
        <p>
          &copy;
          {new Date().getFullYear()} GuitarLA - Todos los derechos reservados.
          <span>Desarrollado con ❤ por </span>
          <a href="http://bryansepia.me/index.php" target={"_blank"}>
            Bryan Sepia
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
