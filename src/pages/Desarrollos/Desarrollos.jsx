import Footer from "@src/components/Footer";
import Navbar from "@src/components/Navbar";
import Contact from "@src/layouts/Contact";
import "animate.css";
import Proyectos from "./Proyectos/Proyectos";

const Desarrollos = () => {
  return (
    <>
      <Navbar />
      <header className="bg-navy-blue bg-cover bg-no-repeat bg-center bg-fixed text-white flex flex-col items-center justify-end w-full h-[50vh] pb-24">
        <h1 className="animate__animated animate__bounceIn text-xl text-center font-my-raleway font-bold uppercase">
          Desarrollos
        </h1>
        <p className="text-sm text-center">
          Explora a fondo nuestros proyectos
        </p>
      </header>
      <Proyectos />
      <Contact />
      <Footer />
    </>
  );
};

export default Desarrollos;
