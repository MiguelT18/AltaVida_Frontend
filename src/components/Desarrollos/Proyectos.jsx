// import AltaMiraCardImg from "@assets/images/desarrollos/AltaMiraCard.webp";
// import BlessCardImg from "@assets/images/desarrollos/BlessCard.webp";
// import RioVidaCardImg from "@assets/images/desarrollos/RioVidaCard.webp";
import BlessRender from '@assets/images/desarrollos/BlessRenderCard.webp'

import { Link } from 'react-router-dom'

import MainSection from '@components/MainSection'
import 'animate.css'

const Proyectos = () => {
	return (
		<MainSection>
			<div>
				<p className='text-sm text-center px-5'>
					Descubre la excelencia de AltaVida en proyectos que abarcan desde lujo
					con <strong>Bless</strong> hasta versatilidad con
					<strong> Río Vida</strong> y confiabilidad con
					<strong> Altamira</strong>. Nuestra experiencia de nueve años, más de
					350 casas construidas y servicios de intermediación financiera nos
					distinguen. Explora nuestras opciones con un compromiso inquebrantable
					con la excelencia, versatilidad e integridad.
				</p>
			</div>

			<div className='w-full flex flex-wrap justify-center items-center mx-auto gap-4 py-4 px-2'>
				<Link className='relative w-full h-full' to={'/desarrollos/bless'}>
					<figure className='before:block before:absolute before:w-[100%] before:h-[100%] before:border-2 before:border-black'>
						<img src={BlessRender} alt='Bless Render' />
					</figure>
				</Link>
			</div>
		</MainSection>
	)
}

export default Proyectos
