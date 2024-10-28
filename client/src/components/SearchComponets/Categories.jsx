import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../MyContext";
import { v4 as uuidv4 } from "uuid";

const Categories = () => {
  const { getToken } = useContext(MyContext);
  const [token, setToken] = useState(null);
  const [categoryData, setCategoryData] = useState(null);
  const navigate = useNavigate();

  const getCategories = async () => {
    await getToken().then((data) => setToken(data));

    try {
      const response = await axios({
        method: "get",
        url: "https://api.spotify.com/v1/browse/categories",
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
        },
      });

      const data = response.data.categories;
      setCategoryData(data);
    } catch (error) {
      console.log(error.message);
      console.log("status code:", error.status);
      if (error.status === 401) {
        navigate("/login", { replace: true });
      }
    }
  };

  const selectingCategoryHandler = async (item) => {
    const response = await axios({
      method: "get",
      url: `${item.href}/playlists`,
      headers: { Authorization: `Bearer ${token.accessToken}` },
    });
    const data = response.data;
    console.log(data);
    navigate(`/search/categories/${item.id}`, {
      state: { playlist: data, items: item },
    });
  };

  useEffect(() => {
    getCategories();
  }, [!token]);

  return (
    <article>
      {categoryData && (
        <div>
          <div
            className="flex justify-between mt-4 items-center"
            id="category-header"
          >
            <h4 className="text-xl font-bold">Categories</h4>
            <p>Total: {categoryData.total}</p>
          </div>
          <div className="z-30 grid grid-cols-3 gap-4 mt-8 pb-28">
            {categoryData.items.map((item) => {
              return (
                <div
                  onClick={() => selectingCategoryHandler(item)}
                  className="relative flex justify-center items-center flex-col  text-gray-300"
                  key={uuidv4()}
                >
                  <img
                    src={item.icons[0].url}
                    alt={item.name}
                    className="w-32 h-32 rounded-lg"
                  />
                  <p className="text-center absolute bottom-1 font-semibold text-xs">
                    {item.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </article>
  );
};

export default Categories;
