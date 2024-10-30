import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoMdPause } from "react-icons/io";

const Playlist = () => {
  const { state } = useLocation();
  const items = state?.song;
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  if (!items) {
    return <p>Loading playlist data...</p>;
  }
  const loadTrackHandler = (track) => {
    try {
      if (currentTrack === track.id) {
        if (audioRef.current.paused) {
          audioRef.current.play();
          setIsPlaying(true);
        } else {
          audioRef.current.pause();
          setIsPlaying(false);
        }
      } else {
        if (track.preview_url) {
          audioRef.current.src = track.preview_url;
          audioRef.current.play();
          setCurrentTrack(track.id);
          setIsPlaying(true);
        } else {
          alert("NO PREVIEW AVAILABLE");
        }
      }
    } catch (error) {
      console.log(error.message);
    }

    console.log(track);
  };

  return (
    <section className="bg-black text-gray-300 min-h-screen">
      <audio ref={audioRef} />
      <div>
        {
          <img
            className="w-full mb-6"
            src={items.images[0].url}
            alt={items.name}
          />
        }

        <div className="px-6 pb-32">
          <p className="text-sm">Description:</p>
          <p className="mb-6 text-sm font-thin text-gray-300">
            {items.description}
          </p>
          <p className="font-semibold mb-4 bg-sky-700 w-fit px-2 rounded-xl">
            Tracks{" "}
            <span className="text-sm font-light text-gray-300 ">
              {items.tracks?.total || 0}
            </span>
          </p>

          <div>
            {items.tracks?.items?.map((song, index) => {
              if (!song || !song.track) {
                return (
                  <div key={uuidv4()}>
                    <p>Loading...</p>
                  </div>
                );
              }

              return (
                <div
                  className={`text-white flex py-2 items-center border-t last-of-type:border-b border-gray-500 text-sm capitalize ${
                    currentTrack === song.track.id ? "bg-gray-800" : "bg-black"
                  }`}
                  key={song.track.id || uuidv4()}
                >
                  <p className="border border-gray-500 min-w-8 h-8 text-center flex items-center justify-center rounded-full text-xs mr-2">
                    {index + 1}
                  </p>
                  <div
                    className="relative rounded-lg mr-4 min-w-16 max-w-16"
                    onClick={() => loadTrackHandler(song.track)}
                  >
                    <img
                      className="rounded-lg"
                      src={song.track.album.images[2].url}
                      alt={song.track.name || "Unknown Image"}
                    />
                    {currentTrack === song.track.id && (
                      <div className="bg-black/50 flex items-center justify-center absolute w-full top-0 right-0 rounded-lg h-full">
                        {isPlaying ? (
                          <IoMdPause size={24} />
                        ) : (
                          <FaPlay size={24} />
                        )}
                      </div>
                    )}
                  </div>
                  <p>{song.track.name || "Unknown Track"}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Playlist;
