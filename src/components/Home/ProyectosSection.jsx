import AltaMiraLogo from '@assets/images/desarrollos/alta_mira/alta_mira_logo.png'
import BlessLogo from '@assets/images/desarrollos/bless/Logo_Bless.png'
import RioVidaLogo from '@assets/images/desarrollos/rio_vida/rio_vida_logo.png'
import HeaderTitle from '@src/components/HeaderTitle'
import ProyectoCard from './ProyectoCard'

// SWIPER
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-flip'
import 'swiper/css/pagination'
// import required modules
import { Link } from 'react-router-dom'
import { Autoplay, EffectFlip, Pagination } from 'swiper/modules'

import './homeStyles.css'

const DesarrollosHome = () => {
	return (
		<section className='mx-auto pt-8'>
			<div className='w-full max-w-[1500px] mx-auto px-4'>
				<HeaderTitle
					textClass='text-sm text-dark-dray'
					lineClass='bg-navy-blue'
					description='Explora nuestro sólido legado de confianza y calidad en los proyectos de Tarija. Con más de nueve años de experiencia y la entrega exitosa de más de 350 casas, no solo construimos viviendas, sino transformamos sueños en realidad. Desde nuestros condominios vanguardistas, como Alta Mira, Río Vida y Bless, hasta las casas personalizadas, cada proyecto es un testimonio palpable de excelencia.'
					title='Conoce nuestros desarrollos de Tarija'
				/>
			</div>

			<Link to={'/desarrollos'}>
				<Swiper
					loop={false}
					effect={'flip'}
					spaceBetween={30}
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={'auto'}
					autoHeight={true}
					flipEffect={{ slideShadows: false }}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					pagination={true}
					modules={[EffectFlip, Pagination, Autoplay]}
				>
					<SwiperSlide>
						<ProyectoCard
							image={BlessLogo}
							title='Bless'
							description='Explora condominios verticales elegantes y cómodos. Más de 9 años de experiencia y 350 casas de alta calidad entregadas. Encuentra tu espacio perfecto en nuestros proyectos.'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<ProyectoCard
							image={AltaMiraLogo}
							title='Alta Mira'
							description='Tu hogar en el cielo. Lujo, comodidad y vistas inspiradoras se fusionan en tu nuevo refugio en las alturas.'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<ProyectoCard
							image={RioVidaLogo}
							title='Río Vida'
							description='Naturaleza y comodidad en un hogar perfecto respaldado por años de experiencia en alta calidad. Tu refugio, un nuevo comienzo.'
						/>
					</SwiperSlide>
				</Swiper>
			</Link>
		</section>
	)
}

export default DesarrollosHome
