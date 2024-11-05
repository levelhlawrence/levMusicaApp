import "./index.css";
import {ContextProvider} from "./components/MyContext";
import {Route, Routes} from "react-router-dom";
//importing font sizes

// Import Pages
import Home from "./pages/Home";
import Search from "./pages/Search";
import Login from "./pages/Login";
// Import Components
import NavBarNew from "./components/NavComponent/NavBarNew";
// Import Side routes
import BrowseCategories from "./components/SearchComponets/BrowseCategories";
import Playlist from "./components/SearchComponets/Playlist";
import GetAlbum from "./components/SearchComponets/GetAlbum";
import Footer from "./components/FooterComponent/Footer";
import GetArtists from "./components/SearchComponets/GetArtists.jsx";
import GetTracks from "./components/SearchComponets/GetTracks.jsx";
import GetShows from "./components/SearchComponets/GetShows.jsx";
import GetEpisodes from "./components/SearchComponets/GetEpisodes.jsx";
import GetAudiobooks from "./components/SearchComponets/GetAudiobooks.jsx";

function App() {
    return (
        <ContextProvider>
            <NavBarNew/>
            <Routes>
                {/* main routes */}
                <Route exact path="/" element={<Home/>}/>
                <Route path="/search" element={<Search/>}/>
                <Route path="/login" element={<Login/>}/>
                {/* side routes */}
                <Route path="/browse/categories/:id" element={<BrowseCategories/>}/>
                <Route path="/playlist/:id" element={<Playlist/>}/>
                <Route path="/albums/:id" element={<GetAlbum/>}/>
                <Route path="/artists/:id" element={<GetArtists/>}/>
                <Route path="/tracks/:id" element={<GetTracks/>}/>
                <Route path="/shows/:id" element={<GetShows/>}/>
                <Route path="/episode/:id" element={<GetEpisodes/>}/>
                <Route path="/audiobooks/:id" element={<GetAudiobooks/>}/>
            </Routes>
            <Footer/>
        </ContextProvider>
    );
}

export default App;
