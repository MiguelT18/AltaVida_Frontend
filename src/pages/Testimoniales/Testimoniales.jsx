import ContactButtons from "@src/components/ContactButtons";
import Footer from "@src/components/Footer";
import Header from "@src/components/Header";
import Navbar from "@src/components/Navbar";
import Contact from "@src/layouts/Contact";
import Testimonios from "./Testimonios/Testimonios";

const Testimoniales = () => {
  return (
    <div>
      <Navbar />
      <ContactButtons />
      <Header
        title="Testimoniales"
        description="Descubre las opciones de nuestros clientes satisfechos"
      />
      <main>
        <Testimonios />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Testimoniales;
