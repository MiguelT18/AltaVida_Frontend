import ContactButtons from "@src/components/ContactButtons";
import Footer from "@src/components/Footer";
import Header from "@src/components/Header";
import Navbar from "@src/components/Navbar";
import Contact from "@src/layouts/Contact";
import Proyectos from "./Proyectos/Proyectos";

const Desarrollos = () => {
  return (
    <>
      <Navbar />
      <ContactButtons />
      <Header
        title="Desarrollos"
        description="Explora a fondo nuestros proyectos"
      />
      <Proyectos />
      <Contact />
      <Footer />
    </>
  );
};

export default Desarrollos;
