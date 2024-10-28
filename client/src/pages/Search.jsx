import { useRef, useState, useEffect, useContext } from "react";
import { IoSearch } from "react-icons/io5";
import { v4 as uuidv4 } from "uuid";
import Categories from "../components/SearchComponets/Categories";
import axios from "axios";
import { MyContext } from "../components/MyContext";
import SearchResults from "../components/SearchComponets/SearchResults";

const Search = () => {
  const searchBar = useRef(null);
  const inputRef = useRef(null);
  const [selected, setSelected] = useState("album");
  const [isSearching, setIsSearching] = useState(false);
  const [token, setToken] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [searchData, setSearchData] = useState({});

  const { getToken } = useContext(MyContext);

  useEffect(() => {
    getToken().then((data) => setToken(data));
  }, []);
  const searchOptions = [
    "album",
    "artist",
    "track",
    "show",
    "episode",
    "audiobook",
  ];

  const searchHandler = async (e) => {
    const { value } = e.target;

    setSearchValue(value);
    setIsSearching(value.length > 0);
    const response = await axios({
      method: "get",
      url: `https://api.spotify.com/v1/search?q=${searchValue}&type=${selected}`,
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
      },
    });
    const data = response.data;
    setSearchData(data);
    console.log(data);
  };

  const searchParmaHandler = (e) => {
    const { innerText } = e.target;

    setSelected(innerText.toLowerCase());
  };

  return (
    <section
      id="home-page"
      className="text-white bg-black min-h-screen px-6 pt-8"
    >
      <h1 className="text-4xl font-semibold mb-8">Find Songs</h1>
      <div className="search-area">
        <div
          ref={searchBar}
          className="rounded-lg focus:focus-ring bg-gray-300 w-full 
          py-1 flex items-center mb-2"
        >
          <IoSearch className="mx-2  text-gray-500" />
          <input
            ref={inputRef}
            onChange={searchHandler}
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
        <div className="relative">
          {!isSearching && <Categories />}
          {isSearching && (
            <SearchResults results={searchData} selected={selected} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Search;
