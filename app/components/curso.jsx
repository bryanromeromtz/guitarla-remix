function Curso({ cursos }) {
  const { contenido, imagen, titulo } = cursos?.attributes;
  console.log(imagen?.data[0]?.attributes?.url);
  return (
    <section className="curso">
      {/* <style
        dangerouslySetInnerHTML={{
          __html:
            ".curso{background-image:url(" +
            imagen?.data[0]?.attributes?.url +
            ");background-size:cover;background-position:center center;background-repeat:no-repeat}",
        }}
      /> */}
      <style jsx="true">{`
        .curso {
          background-image: linear-gradient(
              to right,
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.5)
            ),
            url(${imagen?.data[0]?.attributes?.url});
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
        }
      `}</style>
      <div className="contenedor curso-grid">
        <div className="contenido">
          <h2 className="heading heading-line">{titulo}</h2>
          <p className="curso__description">{contenido}</p>
        </div>
        <div className="spacer"></div>
      </div>
    </section>
  );
}

export default Curso;
