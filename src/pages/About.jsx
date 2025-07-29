import React from 'react'

function About() {
  return (
    <div className="min-h-screen px-6 py-10 bg-gray-100 text-gray-800">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">About This Website</h1>
        
        <p className="text-lg mb-4">
          Welcome to our movie explorer website! This platform lets you browse, search, and save your favorite movies effortlessly.
        </p>

        <h2 className="text-2xl font-semibold mb-2">🎬 Trending Movies</h2>
        <p className="mb-4">
          Discover the most popular and trending movies updated in real-time using data from The Movie Database (TMDB). Stay up-to-date with what's hot right now.
        </p>

        <h2 className="text-2xl font-semibold mb-2">🔍 Search by Any Word</h2>
        <p className="mb-4">
          Use our intuitive search feature to find movies by typing any keyword, title, or phrase. Whether it’s an actor's name or a partial title, we’ll find the relevant results for you.
        </p>

        <h2 className="text-2xl font-semibold mb-2">❤️ Add Movies to Favourites</h2>
        <p className="mb-4">
          Found a movie you love? Easily add it to your favourites. All your selected movies are stored locally in your browser's storage, so you can come back anytime and see them — no login required!
        </p>

        <h2 className="text-2xl font-semibold mb-2">🗑️ Remove from Favourites</h2>
        <p className="mb-4">
          You can also manage your favourites list by removing any movie whenever you want. The favourites section gives you full control over your personal collection.
        </p>

        <p className="text-lg mt-6">
          Start exploring and building your movie watchlist today!
          Built by Tanuj Tenguriya
        </p>
      </div>
    </div>
  )
}

export default About

