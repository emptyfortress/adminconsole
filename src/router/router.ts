import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'

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
					path: 'dvserver',
					name: 'dvserver',
					component: () => import('@/components/Dvserver.vue'),
					meta: {
						title: 'Настройки',
						bread: [
							{ label: 'Dashboard', to: '/' },
							{ label: 'Настройки', to: '/setup' },
							{ label: 'DV server', to: '/setup/dvserver' },
						],
					},
				},
				{
					path: 'email',
					name: 'email',
					component: () => import('@/components/Email.vue'),
					meta: {
						title: 'Настройки',
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
						bread: [
							{ label: 'Dashboard', to: '/' },
							{ label: 'Настройки', to: '/setup' },
							{ label: 'Worker service', to: '/setup/worker' },
						],
					},
				},
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
