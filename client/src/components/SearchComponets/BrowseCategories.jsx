import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import authCred from "../../auth/serverAuth";
import { useNavigate } from "react-router-dom";

const BrowseCategories = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const items = state.items;
  const playlist = state.playlist;

  if (!state) {
    return (
      <div className="text-4xl bg-black text-white min-h-screen">
        <h1 className="text-6xl">Loading...</h1>
      </div>
    );
  }

  const playlistHandler = async (song) => {
    try {
      const response = await authCred({
        method: "get",
        url: `/playlist/${song.id}`,
      });
      const data = response.data;

      navigate(`/playlist/${song.id}`, {
        state: { song: data },
      });
    } catch (error) {
      console.error("Error fetching category details:", error.message);
      if (error.status === 401) {
        navigate("/login");
      }
    }
  };

  return (
    state && (
      <section className="bg-black text-white min-h-screen">
        <div>
          <div className="relative mb-6">
            <h3 className="absolute bottom-2 left-4 text-4xl font-bold text-gray-300">
              {playlist.message}
            </h3>
            {
              <img
                className="w-full"
                src={items.icons[0].url}
                alt={items.name}
              />
            }
          </div>

          <div className="px-6">
            <p className="font-semibold mb-4 ">
              Playlists:{" "}
              <span className="text-sm font-light text-gray-300">
                {playlist.playlists.total} albums found
              </span>
            </p>
            <div className="grid grid-cols-3 gap-4 pb-32">
              {playlist.playlists.items.map((song) => {
                return (
                  <div key={uuidv4()} onClick={() => playlistHandler(song)}>
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
    )
  );
};

export default BrowseCategories;
