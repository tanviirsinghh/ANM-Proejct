import React from 'react'
import { useParams } from 'react-router-dom';
const SingleBlogCard = ({blogsdata}) => {
  const { id } = useParams();
  console.log({blogsdata});
  const blog = blogsdata.find(blog => blog.id === parseInt(id));

  if (!blog) {
    return (
      <div className="container">
        <h2 className="text-3xl font-semibold text-center my-8">No details found</h2>
      </div>
    );
  }
  return (
    <div>
      <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
  <img 
    alt=""
    src={blogsdata.image}
    className="h-56 w-full mt-48 "
  />

  <div class="bg-white p-4 sm:p-6">
    {/* <time datetime="2022-10-10" class="block text-xs text-gray-500"> 10th Oct 2022 </time> */}

    <a href="#">
      <h3 class="mt-0.5 text-lg text-gray-900">How to position your furniture for positivity</h3>
    </a>

    <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
      {blogsdata.fulltext}
    </p>
  </div>
</article>
    </div>
  )
}

export default SingleBlogCard;

