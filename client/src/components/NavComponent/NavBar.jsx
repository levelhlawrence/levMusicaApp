import { BottomNavigation } from "@mui/material";

const NavBar = () => {
  return (
    <nav>
      <h1>My nav</h1>
      {window.screen.width < 800 && (
        <article id="bottom nav">
          <h1>button nav</h1>
        </article>
      )}
    </nav>
  );
};

export default NavBar;
