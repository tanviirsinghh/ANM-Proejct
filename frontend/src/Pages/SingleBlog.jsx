import React from 'react';
import SingleBlogCard from '../Cards/SingleBlogCard';
const SingleBlog = ({ blogsdata }) => {
  return (
    <div className="">
      {/* <h2 className="text-3xl font-semibold text-center mb-4">{blog.title}</h2>
      <div className="flex justify-center mb-4">
        <img src={blog.image} alt={blog.title} className="w-[200px] h-[200px] " />
      </div>
      <p className="max-w-4xl mx-auto">{blog.fullblog}</p> */}
      <SingleBlogCard blogsdata={blogsdata}/>
    </div>
  );
}

export default SingleBlog;



