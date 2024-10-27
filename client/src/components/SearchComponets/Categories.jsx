import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { MyContext } from "../MyContext";

const Categories = () => {
  const { getToken } = useContext(MyContext);
  const [token, setToken] = useState(null);
  const [categoryData, setCategoryData] = useState(null);

  const getCategories = async () => {
    getToken().then((data) => setToken(data));
    try {
      const response = await axios({
        method: "get",
        url: "https://api.spotify.com/v1/browse/categories",
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
        },
      });

      const data = response.data.categories;
      console.log(data);
      setCategoryData(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <article>
      {categoryData && (
        <div>
          <h1>Categories</h1>
          <p>Total: {categoryData.total}</p>
          <div className="grid grid-cols-3 gap-4 mt-8 pb-28">
            {categoryData.items.map((item) => {
              return (
                <div key={item.id}>
                  <img
                    src={item.icons[0].url}
                    alt={item.name}
                    className="w-32 h-32 rounded-lg"
                  />
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
