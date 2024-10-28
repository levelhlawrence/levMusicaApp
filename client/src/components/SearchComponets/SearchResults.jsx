import { v4 as uuidv4 } from "uuid";

const SearchResults = ({ results, selected }) => {
  return (
    <aside className="min-h-screen text-white ">
      {results && (
        <div>
          <p>{results[`${selected}s`].total}</p>
          {results[`${selected}s`].items.map((item) => {
            return (
              <div key={uuidv4()}>
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
      )}
    </aside>
  );
};

export default SearchResults;
