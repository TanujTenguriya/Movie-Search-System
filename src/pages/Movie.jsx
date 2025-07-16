import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Movie() {
  const {id} = useParams()
  const [movie, setMovie] = useState(null)
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  console.log(id)
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then(res => res.json())
      .then(data => {
  if (data && data.id) {
    setMovie(data); // movie found
  } else {
    console.error("Invalid movie data:", data);
  }
})
      .catch(err => console.error("Fetch error:", err));
  }, [id]);
  if (!movie) return <div className="text-white p-4">Loading...</div>;
  return (
  <div className="flex flex-col p-6 min-h-screen">
    <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
    <div className='mb-4'>{movie.tagline}</div>
    <div className="flex flex-col md:flex-row gap-6">
      {/* Poster Image */}
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-[300px] h-auto rounded shadow-lg"
      />

      {/* Movie Details */}
      <div className="flex flex-col gap-4">
        <p className="text-lg mt-8"><span className='font-semibold'>Overview:</span> {movie.overview}</p>
        <p><span className="font-semibold">Release Date:</span> {movie.release_date}</p>
        <p><span className="font-semibold">Runtime:</span> {movie.runtime} min</p>
        <p>
          <span className="font-semibold">Genres:</span>{' '}
          {movie.genres.map((genre, index) => (
            <span key={genre.id}>
              {genre.name}{index !== movie.genres.length - 1 && ', '}
            </span>
          ))}
        </p>
      </div>
    </div>
  </div>
);

}

export default Movie
