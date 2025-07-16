import React from 'react';
import Movie from '../pages/Movie';
import { Navigate, useNavigate } from 'react-router-dom';

function MovieItem({ movie }) {
  const { title, poster_path, vote_average, release_date } = movie;
  const navigate = useNavigate()
  
  const handleMovieClick = (movie) => {navigate(`/movie/${movie.id}`);}
  return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300" 
     onClick = {() => handleMovieClick(movie)}>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={movie.title}
        className="w-full h-72 object-cover"
      />
      <div className="p-4 h-40 text-white">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-300 mb-1">⭐ {vote_average}</p>
        <p className="text-sm text-gray-400">📅 {release_date}</p>
      </div>
    </div>
  );
}

export default MovieItem;

