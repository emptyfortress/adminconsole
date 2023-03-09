import { defineStore } from 'pinia'

export const useBp = defineStore({
	id: 'bp',
	state: () => ({
		bp: {
			path: 'C:\\Program Files\\Docsvision\\Workflow\\5.5\\Templates\\1049\\ProcessTemplate.xml',
			cert: '',
			def: 'ru',
			reg: 'one',
		},
	}),
	getters: {},
	actions: {},
})
