import { useLocation } from "react-router-dom";
const Player = () => {
  const location = useLocation();

  const { song } = location.state;

  console.log(song);

  return (
    <section>
      <img src={song.track.album.images[0].url} alt={song.track.name} />
      <p>{song.track.name}</p>
      <div>{/* player controller below */}</div>
    </section>
  );
};

export default Player;
