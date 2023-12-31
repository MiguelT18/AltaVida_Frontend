import 'animate.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import BrandLogo from '../assets/images/logos/brand/brandLogo_white.webp'

import UseWindowWidth from '@src/hooks/UseWindowWidth'
import { AiOutlineFullscreenExit } from 'react-icons/ai'
import { IoMenu } from 'react-icons/io5'
import ContactButtons from './ContactButtons'

const Navbar = () => {
	const navItems = [
		{ path: '/desarrollos', text: 'Desarrollos' },
		{ path: '/catalogo', text: 'Catálogo' },
		{ path: '/financiamiento', text: 'Financiamiento' },
		{ path: '/testimoniales', text: 'Testimoniales' },
		{ path: '/nosotros', text: 'Nosotros' },
		{ path: '/blog', text: 'Blog' },
	]

	const [menuOpen, setMenuOpen] = useState(false)
	const windowWidth = UseWindowWidth()

	const toggleMenu = () => {
		setMenuOpen(!menuOpen)
	}

	const closeMenu = () => {
		setMenuOpen(false)
	}

	const handleOuterClick = (e) => {
		if (e.target === e.currentTarget) {
			closeMenu()
		}
	}

	return (
		<>
			<nav className='text-white w-full py-5 px-[10%] fixed flex min-[980px]:flex-col min-[900px]:gap-3 items-center justify-between backdrop-blur-md bg-black bg-opacity-50 border-b-2 border-white shadow-2xl z-40'>
				<Link to={'/'}>
					<img
						className='w-navBrandLogo h-full cursor-pointer'
						src={BrandLogo}
						alt='Brand Logo'
					/>
				</Link>
				<ContactButtons />

				<div>
					{windowWidth <= 979 ? (
						<div>
							<IoMenu
								onClick={toggleMenu}
								className='hover:text-orange transition-all cursor-pointer relative'
								size={'2.6rem'}
							/>
							{menuOpen && (
								<ul
									onClick={handleOuterClick}
									className='animate__animated animate__bounceIn absolute fond-bold text-md text-center bg-black border-2 border-dark-gray grid gap-6 place-content-center backdrop-blur-sm bg-opacity-90 w-full h-screen right-0 top-0'
								>
									<AiOutlineFullscreenExit
										onClick={closeMenu}
										className='hover:text-orange transition-all absolute right-10 top-10 cursor-pointer'
										size={'3em'}
									/>
									{navItems.map((item, index) => (
										<li key={index}>
											<Link
												className='hover:text-orange transition-all w-full h-full font-my-raleway text-lg px-4 py-2 border-l-2 border-orange hover:border-white'
												to={item.path}
											>
												{item.text}
											</Link>
										</li>
									))}
								</ul>
							)}
						</div>
					) : (
						<ul className='flex gap-6'>
							{navItems.map((item, index) => (
								<li key={index}>
									<Link
										className='hover:bg-orange text-sm px-3 py-1 rounded-md transition-all cursor-pointer'
										to={item.path}
									>
										{item.text}
									</Link>
								</li>
							))}
						</ul>
					)}
				</div>
			</nav>
		</>
	)
}

export default Navbar
