import { NavLink as Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 px-4 flex flex-col items-center py-6 font-light text-sm">
      <p>LevMusica &copy; 2024</p>
      <ul>
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>Search</Link>
        </li>
        <li>
          <Link>Library</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
