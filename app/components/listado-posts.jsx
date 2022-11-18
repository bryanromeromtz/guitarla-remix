import BlogCard from "./blogCard";

function ListadoPosts({ blogs }) {
  return (
    <>
      <h2 className="heading heading-line">Nuestro Blog de Noticias</h2>
      <div className="blog">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="spacer"></div>
    </>
  );
}

export default ListadoPosts;
