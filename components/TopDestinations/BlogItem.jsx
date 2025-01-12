import Image from "next/image";
import Link from "next/link";

const TopBlogItem = ({ blog }) => {
  const { mainImage, title, metadata } = blog;
  
  return (
    <>
      <div
        className="p-4 bg-white shadow-sm rounded-md hover:shadow-md"
      >
        <img
          src={mainImage}
          alt={title}
          className="w-full h-40 object-cover rounded-md"
        />
        <h3 className="mt-4 text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2 text-sm">{metadata}</p>
        <Link
          href="#"
          className="text-primary mt-2 inline-block font-medium"
        >
          Read more →
        </Link>
      </div>
    </>
  );
};

export default TopBlogItem;
