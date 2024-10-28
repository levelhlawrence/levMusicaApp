import { v4 as uuidv4 } from "uuid";

const SearchResults = ({ results, selected }) => {
  const modResults = results[`${selected}s`];

  if (!modResults) {
    return (
      <div className="bg-black text-white">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <aside className="min-h-screen text-white ">
      {modResults && (
        <div className="pb-32">
          <p>{modResults.total}</p>
          {modResults.items.map((item) => (
            <div key={uuidv4()}>
              <img src={item.images[2]?.url} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
};

export default SearchResults;
