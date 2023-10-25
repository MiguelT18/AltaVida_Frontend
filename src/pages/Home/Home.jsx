import Footer from "@src/components/Footer";
import Navbar from "@src/components/Navbar";
import BlogView from "@src/layouts/BlogView";
// import { useEffect, useState } from "react";
import Contact from "../../layouts/Contact";
import Hero from "./Hero";
import ProyectosSection from "./ProyectosSection";

const Home = () => {
  // TODO: Añadir una animación de scroll en el hero
  // const [scrollPosition, setScrollPosition] = useState(window.scrollY);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const newY = window.scrollY;
  //     setScrollPosition(newY);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <>
      <Navbar />
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
