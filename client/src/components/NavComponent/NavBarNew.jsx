import { IoMdHome, IoMdSearch } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { LuListMusic } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

import { useState } from "react";

const NavBarNew = () => {
  const [dropMenu, setDropMenu] = useState(false);
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
    <nav className="px-4 bg-gray-600 max-w-3xl relative">
      <div
        id="nav-content"
        className="flex flex-row justify-between items-center"
      >
        <div className="font-bold text-xs text-gray-300 border-2 border-gray-300 w-8 h-8 text-center flex justify-center items-center rounded-full ">
          LM
        </div>
        <div onClick={() => setDropMenu(!dropMenu)} className="py-2">
          <IoMenu size={30} className="text-white" />
        </div>
        {dropMenu && (
          <motion.ul
            initial="hide"
            animate="show"
            variants={navVariants}
            className="text-white absolute right-0 bg-gray-600 z-50 h-screen top-0 w-full flex flex-col gap-10 [&>*]:ml-10"
          >
            <div
              onClick={() => setDropMenu(!dropMenu)}
              className="absolute right-4 top-4"
            >
              <IoIosClose size={30} />
            </div>
            {navItems.map((item) => {
              return (
                <li
                  onClick={() => setDropMenu(!dropMenu)}
                  className="first flex items-center first-of-type:mt-40 capitalize"
                  key={uuidv4()}
                >
                  {item.logo}
                  <NavLink className="ml-3" to={item?.url}>
                    {item?.name}
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

// import { IoMdHome, IoMdSearch } from "react-icons/io";
// import { LuListMusic } from "react-icons/lu";
// import { NavLink } from "react-router-dom";

// const NavBarNew = () => {
//   return (
//     <nav className="fixed bottom-0 w-full z-50">
//       <ul className="border-t border-t-gray-700 shadow-sm bg-gradient-to-b from-10% backdrop-blur-md from-gray-800/75 to-gray-900/75 h-14  flex items-center justify-evenly px-10">
//         <li className="h-full">
//           <NavLink
//             style={({ isActive }) => (isActive ? activeStyle : normalState)}
//             to="/"
//           >
//             <IoMdHome size={30} />
//             <p className="text-xs">Home</p>
//           </NavLink>
//         </li>
//         <li className="h-full">
//           <NavLink
//             style={({ isActive }) => (isActive ? activeStyle : normalState)}
//             to="/search"
//           >
//             <IoMdSearch size={30} />
//             <p className="text-xs">Search</p>
//           </NavLink>
//         </li>
//         <li className="h-full">
//           <NavLink
//             style={({ isActive }) => (isActive ? activeStyle : normalState)}
//             to="/library"
//           >
//             <LuListMusic size={30} />
//             <p className="text-xs">Library</p>
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// const activeStyle = {
//   color: "white",
//   borderTop: "0.5px solid transparent",
//   borderImage:
//     "linear-gradient(to right, rgb(77, 77, 77), #ffffff, rgb(77, 77, 77)) 1",
//   width: "6rem",
//   backgroundImage:
//     "radial-gradient(ellipse at top, rgb(103, 103, 103) 20%, rgba(0,0,0,0) 70%  ",
//   backgroundPositionY: "top",
//   backgroundSize: "100% 20px",
//   backgroundRepeat: "no-repeat",
//   backgroundPositionX: "center",
//   textAlign: "center",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   height: "100%",
//   alignItems: "center",
//   transition: "all ease-in-out 0.4s",
// };

// const normalState = {
//   display: "flex",
//   color: "#6b7280",
//   justifyContent: "center",
//   alignItems: "center",
//   height: "100%",
//   padding: "0 0.5rem",
//   width: "6rem",
//   flexDirection: "column",
// };

// export default NavBarNew;
