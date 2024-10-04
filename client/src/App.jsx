import "./index.css";
import { ContextProvider } from "./components/MyContext";
import { Route, Routes } from "react-router-dom";
//importing font sizes

// Import Pages
import Home from "./pages/Home";
import Search from "./pages/Search";
import NavBar from "./components/NavComponent/NavBar";

function App() {
  return (
    <ContextProvider>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </ContextProvider>
  );
}

export default App;
