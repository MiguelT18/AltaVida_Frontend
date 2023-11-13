import MainSection from '@components/MainSection'
import BancoBCP from '../../../assets/images/financiamiento/banco_bcp.png'
import BancoBisa from '../../../assets/images/financiamiento/banco_bisa.png'
import BancoBNB from '../../../assets/images/financiamiento/banco_bnb.jpg'
import BancoEconomico from '../../../assets/images/financiamiento/banco_economico.jpg'
import BancoEFV from '../../../assets/images/financiamiento/banco_efv.png'
import BancoGanadero from '../../../assets/images/financiamiento/banco_ganadero.png'
import BancoMercantil from '../../../assets/images/financiamiento/banco_mercantil.png'

const Creditos = () => {
	const Creditos = {
		names: [
			'Banco Mercantil',
			'Banco de Crédito (BCP)',
			'Banco Bisa',
			'Banco BNB',
			'Banco Economico',
			'La primera EFV',
			'Banco Ganadero',
		],
		src: [
			BancoMercantil,
			BancoBCP,
			BancoBisa,
			BancoBNB,
			BancoEconomico,
			BancoEFV,
			BancoGanadero,
		],
	}

	return (
		<MainSection>
			<p className='text-sm text-dark-gray mb-8'>
				Porque AltaVida piensa en tí, te ofrecemos increíbles facilidades al
				momento de comprar tu casa o departamento, queremos que formes parte de
				nuestra gran familia.
				<br />
				<br />
				Por eso, te asesoramos para que elijas tu crédito de vivienda social,
				con la entidad bancaria que mejor se adapte a tus necesidades.
				<br />
				<br />
				Estás a tiempo para escoger tu hogar con nosotros.
			</p>

			<div className='max-w-[900px] mx-auto flex flex-wrap items-stretch gap-10 justify-center'>
				{Creditos.names.map((name, index) => (
					<div
						className='border-orange text-dark-gray backdrop-blur-3xl bg-slate-100 bg-opacity-60 max-w-[200px] min-h-[100px] p-5 rounded-xl shadow-md shadow-gray-200'
						key={index}
					>
						<img
							className={`${
								index === 5 ? 'bg-[#002669] py-6 px-2' : ''
							} rounded-md`}
							src={Creditos.src[index]}
							alt='Credit info'
						/>
						<h1 className='text-center text-sm font-my-raleway pt-4'>{name}</h1>
					</div>
				))}
			</div>
		</MainSection>
	)
}

export default Creditos
