export async function getCursos() {
  try {
    const request = await fetch(`${process.env.API_URL}/curso?populate=imagen`);
    return await request.json();
  } catch (error) {
    console.log(error);
  }
}
