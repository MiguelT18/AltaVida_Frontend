import Footer from '@src/components/Footer'
import Header from '@src/components/Header'
import Navbar from '@src/components/Navbar'
import Contact from '@src/layouts/Contact'
import 'animate.css'
import Modelos from '../components/Catalogo/Modelos'

const Catalogo = () => {
	return (
		<>
			<Navbar />
			<Header
				title='Catálogo'
				description='Explora a fondo nuestros modelos de construcción'
			/>

			<main>
				<Modelos />
				<Contact />
			</main>
			<Footer />
		</>
	)
}

export default Catalogo
