// Images
import Ahorra from '@assets/images/blog/ahorra/FocoPicture.webp'
import HeaderImg from '@assets/images/blog/blogHeaderImg.webp'
import Financiamiento from '@assets/images/blog/financiamiento.webp'
import HomeBlog from '@assets/images/blog/homeBlog.webp'
import ComprasNavidad from '@assets/images/blog/navidad/compras_navidad.webp'
import Tarija01 from '@assets/images/blog/tarija/tarija01.webp'

// Components
import MainSection from '@components/MainSection'
import Footer from '@src/components/Footer'
import Navbar from '@src/components/Navbar'
import Contact from '@src/layouts/Contact'
import CardBlog from '../components/Blog/CardBlog'

// Blogs
import Blog1 from '../components/Blog/BlogContents/Blog1'
import Blog2 from '../components/Blog/BlogContents/Blog2'
import Blog3 from '../components/Blog/BlogContents/Blog3'
import Blog4 from '../components/Blog/BlogContents/Blog4'
import Blog5 from '../components/Blog/BlogContents/Blog5'

import Header from '@src/components/Header'
import 'animate.css'

const Blog = () => {
	return (
		<div>
			<Navbar />
			<Header
				title='Blog'
				description='Ponte al día con las últimas noticias'
				image={HeaderImg}
			/>

			<main>
				<MainSection>
					<div className='w-[90%] mx-auto grid grid-cols-2 max-lg:grid-cols-1 justify-items-center items-stretch gap-8'>
						<CardBlog
							title='5 Razones por las que Tarija, Bolivia, es un Lugar Ideal
        para Vivir'
							description='Tarija es una ciudad que combina la belleza
        natural con una rica cultura y un estilo de vida relajado.'
							views='6060'
							image={Tarija01}
							blogContent={<Blog3 />}
						/>
						<CardBlog
							title='Compras navideñas: Utilidad VS. Novedad'
							description='¿Llegó la hora de hacer todas esas compras navideñas y no sabes ni por dónde empezar? Te ayudamos a distinguir entre Utilidad y Novedad.'
							views='108'
							image={ComprasNavidad}
							blogContent={<Blog1 />}
						/>
						<CardBlog
							title='Ahorra energía en casa con estos tips y bájale a tu recibo de luz'
							description='Descubre cómo ahorrar energía en casa y reducir tus gastos mensuales. Con consejos prácticos y efectivos, aprenderás a cuidar el medio ambiente mientras ahorras dinero.'
							views='3240'
							image={Ahorra}
							blogContent={<Blog2 />}
						/>
						<CardBlog
							title='¿Llegó el momento de comprar tu casa?'
							description='¿Llegó el momento de comprar tu casa? Te decimos todo lo que necesitas saber de financiamiento antes de obtener un crédito hipotecario.'
							views='2343'
							image={Financiamiento}
							blogContent={<Blog4 />}
						/>
						<CardBlog
							title='Comienza a hacer ejercicio desde casa'
							description='Si eres de los que piensan que hacer ejercicio es muy complicado, este blog es para ti. Encuentra motivación y ponte en forma sin salir de casa con nosotros.'
							views='1662'
							image={HomeBlog}
							blogContent={<Blog5 />}
						/>
					</div>
				</MainSection>
				<Contact />
			</main>
			<Footer />
		</div>
	)
}

export default Blog
