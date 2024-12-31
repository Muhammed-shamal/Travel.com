import React from "react";
import BlogData from "./blogData";
import BlogItem from "./BlogItem";
import RightSvg from "./rightArrow";


export default function TopDestinations() {
    return (
      <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-full">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto flex items-center justify-between max-w-c-1280 px-4 md:px-0">
          <h1 className="text-3xl font-semibold text-dark">Find Popular Tours</h1>
          <a
            href="/all-tours" 
            className="flex items-center text-primary font-medium hover:underline"
          >
            View All
            <RightSvg />
          </a>
        </div>
        {/* <!-- Section Title End --> */}
      </div>
    
      <div className="mx-auto mt-10 max-w-c-1280 px-4 md:px-8 xl:mt-15 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-4 xl:gap-10">
          {BlogData.slice(0, 4).map((blog, key) => (
            <BlogItem blog={blog} key={key} />
          ))}
    
          {BlogData.slice(4, 8).map((blog, key) => (
            <BlogItem blog={blog} key={key} />
          ))}
        </div>
      </div>
    </section>    
    );
  }
  