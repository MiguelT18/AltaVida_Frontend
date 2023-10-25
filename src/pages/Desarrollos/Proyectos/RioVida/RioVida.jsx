import Footer from "@src/components/Footer";
import Navbar from "@src/components/Navbar";
import Contact from "@src/layouts/Contact";

import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import MainSection from "./MainSection";

const AltaMira = () => {
  return (
    <>
      <Navbar />
      <header className="bg-navy-blue bg-cover bg-no-repeat bg-center bg-fixed text-white flex flex-col items-center justify-end w-full h-[45vh] pb-24">
        <Link
          to={"../"}
          className="flex animate__animated animate__bounceIn justify-center items-center gap-4"
        >
          <span className="bg-orange text-white rounded-full w-[35px] h-[35px] flex justify-center items-center">
            <IoChevronBackOutline size={"1.3em"} />
          </span>
          <h1 className="block text-xl text-center font-my-raleway font-bold uppercase">
            Río Vida
          </h1>
        </Link>
      </header>

      <main>
        <MainSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default AltaMira;
