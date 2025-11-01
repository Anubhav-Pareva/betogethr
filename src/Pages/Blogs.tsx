import BlogCard from "../Components/blog-components/BlogCard";
import { blogsData } from "../Constants/TempData";

export default function Blog() {
  return (
    <div className="flex flex-col p-8 justify-center gap-8">
      {blogsData.length === 0 ? (
        <h1>No Blogs Available</h1>
      ) : (
        blogsData.map((blog) => <BlogCard key={blog.id} blog={blog} />)
      )}
    </div>
  );
}
