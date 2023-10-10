import BrandLogo from "@assets/logos/brandLogo_white.webp";
import UseWindowWidth from "@src/hooks/UseWindowWidth";
import "animate.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const navItems = [
    { path: "/", text: "Inicio" },
    { path: "/desarrollos", text: "Desarrollos" },
    { path: "/financiamiento", text: "Financiamiento" },
    { path: "/testimoniales", text: "Testimoniales" },
    { path: "/blog", text: "Blog" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const windowWidth = UseWindowWidth();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className="text-white w-full py-5 2xl:px-24 fixed flex items-center justify-around backdrop-blur-md border-b-2 border-white shadow-2xl z-50">
        <Link to={"/"}>
          <img
            className="w-[123px] h-full cursor-pointer"
            src={BrandLogo}
            alt="Brand Logo"
          />
        </Link>

        {windowWidth <= 900 ? (
          <div>
            <IoMenu
              onClick={toggleMenu}
              className="cursor-pointer relative z-50"
              size={"40px"}
            />
            {menuOpen && (
              <ul className="animate__animated animate__slideInRight absolute fond-bold text-md text-center bg-black border-2 border-dark-gray grid gap-4 place-content-center backdrop-blur-sm bg-opacity-90 w-full h-screen right-0 top-0">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link to={item.path}>{item.text}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : (
          <ul className="flex gap-8">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  className="hover:bg-orange text-sm px-4 py-2 rounded-md transition-all cursor-pointer"
                  to={item.path}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
