import { FaSpotify } from "react-icons/fa";

const Login = () => {
  return (
    <section
      id="home-page"
      className=" overflow-hidden text-white min-h-screen px-6 bg-[url('https://images.unsplash.com/photo-1610963862091-bafed38fb4fb?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center relative"
    >
      <div className="absolute inset-0 bg-black opacity-75 z-10"></div>

      <div className="flex relative justify-center min-h-screen items-center z-40">
        <div className="text-center flex flex-col items-center mb-72">
          <h4 className="text-2xl font-bold text-green-600">Welcome to</h4>
          <h1 className="text-6xl font-bold text-white mb-4">LevMusica</h1>
          <p className="mb-20 px-10">
            Now enjoy your music in a new fun way. Click the button to begin
            your listening.
          </p>
          <div>
            <button className="flex items-center px-6 py-3 text-lg font-semibold text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 focus:outline-none">
              <FaSpotify className="mr-2 text-2xl bg-green" />
              <a href="http://localhost:3001/auth/login"> Login with Spotify</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
