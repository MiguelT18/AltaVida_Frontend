import MainSection from '@components/MainSection'
import ModeloDalia from '../../assets/images/modelos/10. DALIA.webp'
import ModeloElite from '../../assets/images/modelos/11. EELITE.webp'
import ModeloClasico from '../../assets/images/modelos/2. CLASICO.webp'
import ModeloCanela from '../../assets/images/modelos/3. CANELA.webp'
import ModeloCountry from '../../assets/images/modelos/4. COUNTRY.webp'
import ModeloPetra from '../../assets/images/modelos/5. PETRA.webp'
import ModeloMinimalista from '../../assets/images/modelos/6. MINIMALISTA.webp'
import ModeloMediterraneo from '../../assets/images/modelos/7. MEDITERRANEO.webp'
import ModeloCampestre from '../../assets/images/modelos/8. CAMPESTRE.webp'
import ModeloBrick from '../../assets/images/modelos/9. BRICK.webp'

const Modelos = () => {
	const Modelos = {
		names: [
			'Modelo Clásico',
			'Modelo Canela',
			'Modelo Country',
			'Modelo Petra',
			'Modelo Minimalista',
			'Modelo Mediterraneo',
			'Modelo Campestre',
			'Modelo Brick',
			'Modelo Dalia',
			'Modelo Elite',
		],
		src: [
			ModeloClasico,
			ModeloCanela,
			ModeloCountry,
			ModeloPetra,
			ModeloMinimalista,
			ModeloMediterraneo,
			ModeloCampestre,
			ModeloBrick,
			ModeloDalia,
			ModeloElite,
		],
	}

	return (
		<MainSection>
			<h1 className='text-center text-lg font-bold font-my-raleway pb-6 uppercase'>
				Modelos de Construcción
			</h1>

			<div className='flex flex-wrap justify-center gap-14'>
				{Modelos.src.map((modelo, index) => (
					<div
						className='w-fit border-orange text-dark-gray backdrop-blur-3xl bg-slate-100 bg-opacity-60 max-w-[300px] min-h-[100px] p-5 rounded-xl shadow-md shadow-gray-200'
						key={index}
					>
						<h1 className='text-sm text-center pb-2 uppercase text-dark-gray'>
							{Modelos.names[index]}
						</h1>
						<img
							className='w-full max-w-[300px] mx-auto'
							src={modelo}
							alt={`${Modelos.names[index]}`}
						/>
					</div>
				))}
			</div>
		</MainSection>
	)
}

export default Modelos
