'use client';
import React, { useState } from "react";
import TopBlogData from "./blogData";
import TopBlogItem from "./BlogItem";

export default function TopDestinations() {

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 2;

  // Calculate current blogs
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = TopBlogData.slice(indexOfFirstBlog, indexOfLastBlog);

  const nextPage = () => {
    if (currentPage < Math.ceil(TopBlogData.length / blogsPerPage)) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between gap-8">
          <div className="w-full flex justify-between flex-col lg:w-2/5">
            <div className="block lg:text-left text-center">
              <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-5">Our latest <span className=" text-indigo-600">blogs</span></h2>
              <p className="text-gray-500 mb-10  max-lg:max-w-xl max-lg:mx-auto">Welcome to our blog section, where knowledge meets inspiration. Explore insightful articles, expert tips, and the latest trends in our field.</p>
              <a href="javascript:;" className="cursor-pointer border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 lg:mx-0 mx-auto flex justify-center text-gray-900 font-semibold transition-all duration-300 hover:bg-gray-100">View All</a>
            </div>

            <div className="flex items-center lg:justify-start justify-center lg:mt-0 mt-8 gap-8 mb-4">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`p-2 border border-indigo-500 rounded-full ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-indigo-100"
                  }`}
              >
                ←
              </button>
              <button
                onClick={nextPage}
                disabled={currentPage === Math.ceil(TopBlogData.length / blogsPerPage)}
                className={`p-2 border border-indigo-500 rounded-full ${currentPage === Math.ceil(TopBlogData.length / blogsPerPage)
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-indigo-100"
                  }`}
              >
                →
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8" >
            {currentBlogs.map((blog,key) => (
              <TopBlogItem key={key} blog={blog}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
