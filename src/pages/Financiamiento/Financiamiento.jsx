import ContactButtons from "@src/components/ContactButtons";
import Footer from "@src/components/Footer";
import Header from "@src/components/Header";
import Navbar from "@src/components/Navbar";
import Contact from "@src/layouts/Contact";
import Creditos from "./Creditos/Creditos";

const Financiamiento = () => {
  return (
    <div>
      <Navbar />
      <ContactButtons />
      <Header
        title="Financiamiento"
        description="Asesoría personalizada y gratuita"
      />
      <main>
        <Creditos />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Financiamiento;
