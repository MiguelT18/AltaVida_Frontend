import ContactButtons from "@src/components/ContactButtons";
import Footer from "@src/components/Footer";
import Navbar from "@src/components/Navbar";
import BlogView from "@src/layouts/BlogView";
import Contact from "../../layouts/Contact";
import Hero from "./Hero";
import ProyectosSection from "./ProyectosSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <ContactButtons />
      <main>
        <Hero />
        <ProyectosSection />
        <BlogView />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
