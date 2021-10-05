import Link from "next/link";

const Pagination = ({ pages, currentPage }) => {
  const pagesArray = [];
  for (let i = 1; i <= pages; i++) {
    pagesArray.push(i);
  }

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pages;

  const prevPageRoute = `/blog/page/${currentPage - 1}`;
  const nextPageRoute = `/blog/page/${currentPage + 1}`;

  const renderActiveClass = (page) => {
    if (page === currentPage) {
      return "silver";
    }
  };

  return (
    <section className="my-5">
      {!isFirstPage && (
        <Link href={prevPageRoute}>
          <a className="border border-gray-700 py-1 px-2 rounded-md mx-1">
            Previous
          </a>
        </Link>
      )}
      {pagesArray.map((page) => (
        <Link key={page} href={`/blog/page/${page}`}>
          <a
            style={{ backgroundColor: renderActiveClass(page) }}
            className="border border-gray-700 py-1 px-2  rounded-md mx-1 transition duration-300"
          >
            {page}
          </a>
        </Link>
      ))}
      {!isLastPage && (
        <Link href={nextPageRoute}>
          <a className="border border-gray-700 py-1 px-2  rounded-md mx-1">
            Next
          </a>
        </Link>
      )}
    </section>
  );
};

export default Pagination;
