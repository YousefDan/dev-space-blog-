import { useEffect, useState } from "react";
import SearchResult from "./SearchResult";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const getResult = async () => {
      if (searchText.trim() === "") {
        setSearchResult([]);
      } else {
        const response = await fetch(`/api/search?q=${searchText}`);
        const { results } = await response.json();
        setSearchResult(results);
      }
    };
    getResult();
  }, [searchText]);
  return (
    <section className="relative bg-gray-600 py-3 px-7">
      <div className="flex justify-center items-center sm:justify-end">
        <div className="w-1/3">
          <form>
            <input
              type="search"
              placeholder="Search Posts..."
              className="px-3 py-1 rounded-2xl focus:outline-none w-full"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </form>
        </div>
      </div>
      <SearchResult results={searchResult} />
    </section>
  );
};

export default Search;
