import "./index.css";
import { ContextProvider } from "./components/MyContext";
import { Route, Routes } from "react-router-dom";
//importing font sizes

// Import Pages
import Home from "./pages/Home";
import Search from "./pages/Search";
import Login from "./pages/Login";
// Import Components
import NavBar from "./components/NavComponent/NavBar";
// Import Side routes
import BrowseCategories from "./components/SearchComponets/BrowseCategories";

function App() {
  return (
    <ContextProvider>
      <NavBar />
      <Routes>
        {/* main routes */}
        <Route exact path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        {/* side routes */}
        <Route path="/search/categories/:id" element={<BrowseCategories />} />
      </Routes>
    </ContextProvider>
  );
}

export default App;
