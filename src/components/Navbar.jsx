import BrandLogo from "@assets/logos/brandLogo_white.webp";
import UseWindowWidth from "@src/hooks/UseWindowWidth";
import "animate.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import { AiOutlineFullscreenExit } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const navItems = [
    { path: "/desarrollos", text: "Desarrollos" },
    { path: "/catalogo", text: "Catálogo" },
    { path: "/financiamiento", text: "Financiamiento" },
    { path: "/testimoniales", text: "Testimoniales" },
    { path: "/nosotros", text: "Nosotros" },
    { path: "/blog", text: "Blog" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const windowWidth = UseWindowWidth();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleOuterClick = (e) => {
    if (e.target === e.currentTarget) {
      closeMenu();
    }
  };

  return (
    <nav className="text-white w-full py-5 2xl:px-24 fixed flex items-center justify-around backdrop-blur-md bg-black bg-opacity-50 border-b-2 border-white shadow-2xl z-50">
      <Link to={"/"}>
        <img
          className="w-[123px] h-full cursor-pointer"
          src={BrandLogo}
          alt="Brand Logo"
        />
      </Link>

      {windowWidth <= 980 ? (
        <div>
          <IoMenu
            onClick={toggleMenu}
            className="cursor-pointer relative z-300"
            size={"3em"}
          />
          {menuOpen && (
            <ul
              onClick={handleOuterClick}
              className="animate__animated animate__zoomIn absolute fond-bold text-md text-center bg-black border-2 border-dark-gray grid gap-6 place-content-center backdrop-blur-sm bg-opacity-90 w-full h-screen right-0 top-0 "
            >
              <AiOutlineFullscreenExit
                onClick={closeMenu}
                className="absolute right-10 top-10 cursor-pointer"
                size={"3em"}
              />
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    className="w-full h-full font-my-raleway text-lg px-4 border-l-2 border-orange"
                    to={item.path}
                  >
                    {item.text}
                  </Link>
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
  );
};

export default Navbar;
