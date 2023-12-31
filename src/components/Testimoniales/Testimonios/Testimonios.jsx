import {
	Autoplay,
	EffectCoverflow,
	Navigation,
	Pagination,
} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import MainSection from '@components/MainSection'
import { useEffect, useState } from 'react'
import TestimonioVideoSlider1 from '../../../assets/videos/Casa_gemela.mp4'
import TestimonioVideoSlider2 from '../../../assets/videos/Dpto_L21.mp4'
import TestimonioVideoSlider3 from '../../../assets/videos/Omar_Marín.mp4'
import TestimoniosHeader from './TestimoniosHeader'

const Testimonios = () => {
	const VideoSliders = {
		src: [
			TestimonioVideoSlider2,
			TestimonioVideoSlider1,
			TestimonioVideoSlider3,
		],
	}

	const isMdScreen = window.innerWidth >= 900

	const [navigationEnabled, setNavigationEnabled] = useState(isMdScreen)

	useEffect(() => {
		const handleResize = () => {
			setNavigationEnabled(window.innerWidth >= 900)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<MainSection>
			<TestimoniosHeader />

			<article className='w-full'>
				<h1 className='text-center text-md font-bold font-my-raleway pt-6 pb-8 uppercase'>
					Descubre la Alegría de Nuestros Clientes en Alta Vida
				</h1>
				<Swiper
					autoplay={{
						delay: 2500,
						disableOnInteraction: true,
					}}
					effect={'coverflow'}
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={'auto'}
					coverflowEffect={{
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: false,
					}}
					pagination={true}
					navigation={navigationEnabled}
					modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
				>
					{VideoSliders.src.map((video, index) => (
						<SwiperSlide key={index}>
							<video
								className='md:max-w-[70%] xl:max-w-[25%] mx-auto mb-16 cursor-pointer'
								src={video}
								controls
							></video>
						</SwiperSlide>
					))}
				</Swiper>
			</article>
		</MainSection>
	)
}

export default Testimonios
