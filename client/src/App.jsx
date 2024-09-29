import "./index.css";
import { ContextProvider } from "./components/MyContext";
import { Route, Routes } from "react-router-dom";
//importing font sizes
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// Import Pages
import Home from "./pages/Home";
import NavBar from "./components/NavComponent/NavBar";

function App() {
  return (
    <ContextProvider>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </ContextProvider>
  );
}

export default App;
