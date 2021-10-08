import PostItem from "./PostItem";

const SearchResult = ({ results }) => {
    if(results.length === 0) return null;
  return (
    <section className="absolute w-1/2 z-20 bg-white top-20 right-5 border-2 border-gray-700 rounded-lg p-7">
      <h2 className="text-2xl md:text-4xl font-medium">{results.length} Results</h2>
      {results.map((result) => (
        <PostItem key={result.slug} post={result} conpact={true} />
      ))}
    </section>
  );
};

export default SearchResult;
