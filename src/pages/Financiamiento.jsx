import HeaderImg from '@assets/images/financiamiento/HeaderBackground.webp'
import Footer from '@src/components/Footer'
import Header from '@src/components/Header'
import Navbar from '@src/components/Navbar'
import Contact from '@src/layouts/Contact'
import 'animate.css'
import Creditos from '../components/Financiamiento/Creditos/Creditos'

const Financiamiento = () => {
	return (
		<div>
			<Navbar />
			<Header
				title='Financiamiento'
				description='Asesoría personalizada y gratuita'
				image={HeaderImg}
			/>

			<main>
				<Creditos />
				<Contact />
			</main>
			<Footer />
		</div>
	)
}

export default Financiamiento
