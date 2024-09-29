import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { MyContext } from "../components/MyContext";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Categories from "../components/Categories";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchQuery, setSearchQuery] = useState();
  const { getToken } = useContext(MyContext);
  const navigate = useNavigate();

  // Go to album
  const goToSearch = async (item) => {
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:3001/albums",
        data: item,
      });

      const data = response.data;

      if (data) {
        navigate(`/album/${data.id}`, {
          state: { item: data },
        });
      }
      console.log(data);
    } catch (error) {
      console.log(error.message);
      // if (error.request.withCredentials === false) {
      //   navigate("/login");
      // }
    }
  };

  // search bar logic
  useEffect(() => {
    const getSearchResults = async () => {
      const token = await getToken();
      await axios
        .get(`https://api.spotify.com/v1/search?q=${searchValue}&type=album`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setSearchQuery(() => res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

    if (searchValue) {
      getSearchResults();
    }
  }, [searchValue]);

  const searchSongs = (e) => {
    const { value } = e.target;
    const searchResults = document.querySelector("#search-results");
    setSearchValue(value);

    value.trim() === ""
      ? searchResults.classList.add("hidden")
      : searchResults.classList.remove("hidden");
  };

  return (
    <section className="bg-black min-h-screen text-white px-6 ">
      {/* Search bar */}
      <div className="pt-10 relative">
        <div className="bg-gray-200 flex items-center gap-4 py-1 rounded">
          <IoSearchOutline size={20} className="text-gray-500 ml-4" />
          <input
            placeholder={"search songs.."}
            className="border bg-inherit w-full text-black"
            type="text"
            onChange={searchSongs}
          />
        </div>
        <div
          id="search-results"
          className="hidden bg-gray-200 w-full max-h-60 absolute mt-2 rounded overflow-scroll"
        >
          <p className="text-gray-400 text-sm ml-2 mt-2">Search Results</p>
          {searchQuery &&
            searchQuery.albums.items.map((music) => {
              return (
                <div
                  onClick={() => goToSearch(music)}
                  key={music.id}
                  className="text-gray-700 bg-gray-400 m-2 rounded-md flex items-center py-4"
                >
                  <img
                    src={music.images[0].url}
                    className="w-10 h-10 mx-4 rounded"
                    alt={music.name}
                  />
                  <div className="text-xs">
                    <p>
                      <span className="font-bold">Album</span>: {music.name}
                    </p>
                    <p>
                      <span className="font-bold">Artist</span>:{" "}
                      {music.artists[0].name}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      {/* Categories */}
      <Categories />
    </section>
  );
};

export default Search;
