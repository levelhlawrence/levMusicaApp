import authCred from "../auth/serverAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const getCategories = async () => {
    try {
      const response = await authCred.get("/browse/categories");
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.warn(error.message);
      if (error.status === 401) {
        navigate("/login");
      }
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <section
      id="home-page"
      className="text-white bg-black min-h-screen px-6 pt-8"
    >
      <div className="w-full flex items-center justify-between">
        <h1 className="text-4xl font-semibold">Home</h1>
        <div className="bg-blue-500 w-8 h-8 rounded-full" />
      </div>
    </section>
  );
};

export default Home;
