import React from "react";
import { Link } from "react-router-dom";


export default function OnboardingHeader({ logo }) {
  return (
    <header className="bg-purple w-full py-4 flex justify-around items-center px-4 md:px-8">
      <div>
        <Link to="/">
          <img src={logo} alt="Biva Logo" className="h-8 md:h-10" />
        </Link>
      </div>
      <nav className="hidden md:block">
        <ul className="flex space-x-4 md:space-x-8">
          <li>
            <Link to="/" className="text-white text-sm md:text-base">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/" className="text-white text-sm md:text-base">
              Testimonials
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex space-x-4 items-center">
        <Link
          to="/waiting-list"
          className="bg-black w-fit text-white rounded px-2 py-1 md:w-fit md:px-4 md:py-2"
        >
          Join Us Today
        </Link>
      </div>
    </header>
  );
}
