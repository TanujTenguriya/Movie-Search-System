import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-screen fixed top-0 left-0 bg-gray-900 shadow-md py-4 px-4">
      <div className="flex justify-between items-center text-white w-full px-3">
        <div className="text-2xl font-bold">🎬 MovieFinder</div>
        <div className="flex flex-row-reverse gap-8 text-lg">
          <NavLink
            to="/favourites"
            className={({ isActive }) =>
              isActive
                ? "text-orange-400 font-semibold"
                : "text-white hover:text-orange-300 transition"
            }
          >
            Favourites
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-orange-400 font-semibold"
                : "text-white hover:text-orange-300 transition"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-orange-400 font-semibold"
                : "text-white hover:text-orange-300 transition"
            }
          >
            Home
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
