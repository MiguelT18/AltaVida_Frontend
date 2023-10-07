import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/proyectos"}>Proyectos</Link>
        </li>
        <li>
          <Link to={"/financiamiento"}>Financiamiento</Link>
        </li>
        <li>
          <Link to={"/testimoniales"}>Testimoniales</Link>
        </li>
        <li>
          <Link to={"/blog"}>Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
