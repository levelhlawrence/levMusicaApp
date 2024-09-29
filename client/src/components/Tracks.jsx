import { useLocation, useNavigate } from "react-router-dom";

const Tracks = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data, track } = location.state || {};

  const displayTracks = async (song) => {
    try {
      navigate(`/tracks/player/${song.track.id}`, {
        state: { song: song },
      });
      // console.log(song);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section className="pt-1 bg-black text-white px-6">
      <p className="text-lg tracking-wide mb-2 mt-6 font-medium">
        {track.name}
      </p>
      <div className="rounded-lg">
        <img
          className="w-full object-contain h-full rounded-lg mb-6"
          src={track.images[0].url}
          alt={track.name}
        />
        <div className="flex mb-8 items-baseline">
          <p className="text-gray-300 font-semibold">Tracks</p>
          <p className="ml-4 text-sm text-gray-400">Total: {data.data.total}</p>
        </div>
      </div>
      {data &&
        data.data.items.map((song, index) => {
          return (
            <div
              key={song.track.id}
              className="border-t py-2 border-gray-500 flex"
              onClick={() => displayTracks(song)}
            >
              <p className="mr-4 text-gray-500">{index + 1}</p>
              <div className="w-full">
                <p>{song.track.name}</p>
                <div className="flex justify-between">
                  <div className="flex">
                    {song.track.artists.map((artist, index) => {
                      return (
                        <div key={index + 34343}>
                          <p className="text-xs text-gray-400 mr-4">
                            {artist.name}
                          </p>
                          {/* <audio controls>
                            <source
                              type="audio/mp3"
                              src={song.track.preview_url}
                            />
                          </audio> */}
                        </div>
                      );
                    })}
                  </div>
                  <div>
                    <p className="text-xs mr-4 text-gray-400">
                      {(song.track.duration_ms / 1000 / 60)
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
    </section>
  );
};

export default Tracks;
