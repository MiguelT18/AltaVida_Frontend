import Footer from '@src/components/Footer'
import Navbar from '@src/components/Navbar'
import BlogView from '@src/layouts/BlogView'
// import { useEffect, useState } from "react";
import Hero from '../components/Home/Hero'
import ProyectosSection from '../components/Home/ProyectosSection'
import Contact from '../layouts/Contact'

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
	)
}

export default Home
