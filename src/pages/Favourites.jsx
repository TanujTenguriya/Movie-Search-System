import React, { useEffect, useState } from "react";
import MovieItem from "../components/MovieItem";
import Recommendations from "../components/Recommendations";
import axios from "axios";

function Favourites() {
  const [movies, setMovies] = useState([]);
  const [recommendedIds, setRecommendedIds] = useState([]);

 useEffect(() => {
  const data = JSON.parse(localStorage.getItem("movie") || "[]");

  if (!Array.isArray(data) || data.length === 0) {
    setMovies([]);
    return;
  }

  setMovies(data);

  const favourites = data.map((m) => ({
    title: m.title,
    overview: m.overview,
    genres: m.genres?.map((g) => g.name) || [],
  }));

  axios
    .post("http://localhost:5000/api/recommend", { favourites })
    .then((res) => {
      setRecommendedIds(res.data.recommendedIds);
    })
    .catch((err) => console.error("Recommendation error", err));
}, []);

  return (
    <div>
      {movies.length === 0 && (
        <div className="flex justify-center items-center min-h-[80vh]">
          <div className="font-bold text-2xl text-slate-700">
            No Favourites Added
          </div>
        </div>
      )}

      {movies.length !== 0 && (
        <>
          <div className="flex flex-col gap-2 bg-amber-50 p-4">
            <div className="text-2xl font-bold mb-3">
              Favourite Movies...
            </div>

            <div className="flex overflow-x-auto gap-4 scrollbar-hide">
              {movies.map((item) => (
                <div key={item.id} className="flex-shrink-0 w-[180px]">
                  <MovieItem movie={item} />
                </div>
              ))}
            </div>
          </div>

          {recommendedIds.length > 0 && (
            <Recommendations recommendedIds={recommendedIds} />
          )}
        </>
      )}
    </div>
  );
}

export default Favourites;
