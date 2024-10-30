import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import authCred from "../../auth/serverAuth";

const Categories = () => {
  const [categoryData, setCategoryData] = useState(null);
  const navigate = useNavigate();

  const getCategories = async () => {
    try {
      const response = await authCred.get("/browse/categories");
      const data = response.data.categories;
      setCategoryData(data);
    } catch (error) {
      console.warn("Error:", error.message);
      if (error.response?.status === 401) {
        navigate("/login", { replace: true });
      }
    }
  };

  const selectingCategoryHandler = async (item) => {
    try {
      const response = await authCred.get(`browse/categories/${item.id}`);
      const data = response.data;

      navigate(`/browse/categories/${item.id}`, {
        state: { playlist: data, items: item },
      });
    } catch (error) {
      console.error("Error fetching category details:", error.message);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

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
