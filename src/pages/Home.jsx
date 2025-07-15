import { useEffect, useState } from "react";

function  Home(){

    const [trending, setTrending] = useState([])
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MWI3OTJmMGU1NTg2YTE3Njk0MWZjMWQ3Mzk2N2M4MyIsIm5iZiI6MTc1MjU4MzcxMS4zNDUsInN1YiI6IjY4NzY0ZTFmNWI0NDY4MmZlMzU3MTMyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QLNWfJWoPLeno-gmg9qu4s4i989mdg7AfLXhi7O5mlc'
    }
};

useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
    .then(res => res.json())
    .then(res => {
        console.log("API response:", res);
        setTrending(res.results)})
    .catch(err => console.error("API error:", err));    
},[]);

console.log("Trending state:", trending);
// fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
//   .then(res => res.json())
//   .then(res => console.log(res.results))
  //.catch(err => console.error(err));
    
    return (
        <>
        <img src="https://imgs.search.brave.com/81ukf4oJRnT02euGgE5WC7jicu_4pSHquUD2WVMycZE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvODM4/NTI5OS5qcGc" 
        alt="img" 
        className="w-screen"/>

        </>
    )
}

export default Home