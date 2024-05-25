import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap:0">
      <h2 className="text-2xl font-semibold">Food Recipe</h2>
      <form>
        <input
          type="text"
          name="search"
          placeholder="Enter Items..."
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink to={'/'} className="text-black hover:text-gray">
            Home
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;