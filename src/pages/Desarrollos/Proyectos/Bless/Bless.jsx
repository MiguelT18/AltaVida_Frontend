import ContactButtons from "@src/components/ContactButtons";
import Footer from "@src/components/Footer";
import Navbar from "@src/components/Navbar";
import Contact from "@src/layouts/Contact";

import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

import "animate.css";

const AltaMira = () => {
  return (
    <>
      <ContactButtons />
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
            Bless
          </h1>
        </Link>
      </header>

      <main>
        <section className="bg-white w-[90%] md:w-[70%] mx-auto -mt-14 mb-16 py-10 px-6 shadow-lg shadow-gray-500">
          <h1>Hello Horld!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            vero recusandae! Excepturi nam sed, laborum modi, neque ipsum animi
            nobis ipsa facere consectetur similique rem suscipit. Sapiente earum
            blanditiis reprehenderit?
          </p>
        </section>
        <section>
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AltaMira;
