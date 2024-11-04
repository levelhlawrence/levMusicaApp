import authCred from "../auth/serverAuth";
import { useNavigate } from "react-router-dom";
import { createContext, useState } from "react";

/* eslint-disable react/prop-types */

const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [categories, setCategories] = useState();
  const [audiobooks, setAudioBooks] = useState();

  const navigate = useNavigate();

  // get user
  const getUser = async () => {
    try {
      const response = await authCred.get("/me");
      const data = response.data;
      setUser(data);
    } catch (error) {
      console.warn(error.message);
      if (error.status === 401) {
        navigate("/login");
      }
    }
  };
  // get categories
  const getCategories = async () => {
    try {
      const response = await authCred.get("/browse/categories");
      const data = response.data;
      setCategories(data);
    } catch (error) {
      console.warn(error.message);
      if (error.status === 401) {
        navigate("/login");
      }
    }
  };

  // get audioBooks
  const getAudioBooks = async () => {
    try {
      const response = await authCred.get("/audiobooks");
      const data = response.data;
      setAudioBooks(data);
      console.log(data);
    } catch (error) {
      console.warn(error.message);
      if (error.status === 401) {
        navigate("/login");
      }
    }
  };

  return (
    <MyContext.Provider
      value={{
        user,
        getUser,
        navigate,
        categories,
        getCategories,
        getAudioBooks,
        audiobooks,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, ContextProvider };
