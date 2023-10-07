import BlurModule from "@src/components/BlurModule";
import { Link } from "react-router-dom";

import { IoArrowForward } from "react-icons/io5";

const Hero = () => {
  return (
    <section className="w-full h-screen grid place-content-center bg-hero-home bg-center bg-no-repeat bg-cover bg-fixed">
      <BlurModule>
        <div className="flex flex-col">
          <h2 className="text-md font-bold">
            Residencias excepcionales donde la elegancia y la comodidad se unen
            para crear experiencias inolvidables.
          </h2>
          <Link
            className="flex items-center justify-end gap-2 hover:underline hover:text-yellow transition-all"
            to={"/proyectos"}
          >
            Conoce nuestros proyectos <IoArrowForward size={"20px"} />
          </Link>
        </div>
      </BlurModule>
    </section>
  );
};

export default Hero;
