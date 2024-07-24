import React from "react";
import { Link } from "react-router-dom";


export default function OnboardingHeader({ logo }) {
  return (
    <header className="bg-purple w-full py-4 flex justify-between items-center px-4 md:px-8">
      <div>
        <Link to="/">
          <img src={logo} alt="Biva Logo" className="h-8 md:h-10" />
        </Link>
      </div>
      
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
