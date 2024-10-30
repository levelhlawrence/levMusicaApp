/* eslint-disable react/prop-types */

import { createContext, useState } from "react";

const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <MyContext.Provider
      value={{ toggleMenu, setToggleMenu, loggedIn, setLoggedIn }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, ContextProvider };
