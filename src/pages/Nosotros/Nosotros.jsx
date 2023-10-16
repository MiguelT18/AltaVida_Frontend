import ContactButtons from "@src/components/ContactButtons";
import Footer from "@src/components/Footer";
import Navbar from "@src/components/Navbar";
import Contact from "@src/layouts/Contact";
import "animate.css";
import Exito from "./sections/Exito";
import Historia from "./sections/Historia";

const Nosotros = () => {
  return (
    <div>
      <ContactButtons />
      <Navbar />
      <header className="bg-[url(@assets/images/nosotros/NosotrosHeader.webp)] bg-cover bg-no-repeat bg-center bg-fixed text-white flex flex-col items-center justify-end w-full h-[45vh] pb-24">
        <h1 className="animate__animated animate__animated animate__bounceIn text-xl text-center font-my-raleway font-bold uppercase">
          Sobre nosotros
        </h1>
        <p className="text-sm text-center">Conoce más sobre nuestra historia</p>
      </header>
      <main>
        <Exito />
        <Historia />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Nosotros;
