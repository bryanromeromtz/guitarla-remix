import { Link } from "@remix-run/react";
import logo from "../../public/img/logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="contenedor barra">
        <div className="logo">
          <Link to="/">
            <img className="logo" src={logo} alt="Imagen Logo" />
          </Link>
        </div>
        <nav className="navegacion">
          <ul className="menu">
            <li className="menu-item">
              <Link to="/">Inicio</Link>
              <span className="menu-item-border"></span>
            </li>
            <li className="menu-item">
              <Link to="/nosotros">Nosotros</Link>
              <span className="menu-item-border"></span>
            </li>
            <li className="menu-item">
              <Link to="/blog">Blog</Link>
              <span className="menu-item-border"></span>
            </li>
            <li className="menu-item">
              <Link to="/tienda">Tienda</Link>
              <span className="menu-item-border"></span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
