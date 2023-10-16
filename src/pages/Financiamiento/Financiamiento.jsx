import ContactButtons from "@src/components/ContactButtons";
import Footer from "@src/components/Footer";
import Navbar from "@src/components/Navbar";
import Contact from "@src/layouts/Contact";
import "animate.css";
import Creditos from "./Creditos/Creditos";

const Financiamiento = () => {
  return (
    <div>
      <Navbar />
      <ContactButtons />
      <header className="bg-[url(@assets/images/financiamiento/HeaderBackground.webp)] bg-cover bg-no-repeat bg-center bg-fixed text-white flex flex-col items-center justify-end w-full h-[45vh] pb-24">
        <h1 className="animate__animated animate__bounceIn text-xl text-center font-my-raleway font-bold uppercase">
          Financiamiento
        </h1>
        <p className="text-sm text-center">Asesoría personalizada y gratuita</p>
      </header>
      <main>
        <Creditos />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Financiamiento;
