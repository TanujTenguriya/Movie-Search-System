import React, { useEffect, useState } from 'react'
import MovieItem from '../components/MovieItem'
function Favourites() {
  const [movies, setMovies] = useState([])
  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem("movie" ) || "[]")
    if (Array.isArray(data)) {
      setMovies(data);
    } else {
      setMovies([]); // fallback to empty if not array
    }
   
  },[]);
  return (
    <div>
      {movies.length === 0 &&
        <div className="mb-6 wt-6 font-bold text-2xl">No Favourites Added</div> }
        {movies.length !== 0 &&
        <div className="flex flex-col gap-2 bg-amber-50 p-4">
            <div className="text-2xl font-bold mb-3">Favourite Movies...</div>

            <div className="flex overflow-x-auto gap-4 scrollbar-hide">
                {movies.map((item) => (
                    <div key={item.id} className="flex-shrink-0 w-[180px] h-">
                    <MovieItem movie={item} />
                </div>
            ))}
            </div>
        </div>}
    </div>
  )
}

export default Favourites
