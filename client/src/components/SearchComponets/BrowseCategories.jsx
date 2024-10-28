import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const BrowseCategories = () => {
  const { state } = useLocation();

  if (!state) {
    return (
      <div className="text-4xl bg-black text-white">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <section className="bg-black text-white min-h-screen">
      <div>
        <div className="relative mb-6">
          <h3 className="absolute bottom-2 left-4 text-4xl font-bold text-gray-300">
            {state.playlist.message}
          </h3>
          {
            <img
              className="w-full"
              src={state.items.icons[0].url}
              alt={state.items.name}
            />
          }
        </div>

        <div className="px-6">
          <p className="font-semibold mb-4 ">
            Playlists:{" "}
            <span className="text-sm font-light text-gray-300">
              {state.playlist.playlists.total} albums found
            </span>
          </p>
          <div className="grid grid-cols-3 gap-4 pb-32">
            {state.playlist.playlists.items.map((song) => {
              return (
                <div key={uuidv4()}>
                  <img
                    className="rounded-xl"
                    src={song.images[0].url}
                    alt={song.name}
                  />
                  <p className="text-center text-sm text-gray-400">
                    {song.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseCategories;
