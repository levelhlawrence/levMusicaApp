import { useRef, useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { v4 as uuidv4 } from "uuid";
import Categories from "../components/SearchComponets/Categories";

const Search = () => {
  const searchBar = useRef(null);
  const inputRef = useRef(null);
  const [selected, setSelected] = useState("Top Results");

  useEffect(() => {
    searchHandler();
  }, []);

  const searchOptions = [
    "top results",
    "artist",
    "playlist",
    "album",
    "track",
    "show",
    "episode",
    "audiobook",
  ];

  const searchHandler = () => {};

  const searchParmaHandler = (e) => {
    const { innerText, classList } = e.target;

    setSelected(innerText);

    classList.toggle(
      "bg-red-600",
      selected.toLowerCase() === innerText.toLowerCase()
    );

    console.log(innerText);
  };

  return (
    <section
      id="home-page"
      className="text-white bg-black min-h-screen px-6 pt-8"
    >
      <h1 className="text-4xl font-semibold mb-8">Find Albums</h1>
      <div className="search-area">
        <div
          onClick={searchHandler}
          ref={searchBar}
          className="rounded-lg focus:focus-ring bg-gray-300 w-full 
          py-1 flex items-center mb-2"
        >
          <IoSearch className="mx-2  text-gray-500" />
          <input
            ref={inputRef}
            placeholder="search.."
            className="focus:outline-none bg-transparent w-full text-black"
            type="text"
          />
        </div>
        <div className="flex overflow-scroll scroll-container">
          {searchOptions.map((btns) => {
            return (
              <button
                className={`mx-1 capitalize min-w-fit px-2 rounded-full ${
                  selected.toLowerCase() === btns.toLowerCase()
                    ? "bg-sky-700"
                    : ""
                }`}
                key={uuidv4()}
                onClick={searchParmaHandler}
              >
                {btns}
              </button>
            );
          })}
        </div>
        <div>
          <Categories />
        </div>
      </div>
    </section>
  );
};

export default Search;
