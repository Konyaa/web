import React from 'react';
import { NavLink } from "react-router-dom";
import logo from './src/assets/img/logo.png';

export default function Navbar() {
  
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-orange-400 font-bold underline underline-offset-4"
      : "hover:underline";

  return (
    <nav className="flex justify-between items-center px-6 py-4 text-sm z-10 relative m-2">
      <div>
        <img src={logo} alt="ROBOTIIK Logo" className="h-8 w-24" />
      </div>
      <div className="space-x-6 text-white font-medium">
        <NavLink to="/" className={navLinkClass}>Home</NavLink>
        <NavLink to="/about" className={navLinkClass}>About</NavLink>
        <NavLink to="/division" className={navLinkClass}>Division</NavLink>
        <NavLink to="/achievement" className={navLinkClass}>Achievements</NavLink>
        <NavLink to="/partners" className={navLinkClass}>Partners</NavLink>
      </div>
    </nav>
  );
}
