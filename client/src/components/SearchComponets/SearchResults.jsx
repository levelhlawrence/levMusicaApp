import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";

/* eslint-disable react/prop-types */

const SearchResults = ({ results, selected }) => {
  const [myItems, setMyItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const totalSongs = results[`${selected}s`]?.total;

  useEffect(() => {
    setLoading(true);

    const items = results[`${selected}s`]?.items || [];
    setMyItems(items);

    if (items.length > 0) {
      setLoading(false);
    }
  }, [selected, results]);

  if (loading) {
    return (
      <div className="bg-black text-white">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <aside className="bg-gray-900 rounded-lg min-h-screen text-white">
      <div className="pb-32 mt-4 py-2 px-2">
        <p className="text-gray-400 text-sm pb-6">
          Results found: <span> {totalSongs}</span>
        </p>
        {myItems.map((item) => (
          <div
            className="text-gray-300 flex items-center gap-4 py-2 border-b border-gray-700 first-of-type:border-t"
            key={uuidv4()}
          >
            <img
              className="rounded-md max-w-14"
              src={
                [selected]?.includes("track", "show", "episode")
                  ? item.album?.images?.[2]?.url || ""
                  : item.images?.[2]?.url || ""
              }
              alt={item.name}
            />
            <div>
              <p className="capitalize">{item.name}</p>
              <p className="text-xs text-gray-400">{item.type}</p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SearchResults;
