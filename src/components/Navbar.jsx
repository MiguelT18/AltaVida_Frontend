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
    <nav className="bg-black text-white">
      <img src={BrandLogo} alt="Brand Logo" />
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
