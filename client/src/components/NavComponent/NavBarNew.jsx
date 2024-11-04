import { IoMdHome, IoMdSearch } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { LuListMusic } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
const NavBarNew = () => {
  const [dropMenu, setDropMenu] = useState(false);
  const windewSize = window.innerWidth;

  useEffect(() => {
    windewSize >= 768 ? setDropMenu(true) : setDropMenu(false);
  }, []);
  const navItems = [
    { name: "home", url: "/", logo: <IoMdHome /> },
    { name: "search", url: "/search", logo: <IoMdSearch /> },
    { name: "library", url: "/library", logo: <LuListMusic /> },
  ];
  // style guide (max-w-3xl, px-6)

  const navVariants = {
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
    hide: { opacity: 0, y: -40 },
  };

  return (
    <nav className="px-4 bg-gray-600 relative flex justify-center">
      <div
        id="nav-content"
        className="flex w-full flex-row justify-between items-center container"
      >
        <NavLink to={navItems[0].url}>
          <div className="font-bold text-xs text-gray-300 border-2 border-gray-300 w-8 h-8 text-center flex justify-center items-center rounded-full ">
            LM
          </div>
        </NavLink>
        <div
          onClick={() => (windewSize <= 768 ? setDropMenu(!dropMenu) : null)}
          className="py-2"
        >
          <IoMenu
            size={30}
            className={`text-white ${windewSize >= 768 ? "hidden" : "flex"}`}
          />
        </div>
        {dropMenu && (
          <motion.ul
            initial="hide"
            animate="show"
            variants={navVariants}
            className="text-white absolute md:relative md:flex-row md:h-12 md:items-center right-0 bg-gray-600 md:w-fit z-50 h-screen top-0 w-full flex flex-col gap-10 [&>*]:ml-10"
          >
            <div
              onClick={() =>
                windewSize <= 768 ? setDropMenu(!dropMenu) : null
              }
              className="absolute right-4 top-4"
            >
              <IoIosClose
                className={`${windewSize >= 768 ? "hidden" : "flex"}`}
                size={30}
              />
            </div>
            {navItems.map((item, index) => {
              return (
                <li
                  onClick={() =>
                    windewSize <= 768 ? setDropMenu(!dropMenu) : null
                  }
                  className="first-of-type:mt-48 md:first-of-type:mt-0"
                  key={uuidv4()}
                >
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : inActiveStyle
                    }
                    className="ml-3 md:ml-0 flex flex-row items-center capitalize"
                    to={item?.url}
                  >
                    <div className="mr-4 md:mr-1" id={`icon-${index}`}>
                      {item.logo}
                    </div>

                    <p>{item?.name}</p>
                  </NavLink>
                </li>
              );
            })}
          </motion.ul>
        )}
      </div>
    </nav>
  );
};

export default NavBarNew;

const activeStyle = {
  color: "white",
};

const inActiveStyle = {
  color: "lightgray",
};
