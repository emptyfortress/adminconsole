import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'

declare module 'vue-router' {
	interface RouteMeta {
		title: string
		bread: string[]
	}
}

export const router = createRouter({
	history: createWebHashHistory(),

	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
			meta: { title: 'Admin console', bread: ['Web-client'] },
		},
		{
			path: '/setup',
			name: 'setup',
			component: () => import('@/pages/Setup.vue'),
			meta: { title: 'Настройки', bread: ['Web-client'] },
		},
		{
			path: '/logs',
			name: 'logs',
			component: () => import('@/pages/Logs.vue'),
			meta: { title: 'Логи', bread: ['Web-client'] },
		},
	],
})

const DEFAULT_TITLE = 'DV Web-Client'
router.beforeEach((to) => {
	document.title = to.meta.title || DEFAULT_TITLE
})
