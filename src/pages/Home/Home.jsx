import ContactButtons from "@src/components/ContactButtons";
import Navbar from "@src/components/Navbar";
import Hero from "./sections/Hero";
import Nosotros from "./sections/Nosotros";

const Home = () => {
  return (
    <div>
      <ContactButtons />
      <Navbar />
      <Hero />
      <Nosotros />
    </div>
  );
};

export default Home;
