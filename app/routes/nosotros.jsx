import { Meta } from "@remix-run/react";

import imagen from "../../public/img/nosotros.jpg";
import styles from "~/styles/nosotros.css";

export function links() {
  return [
    // este rel es para la hoja de estilos
    { rel: "stylesheet", href: styles },
    // este rel es para el preload para que cargue la imagen antes de que se muestre
    { rel: "preload", href: imagen, as: "image" },
    {
      rel: "preload",
      href: imagen,
      as: "image",
    },
  ];
}

export function meta() {
  return {
    title: "GuitarLA - Sobre Nosotros",
    description:
      "Venta de guitarras y accesorios, blog de noticias musicales, cursos de guitarra y mucho más",
  };
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="Imagen Nosotros" />
        <div className="texto">
          <p>
            Martcar S.A. es una empresa dedicada a la Importación y distribución
            de Audio Porfesional, Audio Car, Iluminacion , instrumentos
            musicales y productos electrónicos en todo el país. La misma fue
            creada con la firme convicción de prestar un servicio diferente a
            partir de una atención personalizada, ágil y responsable. Nuestro
            domicilio legal se encuentra en La Ciudad Autónoma de Buenos Aires y
            la Logística se realiza en Morón, Provincia de Buenos Aires. En el
            exterior poseemos oficinas en Estados Unidos y Taiwan.
          </p>
          <p>
            Nuestro objetivo es brindar a nuestros clientes un servicio de
            calidad, con productos de alta tecnología y con la mejor relación
            precio-calidad del mercado. Para ello contamos con un equipo de
            profesionales altamente capacitados y con una amplia experiencia en
            el rubro. Nuestro compromiso es brindar un servicio de excelencia,
            con productos de alta tecnología y con la mejor relación
            precio-calidad del mercado. Para ello contamos con un equipo de
            profesionales altamente capacitados y con una amplia experiencia en
            el rubro.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Nosotros;
