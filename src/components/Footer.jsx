import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-8">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-m font-semibold">🎬 MovieFinder</h1>
          <p className="text-sm">Find your favourite movies, anytime.</p>
        </div>
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-white transition duration-200">Home</Link>
          <Link to="/about" className="hover:text-white transition duration-200">About</Link>
          <Link to="/favourites" className="hover:text-white transition duration-200">Favourites</Link>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 py-3 border-gray-800">
        © {new Date().getFullYear()} MovieFinder. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
