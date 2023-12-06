import React from "react";
import Logo from "../../assets/images/logo.jpg";

const Header = (): JSX.Element => {
  return (
    <div>
      <nav>
        <ul className="flex">
          <img className="w-10 h-10" src={Logo} alt="WeatherSphere Logo" />
          <input type="text" placeholder="Search" />
          <li className="text-3xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M3 4h18v2H3V4Zm6 7h12v2H9v-2Zm-6 7h18v2H3v-2Z"
              />
            </svg>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
