import { createContext, useState } from "react";
import axios from "axios";
const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  // Fetching Token
  const getToken = async () => {
    try {
      const response = await axios.get("http://localhost:3001/token");
      const data = response.data.tokens[response.data.tokens.length - 1];

      return data;
    } catch (error) {
      return error.message;
    }
  };

  return (
    <MyContext.Provider
      value={{ toggleMenu, setToggleMenu, loggedIn, setLoggedIn, getToken }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, ContextProvider };
