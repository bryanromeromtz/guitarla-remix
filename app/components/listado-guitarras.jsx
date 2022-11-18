import Guitarra from "~/components/guitarra";

function ListadoGuitarras({ guitarras }) {
  return (
    <>
      <h2 className="heading heading-line">Nuestra Colección</h2>
      {guitarras?.length && (
        <div className="guitarras-grid">
          {guitarras.map((guitarra) => (
            <Guitarra key={guitarra?.id} guitarra={guitarra?.attributes} />
          ))}
        </div>
      )}
      <div className="spacer"></div>
    </>
  );
}

export default ListadoGuitarras;
