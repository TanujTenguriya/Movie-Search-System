import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Favourites from './pages/Favourites'
function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <div className="pt-20 px-6"> {/* spacing below fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
