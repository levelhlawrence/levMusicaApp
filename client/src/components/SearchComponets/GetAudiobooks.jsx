import {useLocation} from "react-router-dom";
import {v4 as uuidv4} from "uuid";
import {useRef, useState} from "react";
import {FaPlay} from "react-icons/fa";
import {IoMdPause} from "react-icons/io";

const GetAudiobooks = () => {
    const {state} = useLocation();
    const album = state?.album;
    const audioRef = useRef(null);
    const [currentTrack, setCurrentTrack] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    console.log(album);

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
            <audio ref={audioRef}/>
            <div>
                {
                    <img
                        className="w-full mb-6"
                        src={album?.images[0].url}
                        alt={album?.name}
                    />
                }

                <div className="px-6 pb-16">
                    <p className="text-2xl mb-6 text-center font-bold">{album?.name}</p>
                    <p className="font-semibold mb-4 bg-sky-700 w-fit px-2 rounded-xl">
                        Tracks{" "}
                        <span className="text-sm font-light text-gray-300 ">
              {album.tracks?.total || 0}
            </span>
                    </p>

                    <div>
                        {album.tracks?.items?.map((song, index) => {
                            if (!song) {
                                return (
                                    <div key={uuidv4()}>
                                        <p>Loading...</p>
                                    </div>
                                );
                            }

                            return (
                                <div
                                    onClick={() => loadTrackHandler(song)}
                                    className={`text-white flex py-2 items-center album-center border-t last-of-type:border-b border-gray-500 text-sm capitalize ${
                                        currentTrack === song.id ? "bg-gray-800" : "bg-black"
                                    }`}
                                    key={song.id || uuidv4()}
                                >
                                    <p className="border border-gray-500 min-w-8 h-8 text-center flex items-center album-center justify-center rounded-full text-xs mr-2">
                                        {index + 1}
                                    </p>
                                    <div className="rounded-lg mr-4 min-w-16 max-w-16">
                                        {currentTrack === song.id && (
                                            <div className="flex justify-center ">
                                                {isPlaying ? (
                                                    <IoMdPause size={24}/>
                                                ) : (
                                                    <FaPlay size={24}/>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                    <p>{song.name || "Unknown Track"}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetAudiobooks;
