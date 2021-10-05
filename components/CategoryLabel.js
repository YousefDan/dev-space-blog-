import Link from "next/link";

const CategoryLabel = ({ children }) => {
  // render color
  const renderColor = (category) => {
    switch (category) {
      case "JavaScript":
        return "orange";
      case "PHP":
        return "purple";
      case "Python":
        return "green";
      case "CSS":
        return "blue";
      default:
        return "red";
    }
  };
  return (
    <Link href={`/blog/category/${children.toLowerCase()}`}>
      <a
        className="py-1 px-2 rounded-md text-white font-semibold"
        style={{ backgroundColor: renderColor(children) }}
      >
        {children}
      </a>
    </Link>
  );
};

export default CategoryLabel;
