import Link from "next//link";

const CategoryList = ({ categories }) => {
  return (
    <section className="shadow-2xl p-5 rounded-md bg-green-400">
      <h4 className="bg-gray-900 text-white p-3 md:text-xl rounded-lg">Blog Categories</h4>
      <ul className="bg-green-400">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/blog/category/${category.toLowerCase()}`}
          >
            <li className="cursor-pointer px-5 py-3 border-b last:border-none hover:bg-gray-100 hover:rounded-sm">{category}</li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default CategoryList;
