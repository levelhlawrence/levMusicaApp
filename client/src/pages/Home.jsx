import Artist from "../components/Artists";
import PopularPlaylist from "../components/Popular_Playlists/PopularPlaylist";

const Home = () => {
  return (
    <section className="text-white bg-black min-h-screen px-6 pt-8">
      <h1 className="text-3xl font-bold tracking-wide">Home</h1>
      {/* top picks */}
      <p className="text-lg mt-6 font-medium">Top Picks</p>
      <PopularPlaylist />
      <div>{/* <Artist /> */}</div>
      <h2 className="text-4xl tracking-wide">Playlist</h2>
      {/* Playlist Seection */}
      <h2 className="text-4xl tracking-wide">Artists</h2>
    </section>
  );
};

export default Home;
