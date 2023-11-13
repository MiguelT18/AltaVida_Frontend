import Footer from '@src/components/Footer'
import Header from '@src/components/Header'
import Navbar from '@src/components/Navbar'
import Contact from '@src/layouts/Contact'
import 'animate.css'
import Proyectos from '../components/Desarrollos/Proyectos'

const Desarrollos = () => {
	return (
		<>
			<Navbar />
			<Header
				title='Desarrollos'
				description='Explora a fondo nuestros proyectos'
			/>

			<Proyectos />
			<Contact />
			<Footer />
		</>
	)
}

export default Desarrollos
