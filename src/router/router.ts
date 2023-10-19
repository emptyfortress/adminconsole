import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
// import External from '@/components//setupcomponent/External.vue'
// import EditDatabase from '@/components/setupcomponent/EditDatabase.vue'
// import CreateBd from '@/components/wizard/CreateBd.vue'

declare module 'vue-router' {
	interface Bread {
		label: string
		to: string
	}
	interface RouteMeta {
		title: string
		bread?: Bread[]
	}
}

export const router = createRouter({
	history: createWebHashHistory(),

	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
			meta: { title: 'Admin console', bread: [{ label: 'Dashboard', to: '/' }] },
		},
		// {
		// 	path: '/test',
		// 	name: 'create',
		// 	component: CreateBd,
		// 	meta: { title: 'Admin console', bread: [{ label: 'Dashboard', to: '/' }] },
		// },
		{
			path: '/setup1',
			component: () => import('@/pages/Setup1.vue'),
			meta: {
				title: 'Настройки',
				bread: [
					{ label: 'Dashboard', to: '/' },
					{ label: 'Настройки', to: '/setup1' },
				],
			},
			children: [
				{
					path: '',
					component: () => import('@/components/SetupRoot1.vue'),
					meta: {
						title: 'Настройки',
						bread: [
							{ label: 'Dashboard', to: '/' },
							{ label: 'Настройки', to: '/setup1' },
						],
					},
				},
				{
					path: 'configuration1',
					name: 'configuration1',
					component: () => import('@/components/Configuration1.vue'),
					meta: {
						title: 'Настройки',
						nav: true,
						bread: [
							{ label: 'Dashboard', to: '/' },
							{ label: 'Настройки', to: '/setup1' },
							{ label: 'Конфигурации', to: '/setup1/configuration1' },
						],
					},
				},
				{
					path: 'bprocess',
					name: 'bprocess',
					component: () => import('@/components/Bprocess.vue'),
					meta: {
						title: 'Настройки',
						nav: true,
						bread: [
							{ label: 'Dashboard', to: '/' },
							{ label: 'Настройки', to: '/setup' },
							{ label: 'Сервер DV', to: '/setup/dvserver' },
						],
					},
				},
				{
					path: 'dvserver1',
					name: 'dvserver1',
					component: () => import('@/components/Dvserver1.vue'),
					meta: {
						title: 'Настройки',
						nav: true,
						bread: [
							{ label: 'Dashboard', to: '/' },
							{ label: 'Настройки', to: '/setup' },
							{ label: 'Сервер DV', to: '/setup/dvserver' },
						],
					},
				},
				{
					path: 'connection',
					name: 'connecton',
					component: () => import('@/components/Connection.vue'),
					meta: {
						title: 'Настройки',
						nav: true,
						bread: [
							{ label: 'Dashboard', to: '/' },
							{ label: 'Настройки', to: '/setup' },
							{ label: 'Соединения', to: '/setup/connection' },
						],
					},
				},
				{
					path: 'email',
					name: 'email',
					component: () => import('@/components/Email.vue'),
					meta: {
						title: 'Настройки',
						nav: true,
						bread: [
							{ label: 'Dashboard', to: '/' },
							{ label: 'Настройки', to: '/setup' },
							{ label: 'Email server', to: '/setup/email' },
						],
					},
				},
				{
					path: 'worker',
					name: 'worker',
					component: () => import('@/components/Worker.vue'),
					meta: {
						title: 'Настройки',
						nav: true,
						bread: [
							{ label: 'Dashboard', to: '/' },
							{ label: 'Настройки', to: '/setup' },
							{ label: 'Worker service', to: '/setup/worker' },
						],
					},
				},
				{
					path: 'webclient',
					name: 'webclient',
					component: () => import('@/components/Webclient.vue'),
					meta: {
						title: 'Настройки',
						nav: true,
						bread: [
							{ label: 'Dashboard', to: '/' },
							{ label: 'Настройки', to: '/setup' },
							{ label: 'Worker service', to: '/setup/worker' },
						],
					},
				},
				{
					path: '/ext',
					name: 'external',
					component: () => import('@/components/setupcomponent/External.vue'),
					// component: External,
					meta: {
						title: 'Вкладка',
						nav: false,
					},
				},
				{
					path: '/archive',
					name: 'archive',
					component: () => import('@/components/setupcomponent/Archive.vue'),
					meta: {
						title: 'Вкладка',
						nav: false,
					},
				},
				// {
				// 	path: '/edit',
				// 	name: 'edit',
				// 	component: EditDatabase,
				// 	meta: {
				// 		title: 'Вкладка',
				// 		nav: false,
				// 	},
				// },

			]
		},
		{
			path: '/setup',
			component: () => import('@/pages/Setup.vue'),
			meta: {
				title: 'Настройки',
				bread: [
					{ label: 'Dashboard', to: '/' },
					{ label: 'Настройки', to: '/setup' },
				],
			},
			children: [
				{
					path: '',
					component: () => import('@/components/SetupRoot.vue'),
					meta: {
						title: 'Настройки',
						bread: [
							{ label: 'Dashboard', to: '/' },
							{ label: 'Настройки', to: '/setup' },
						],
					},
				},
				{
					path: 'configuration',
					name: 'configuration',
					component: () => import('@/components/Configuration.vue'),
					meta: {
						title: 'Настройки',
						nav: true,
						bread: [
							{ label: 'Dashboard', to: '/' },
							{ label: 'Настройки', to: '/setup' },
							{ label: 'Конфигурации', to: '/setup/configuration' },
						],
					},
				},
				{
					path: 'bprocess',
					name: 'bprocess',
					component: () => import('@/components/Bprocess.vue'),
					meta: {
						title: 'Настройки',
						nav: true,
						bread: [
							{ label: 'Dashboard', to: '/' },
							{ label: 'Настройки', to: '/setup' },
							{ label: 'Сервер DV', to: '/setup/dvserver' },
						],
					},
				},
				{
					path: 'dvserver1',
					name: 'dvserver1',
					component: () => import('@/components/Dvserver1.vue'),
					meta: {
						title: 'Настройки',
						nav: true,
						bread: [
							{ label: 'Dashboard', to: '/' },
							{ label: 'Настройки', to: '/setup' },
							{ label: 'Сервер DV', to: '/setup/dvserver' },
						],
					},
				},
				{
					path: 'connection',
					name: 'connecton',
					component: () => import('@/components/Connection.vue'),
					meta: {
						title: 'Настройки',
						nav: true,
						bread: [
							{ label: 'Dashboard', to: '/' },
							{ label: 'Настройки', to: '/setup' },
							{ label: 'Соединения', to: '/setup/connection' },
						],
					},
				},
				{
					path: 'email',
					name: 'email',
					component: () => import('@/components/Email.vue'),
					meta: {
						title: 'Настройки',
						nav: true,
						bread: [
							{ label: 'Dashboard', to: '/' },
							{ label: 'Настройки', to: '/setup' },
							{ label: 'Email server', to: '/setup/email' },
						],
					},
				},
				{
					path: 'worker',
					name: 'worker',
					component: () => import('@/components/Worker.vue'),
					meta: {
						title: 'Настройки',
						nav: true,
						bread: [
							{ label: 'Dashboard', to: '/' },
							{ label: 'Настройки', to: '/setup' },
							{ label: 'Worker service', to: '/setup/worker' },
						],
					},
				},
				{
					path: 'webclient',
					name: 'webclient',
					component: () => import('@/components/Webclient.vue'),
					meta: {
						title: 'Настройки',
						nav: true,
						bread: [
							{ label: 'Dashboard', to: '/' },
							{ label: 'Настройки', to: '/setup' },
							{ label: 'Worker service', to: '/setup/worker' },
						],
					},
				},
				{
					path: '/ext',
					name: 'external',
					component: () => import('@/components/setupcomponent/External.vue'),
					// component: External,
					meta: {
						title: 'Вкладка',
						nav: false,
					},
				},
				{
					path: '/archive',
					name: 'archive',
					component: () => import('@/components/setupcomponent/Archive.vue'),
					meta: {
						title: 'Вкладка',
						nav: false,
					},
				},
				// {
				// 	path: '/edit',
				// 	name: 'edit',
				// 	component: EditDatabase,
				// 	meta: {
				// 		title: 'Вкладка',
				// 		nav: false,
				// 	},
				// },
			],
		},
		{
			path: '/logs',
			name: 'logs',
			component: () => import('@/pages/Logs.vue'),
		},
	],
})

const DEFAULT_TITLE = 'Консоль управления DV'
router.beforeEach((to) => {
	document.title = to.meta.title || DEFAULT_TITLE
})
