import ContactButtons from "@src/components/ContactButtons";
import Footer from "@src/components/Footer";
import Navbar from "@src/components/Navbar";
import BlogView from "@src/layouts/BlogView";
import Contact from "../../layouts/Contact";
import DesarrollosHome from "./DesarrollosHome";
import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Navbar />
      <ContactButtons />
      <main>
        <Hero />
        <DesarrollosHome />
        <BlogView />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
