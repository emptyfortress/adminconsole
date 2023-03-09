import { defineStore } from 'pinia'

export const useBp = defineStore({
	id: 'bp',
	state: () => ({
		nastr: {
			path: 'C:\\Program Files\\Docsvision\\Workflow\\5.5\\Templates\\1049\\ProcessTemplate.xml',
			cert: '',
			def: 'ru',
			reg: 'one',
		},
		bp: {
			name: 'Docsvision 5.5 Workflow Server',
			typ: 'Автоматический',
			check: false,
			delay: 0,
			iso: false,
			jour: '',
			port: 8090,
			level: 'Предупреждения',
			user: '',
			pass: '',
		},
	}),
	getters: {},
	actions: {},
})
