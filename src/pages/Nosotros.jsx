import HeaderImg from '@assets/images/nosotros/NosotrosHeader.webp'
import Footer from '@src/components/Footer'
import Header from '@src/components/Header'
import Navbar from '@src/components/Navbar'
import Contact from '@src/layouts/Contact'
import 'animate.css'
import Exito from '../components/Nosotros/sections/Exito'
import Historia from '../components/Nosotros/sections/Historia'

const Nosotros = () => {
	return (
		<div>
			<Navbar />
			<Header
				title='Sobre nosotros'
				description='Conoce más sobre nuestra historia'
				image={HeaderImg}
			/>
			<main>
				<Exito />
				<Historia />
				<Contact />
			</main>
			<Footer />
		</div>
	)
}

export default Nosotros
