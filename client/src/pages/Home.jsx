import { useEffect, useContext } from "react";
import { MyContext } from "../components/MyContext";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const { user, getUser, categories, getCategories } = useContext(MyContext);

  useEffect(() => {
    getUser();
    getCategories();
  }, []);
  return (
    <section
      id="home-page"
      className="text-white bg-black min-h-screen px-6 pt-8"
    >
      {user && (
        <div className="w-full flex items-center justify-between">
          <h3 className="text-2xl font-semibold">
            Welcome,{" "}
            <span className="font-light capitalize">{user?.display_name}</span>
          </h3>
          <div />
          {user?.image?.[0] ? (
            <img src={user?.image?.[0]} alt="" />
          ) : (
            <div className="bg-sky-700 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sky-100">
              <p>{user.display_name[0].toUpperCase()}</p>
            </div>
          )}
        </div>
      )}

      <article>
        {categories && (
          <div className="text-white mt-4">
            <h4 className="font-semibold mb-2">Categories</h4>
            <div className="flex gap-6 overflow-scroll">
              {categories?.categories?.items?.map((item) => {
                return (
                  <div
                    className="min-w-24 min-h-20 relative flex justify-center"
                    key={uuidv4()}
                  >
                    <img
                      className="rounded-lg"
                      src={item?.icons[0]?.url}
                      alt={item?.name}
                    />
                    <p className="text-xs absolute bottom-1">{item?.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </article>
    </section>
  );
};

export default Home;
