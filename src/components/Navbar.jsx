import BrandLogo from "@assets/logos/brandLogo_white.webp";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { path: "/proyectos", text: "Proyectos" },
    { path: "/financiamiento", text: "Financiamiento" },
    { path: "/testimoniales", text: "Testimoniales" },
    { path: "/blog", text: "Blog" },
  ];

  return (
    <nav className="text-white w-full py-5 fixed flex items-center justify-around backdrop-blur-sm border-b-2 border-white">
      <img
        onClick={() => (window.location.href = "/")}
        className="w-[123px] h-full cursor-pointer"
        src={BrandLogo}
        alt="Brand Logo"
      />
      <ul className="flex gap-8">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              className="hover:bg-orange px-4 py-2 rounded-md transition-all cursor-pointer"
              to={item.path}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
