const Login = () => {
  return (
    <section
      id="home-page"
      className="text-white bg-black min-h-screen px-6 pt-8"
    >
      <div className="">
        <article className="w-full mt-20 flex flex-col items-center justify-between">
          <h1 className="text-4xl font-semibold mb-20">Login</h1>
          <button className="bg-green-600 px-4 rounded-md ">
            <a href="http://localhost:3001/auth/login">Login</a>
          </button>
        </article>
      </div>
    </section>
  );
};

export default Login;
