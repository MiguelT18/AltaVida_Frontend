import Footer from '@src/components/Footer'
import Header from '@src/components/Header'
import Navbar from '@src/components/Navbar'
import Contact from '@src/layouts/Contact'
import 'animate.css'
import Testimonios from '../components/Testimoniales/Testimonios/Testimonios'

const Testimoniales = () => {
	return (
		<>
			<Navbar />
			<Header
				title='Testimoniales'
				description='Descubre las opciones de nuestros clientes satisfechos'
			/>

			<main>
				<Testimonios />
				<Contact />
			</main>
			<Footer />
		</>
	)
}

export default Testimoniales
