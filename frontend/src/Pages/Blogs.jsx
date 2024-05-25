import React from 'react';
import { Link } from 'react-router-dom';
import SingleBlogCard from "../Cards/SingleBlogCard"
import SingleBlog from './SingleBlog';
const BlogCard = ({ id, title, image, text }) => {
  return (
    <div className="max-w-4xl mx-auto mb-10 p-6 bg-white shadow-lg rounded-lg mt-20">
      <div className="flex items-center justify-between">
        <div className="w-1/3">
          <Link to="/full-blog">
            <img src={image} alt="Blog Image" className="w-[200px] h-[200px] h-auto rounded-lg" />
          </Link>
        </div>
        <div className="w-2/3 px-6">
          <Link to={`/SingleBlog/${id}`} className="text-black no-underline">
            <h1 className="text-2xl font-bold mb-4 cursor-pointer">{title}</h1>
          </Link>
          <p className="text-gray-700 leading-relaxed">{text}</p>
        </div>
      </div>
    </div>
  );
}
const Blogs = ({ blogs }) => {
  console.log(blogs);
  return (
    <div className="max-w-4xl mx-auto">
      {blogs && blogs.map((blog, index) => (
        <BlogCard key={index} id={blog.id} title={blog.title} image={blog.image} text={blog.text} />

      ))}
    </div>
  );
}
export default Blogs;
