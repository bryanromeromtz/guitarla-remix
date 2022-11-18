export async function getVisitantes() {
  try {
    const request = await fetch(`${process.env.API_URL}/visitantes`);
    return await request.json();
  } catch (error) {
    console.log(error);
  }
}

export async function createVisitante(visitante) {
  try {
    const request = await fetch(`${process.env.API_URL}/visitantes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(visitante),
    });
    return await request.json();
  } catch (error) {
    console.log(error);
  }
}

export async function obtenerDatosDelUsuario() {
  const res = await fetch("https://ipapi.co/json/");
  const data = await res.json();
  const { city, region, country_name, ip } = data;
  const visitante = {
    ciudad: city,
    region: region,
    pais: country_name,
    ip: ip,
  };
  return visitante;
}
