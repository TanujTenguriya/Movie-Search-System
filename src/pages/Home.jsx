import { useEffect, useState } from "react";
import MovieItem from "../components/MovieItem";
function  Home(){

    const [trending, setTrending] = useState([])
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    const [searchKey, setSearchKey] = useState("")
    const [result, setResult] = useState([])
    const [searchActive, setSearchActive] = useState(false)
    useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`)
        .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
        })
        .then(data => {
        // Validate API response
        if (data && Array.isArray(data.results)) {
            setTrending(data.results);
        } else {
            setTrending([]); // fallback if API returns unexpected data
        }
        })
        .catch(err => {
        console.error("API error:", err);
        setTrending([]); // fallback in case of network error
        });
    }, []);



    const handleSearch = () => {
        if (!searchKey.trim()) return;

        fetch(`https://api.themoviedb.org/3/search/movie?query=${searchKey}&api_key=${apiKey}`)
            .then(res => {
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            return res.json();
            })
            .then(data => {
            if (data && Array.isArray(data.results)) {
                setResult(data.results);
            } else {
                setResult([]); // fallback if API returns unexpected data
            }
            })
            .catch(err => {
            console.error("API error:", err);
            setResult([]); // fallback in case of network or fetch error
            });

        setSearchActive(true);
        setSearchKey("");
    };

    
    return (
        <>
        <div className="relative w-full h-[400px] bg-cover bg-center" style={{ backgroundImage: `url('https://imgs.search.brave.com/81ukf4oJRnT02euGgE5WC7jicu_4pSHquUD2WVMycZE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvODM4/NTI5OS5qcGc')` }}>
        <div className="absolute inset-0  bg-opacity-60 text-white flex flex-col items-center justify-center px-4 text-center">
        <h1 className=" text-4xl font-bold mb-2">Welcome.</h1>
        <p className=" text-lg mb-6">Millions of movies to discover. Explore now.</p>

        {/* Search Bar */}
        <input
            type="text"
            placeholder="Search for a movie ..."
            className="flex-grow w-full max-w-3xl rounded-full max-h-12 mb-2 bg-white px-5 py-3 text-gray-700 focus:outline-none"
            value = {searchKey}
            onChange = {(e) => setSearchKey(e.target.value)}
        />

        <button className="bg-cyan-500 text-black rounded-full hover:bg-cyan-600 font-semibold px-6" onClick={handleSearch}>
            Search
        </button>
        </div>
        </div>
        {searchActive && result.length === 0 &&
        <div className="mb-6 wt-6 font-bold text-2xl">No Results Found</div> }
        {result.length !== 0 &&
        <div className="flex flex-col gap-2 bg-amber-50 p-4">
            <div className="text-2xl font-bold mb-3">Search Results ...</div>

            <div className="flex overflow-x-auto gap-4 scrollbar-hide">
                {result.map((item) => (
                    <div key={item.id} className="flex-shrink-0 w-[180px] h-">
                    <MovieItem movie={item} />
                </div>
            ))}
            </div>
        </div>}
        <div className="flex flex-col gap-2 bg-amber-50 p-4">
            <div className="text-2xl font-bold mb-3">Trending Movies...</div>

            <div className="flex overflow-x-auto gap-4 scrollbar-hide">
                {trending.map((item) => (
                    <div key={item.id} className="flex-shrink-0 w-[180px] overflow-hidden">
                    <MovieItem movie={item} />
                </div>
            ))}
            </div>
        </div>

        </>
    )
}

export default Home