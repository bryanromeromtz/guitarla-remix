export async function getGuitarras() {
  try {
    const request = await fetch(
      `${process.env.API_URL}/guitarras?populate=imagen`
    );
    return await request.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getGuitarra(url) {
  try {
    const request = await fetch(
      `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
    );
    return await request.json();
  } catch (error) {
    console.log(error);
  }
}
