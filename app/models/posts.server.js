export async function getPosts() {
  try {
    const request = await fetch(`${process.env.API_URL}/posts?populate=imagen`);
    return await request.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getPost(url) {
  try {
    const request = await fetch(
      `${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`
    );
    return await request.json();
  } catch (error) {
    console.log(error);
  }
}
