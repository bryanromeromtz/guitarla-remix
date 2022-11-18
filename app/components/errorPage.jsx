function ErrorPage({ error }) {
  return (
    <div className="contenedor">
      <h2 className="heading">{error?.status}</h2>
      <p className="texto">{error?.statusText}</p>
    </div>
  );
}

export default ErrorPage;
