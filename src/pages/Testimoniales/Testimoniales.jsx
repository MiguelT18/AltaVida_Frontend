import ContactButtons from "@src/components/ContactButtons";
import Footer from "@src/components/Footer";
import Navbar from "@src/components/Navbar";
import Contact from "@src/layouts/Contact";
import Testimonios from "./Testimonios/Testimonios";

const Testimoniales = () => {
  return (
    <>
      <Navbar />
      <ContactButtons />
      <header className="bg-navy-blue bg-cover bg-no-repeat bg-center bg-fixed text-white flex flex-col items-center justify-end w-full h-[45vh] pb-24">
        <h1 className="text-xl text-center font-my-raleway font-bold uppercase">
          Testimoniales
        </h1>
        <p className="text-sm text-center">
          Descubre las opciones de nuestros clientes satisfechos
        </p>
      </header>

      <main>
        <Testimonios />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Testimoniales;
