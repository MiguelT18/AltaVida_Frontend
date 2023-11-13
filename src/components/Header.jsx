import PropTypes from 'prop-types'
import { AiOutlineHome } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Header = ({ title, description, image }) => {
	return (
		<header
			className={`${
				image ? '' : 'bg-navy-blue'
			} bg-cover bg-no-repeat bg-center bg-fixed text-white flex flex-col items-center justify-end w-full h-[45vh] relative`}
		>
			{image ? (
				<img
					className='w-full h-full object-cover absolute -z-50'
					src={image}
					alt='Header'
				/>
			) : null}
			<div className='flex flex-col justify-center items-center pb-20'>
				<Link
					className='flex justify-center items-center gap-2 bg-sky-blue hover:bg-orange transition-all px-3 py-1 my-4 rounded-md text-sm'
					to='/'
				>
					<AiOutlineHome />
					Inicio
				</Link>
				<h1 className='text-lg text-center font-my-raleway font-bold uppercase'>
					{title}
				</h1>
				<p className='text-sm text-center'>{description}</p>
			</div>
		</header>
	)
}

Header.defaultProps = {
	title: 'Untitled',
	description: 'Default description',
}

Header.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.any,
}

export default Header
