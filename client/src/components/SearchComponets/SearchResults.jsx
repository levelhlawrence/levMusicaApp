import {v4 as uuidv4} from "uuid";
import {useState, useEffect} from "react";
import authCred from "../../auth/serverAuth.js";
import {useNavigate} from "react-router-dom";
/* eslint-disable react/prop-types */

const SearchResults = ({results, selected}) => {
    const [myItems, setMyItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const totalSongs = results[`${selected}s`]?.total;
    const navigate = useNavigate();

    useEffect(() => {
        const items = results[`${selected}s`]?.items || [];
        setMyItems(items);

        if (items.length > 0) {
            setLoading(false);
        }
    }, [selected, results]);

    const resultsHandler = async (result) => {
        let url = "";
        switch (selected) {
            case "artist":
                url = `/artists/${result.id}`;
                break;
            case "track":
                url = `/tracks/${result.id}`;
                break;
            case "show":
                url = `/shows/${result.id}`;
                break;
            case "episode":
                url = `/episodes/${result.id}`;
                break;
            case "audiobook":
                url = `/audiobooks/${result.id}`;
                break;
            default:
                url = `/albums/${result.id}`;
        }
        console.log(selected)

        try {
            const response = await authCred.get(url);
            const data = response.data;
            navigate(url, {
                state: {album: data},
            });
        } catch (error) {
            console.warn("Error:", error.message);
            if (error.response?.status === 401) {
                navigate("/login", {replace: true});
            }
        }
    };

    if (loading) {
        return (
            <div className="bg-black text-white">
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <aside className="bg-gray-900 rounded-lg min-h-full text-white">
            <div className="pb-10 mt-4 py-2 px-2">
                <p className="text-gray-400 text-sm pb-6">
                    Results found: <span> {totalSongs}</span>
                </p>
                {myItems.map((item) => (
                    <div
                        onClick={() => resultsHandler(item)}
                        className="text-gray-300 flex items-center gap-4 py-2 border-b border-gray-700 first-of-type:border-t"
                        key={uuidv4()}
                    >
                        <img
                            className="rounded-md max-w-14"
                            src={
                                [selected]?.includes("track", "show", "episode")
                                    ? item.album?.images?.[2]?.url || ""
                                    : item.images?.[2]?.url || ""
                            }
                            alt={item.name}
                        />
                        <div>
                            <p className="capitalize">{item.name}</p>
                            <p className="text-xs text-gray-400">{item.type}</p>
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
};

export default SearchResults;
