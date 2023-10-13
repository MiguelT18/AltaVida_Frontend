import Footer from "@src/components/Footer";
import Navbar from "@src/components/Navbar";
import Contact from "@src/layouts/Contact";
import Modelos from "./Modelos";

const Catalogo = () => {
  return (
    <>
      <Navbar />
      <header className="bg-navy-blue bg-cover bg-no-repeat bg-center bg-fixed text-white flex flex-col items-center justify-end w-full h-[45vh] pb-24">
        <h1 className="text-xl text-center font-my-raleway font-bold uppercase">
          Catálogo
        </h1>
        <p className="text-sm text-center">
          Explora a fondo nuestros modelos de construcción
        </p>
      </header>
      <main>
        <Modelos />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Catalogo;