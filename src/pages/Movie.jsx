import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Movie() {
    const {id} = useParams()
    const [movie, setMovie] = useState(null)
    const [favourite, setFavourite] = useState(false)
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    console.log(id)
    useEffect( () => {
      const fetchMovie = async () => {
      await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
        .then(res => res.json())
        .then(data => {
    if (data && data.id) {
      setMovie(data); // movie found
      const stored = JSON.parse(localStorage.getItem("movie")) || [];
      const alreadyFav = stored.some((m) => m.id === data.id);
      setFavourite(alreadyFav);
    } else {
      console.error("Invalid movie data:", data);
    }
  })
      .catch(err => console.error("Fetch error:", err));
}
fetchMovie()
  }, [id]);

  const handleAddition = (movie, favourite) => {
    let stored = [];

  try {
    const raw = localStorage.getItem("movie");
    const parsed = JSON.parse(raw);

    // Ensure we only use an array
    stored = Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    stored = [];
  }
  let updated;
  if(favourite){
    updated = stored.filter((item) => item.id !== movie.id)
    setFavourite(false)
    alert("Removed from favourites")
  }else{
    const alreadyExists = stored.some((m) => m.id === movie.id);
    if (alreadyExists) {
      alert("Already in favourites");
      return;
    }
  // Check if movie already exists by ID
    updated = [...stored, movie];

    alert("Added in favourites")
    setFavourite(true)
  } 
  
    localStorage.setItem("movie", JSON.stringify(updated));
  }

  if (!movie) {
  return (
    <div className="flex justify-center items-center min-h-screen text-white">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
    </div>
  );
}

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
      <div className="flex items-center flex-col gap-4">
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
        <button className='bg-gray-500 w-100' onClick={()=>handleAddition(movie ,favourite)}>{(!favourite && <div>Add to favourites</div>) || (<div>Remove from favourites </div>)}</button>
      </div>
    </div>
  </div>
);

}

export default Movie
