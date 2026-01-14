import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function Recommendations({ recommendedIds }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchRecommendations() {
      const fetched = [];

      for (let id of recommendedIds) {
        try {
          const res = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
          );
          const data = await res.json();
          fetched.push(data);
        } catch (err) {
          console.error("Failed to fetch recommended movie", err);
        }
      }

      setMovies(fetched);
    }

    if (recommendedIds.length > 0) {
      fetchRecommendations();
    }
  }, [recommendedIds]);

  return (
    <div className="flex flex-col gap-2 bg-slate-50 p-4 mt-6">
      <div className="text-2xl font-bold mb-3">
        Recommended For You
      </div>

      <div className="flex overflow-x-auto gap-4 scrollbar-hide">
        {movies.map((item) => (
          <div key={item.id} className="flex-shrink-0 w-[180px]">
            <MovieItem movie={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommendations;
