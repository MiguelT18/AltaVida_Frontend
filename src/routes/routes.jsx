import { lazy } from 'react'

export const routes = [
	{
		path: '/',
		element: lazy(async () => await import('../pages/Home')),
	},
	{
		path: '/nosotros',
		element: lazy(async () => await import('../pages/Nosotros')),
	},
	{
		path: '/catalogo',
		element: lazy(async () => await import('../pages/Catalogo')),
	},
	{
		path: '/desarrollos',
		children: [
			{
				path: '/desarrollos',
				element: lazy(async () => await import('../pages/Desarrollos')),
			},
			{
				path: '/desarrollos/altamira',
				element: lazy(
					async () =>
						await import(
							'../components/Desarrollos/Proyectos/AltaMira/AltaMira'
						),
				),
			},
			{
				path: '/desarrollos/bless',
				element: lazy(
					async () =>
						await import('../components/Desarrollos/Proyectos/Bless/Bless'),
				),
			},
			{
				path: '/desarrollos/riovida',
				element: lazy(
					async () =>
						await import('../components/Desarrollos/Proyectos/RioVida/RioVida'),
				),
			},
		],
	},
	{
		path: '/financiamiento',
		element: lazy(async () => await import('../pages/Financiamiento')),
	},
	{
		path: '/testimoniales',
		element: lazy(async () => await import('../pages/Testimoniales')),
	},
	{
		path: '/blog',
		element: lazy(async () => await import('../pages/Blog')),
	},
]
