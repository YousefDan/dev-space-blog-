import Image from "next/image";
import Link from "next/link";
import CategoryLabel from "./CategoryLabel";

const PostItem = ({ post, conpact }) => {
  const {
    cover_image,
    title,
    date,
    category,
    author,
    author_image,
    excerpt,
    slug,
  } = post;
  return (
    <section className="shadow-2xl rounded-md p-5 my-2">
      {!conpact && (
        <Image
          src={cover_image}
          width={600}
          height={400}
          className="rounded-md"
          alt=""
        />
      )}
      <div className="flex justify-between items-center my-2">
        <span>{date}</span>
        <CategoryLabel>{category}</CategoryLabel>
      </div>
      <div>
        <Link href={`/blog/${slug}`}>
          <a className="text-xl font-bold hover:border-b border-black">
            {title}
          </a>
        </Link>
      </div>
      <p className="mt-2 text-gray-600">{excerpt}</p>
      {!conpact && (
      <div className="flex justify-between items-center mt-3">
        <Link href={`/blog/${slug}`}>
          <a className="text-gray-100 rounded-md py-1 px-2 hover:bg-red-700 duration-300 ease-in-out transition bg-red-900">
            Read More
          </a>
        </Link>
        <div className="flex items-center">
          <img
            src={author_image}
            alt=""
            className="w-10 h-10 rounded-full mr-3"
          />
          <strong>{author}</strong>
        </div>
      </div>)}
    </section>
  );
};

export default PostItem;
