import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

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
    </header>
  );
}
