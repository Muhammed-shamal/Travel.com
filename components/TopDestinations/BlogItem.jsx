"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const BlogItem = ({ blog }) => {
  const { mainImage, title, metadata } = blog;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top bg-white p-4 pb-9 rounded-md shadow-md"
      >
        <Link href={`/blog/`} className="relative block aspect-[368/239]">
          <Image src={mainImage} alt={title} className="object-cover" fill />
        </Link>

        <div className="px-4">
          <h3 className="mb-3.5 mt-10 line-clamp-2 inline-block text-lg font-medium text-primary xl:text-itemtitle2">
            <Link href={`/blog/blog-details`}>
              {`${title.slice(0, 40)}...`}
            </Link>
          </h3>
           
          <p className="line-clamp-3">{metadata}</p>
        </div>
      </motion.div>
    </>
  );
};

export default BlogItem;
