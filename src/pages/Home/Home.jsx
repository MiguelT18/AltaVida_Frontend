import ContactButtons from "@src/components/ContactButtons";
import Footer from "@src/components/Footer";
import Navbar from "@src/components/Navbar";
import Contact from "../../layouts/Contact";
import Exito from "./sections/Exito";
import Hero from "./sections/Hero";
import Nosotros from "./sections/Nosotros";

const Home = () => {
  return (
    <>
      <Navbar />
      <ContactButtons />
      <main>
        <Hero />
        <Nosotros />
        <Exito />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
