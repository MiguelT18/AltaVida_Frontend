import Diseño from '@assets/images/home/exito/diseño_card.webp'
import Facilidades from '@assets/images/home/exito/facilidades_card.webp'
import Ubicacion from '@assets/images/home/exito/ubicacion_card.webp'

import HeaderTitle from '@src/components/HeaderTitle'
import InfoCard from '@src/components/InfoCard'

const Exito = () => {
	return (
		<section className='pt-10 pb-8 mx-4'>
			<HeaderTitle
				title='¿Cuál es el secreto de nuestro éxito?'
				description='La filosofía de Alta Vida está basada en la innovación, la planificación y el cuidado de sus clientes.'
				titleClass='text-black'
				lineClass='bg-steel-blue'
				textClass='text-dark-gray'
			/>
			<div className='flex justify-center flex-wrap gap-14 pb-14 pt-8'>
				<InfoCard
					title='Ubicación'
					text='En Alta Vida, seleccionamos ubicaciones estratégicas para tu comodidad y
        calidad de vida, garantizando cercanía a todas tus necesidades.'
					image={Ubicacion}
				/>
				<InfoCard
					title='Facilidades'
					text='Alta Vida ofrece facilidades para el descanso y la diversión en casa, incluyendo áreas verdes, alberca, juegos y salón de usos múltiples.'
					image={Facilidades}
				/>
				<InfoCard
					title='Diseño'
					text='Nuestras casas se caracterizan por un moderno diseño que optimiza el espacio y se integra perfectamente con el entorno, manteniendo su atractivo con el tiempo.'
					image={Diseño}
				/>
			</div>
		</section>
	)
}

export default Exito
