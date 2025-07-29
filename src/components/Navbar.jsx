import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full mt-0 bg-gray-900 shadow-md py-4 px-4">
      <div className="flex justify-between items-center text-white w-full px-3">
        <div className="text-2xl font-bold">🎬 MovieFinder</div>
        <div className="flex flex-row-reverse gap-8 text-lg">
          <NavLink
            to="/favourites" 
          >
            Favourites
          </NavLink>
          <NavLink
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            to="/"
          >
            Home
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
