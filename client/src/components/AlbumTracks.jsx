import { useLocation, useNavigate } from "react-router-dom";

const AlbumTracks = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { item } = location.state || {};

  return (
    <section className="pt-1 bg-black text-white px-6">
      <p className="text-lg tracking-wide mb-2 mt-6 font-medium">{item.name}</p>
      <div className="rounded-lg">
        <img
          className="w-full object-contain h-full rounded-lg mb-6"
          src={item.images[0].url}
          alt={item.name}
        />
        <div className="flex mb-8 items-baseline">
          <p className="text-gray-300 font-semibold">Tracks</p>
          <p className="ml-4 text-sm text-gray-400">
            Total: {item.total_tracks}
          </p>
        </div>
      </div>
      <div>
        {item &&
          item.tracks.items.map((song, index) => {
            return (
              <div key={song.id} className="border-t py-2 border-gray-500 flex">
                <p className="mr-4 text-gray-500">{index + 1}</p>
                <div className="w-full">
                  <p>{song.name}</p>
                  <div className="flex justify-between">
                    <div className="flex">
                      {song.artists.map((artist, artistIndex) => {
                        return (
                          <div key={artistIndex}>
                            <p className="text-xs text-gray-400 mr-4">
                              {artist.name}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                    <div>
                      <p className="text-xs mr-4 text-gray-400">
                        {(song.duration_ms / 1000 / 60)
                          .toFixed(2)
                          .split(".")
                          .join(":")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default AlbumTracks;
