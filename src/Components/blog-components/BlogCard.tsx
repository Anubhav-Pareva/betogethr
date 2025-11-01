import { NavLink } from "react-router-dom";

interface BlogCardProps {
  blog: any;
}
export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <NavLink
      to={`/blogs/detail/${blog.id}`}
      className="bg-white overflow-hidden rounded-lg transition duration-300 ease-in-out hover:scale-90 "
    >
      <img src={blog.blogImg} className="h-[300px] w-full object-cover" />
      <div className="px-3 py-2 flex flex-col gap-2">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
          {blog.title}
        </h1>
        <p className="text-sm text-gray-700">
          {blog.description.slice(0, 300)}...
        </p>
        <p className="text-gray-700">Posted On: {blog.createdAt}</p>
      </div>
    </NavLink>
  );
}
