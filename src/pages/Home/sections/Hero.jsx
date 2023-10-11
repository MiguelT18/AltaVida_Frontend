import BlurModule from "@src/components/BlurModule";
import { Link } from "react-router-dom";

import { IoArrowForward } from "react-icons/io5";

const Hero = () => {
  return (
    <section className="w-full h-screen grid place-content-center bg-[url('@assets/images/home/01_HeroHome.webp')] bg-cover bg-no-repeat bg-center max-sm:bg-hero-home-phone bg-fixed relative px-6">
      <BlurModule>
        <div className="max-w-[900px] flex flex-col">
          <h2 className="text-md font-bold">
            Residencias excepcionales donde la elegancia y la comodidad se unen
            para crear experiencias inolvidables.
          </h2>
          <Link
            className="pt-5 flex items-center justify-end gap-1 hover:underline hover:text-yellow transition-all"
            to={"/desarrollos"}
          >
            <span className="text-sm text-end max-sm:underline max-sm:italic">
              Conoce nuestros desarrollos
            </span>
            <IoArrowForward className="w-fit max-sm:hidden" size={"24px"} />
          </Link>
        </div>
      </BlurModule>
    </section>
  );
};

export default Hero;
