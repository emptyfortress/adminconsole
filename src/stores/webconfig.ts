import { defineStore } from 'pinia'

export const useWebConfig = defineStore({
	id: 'webconfig',
	state: () => ({
		common: {
			extensions: 'C:/Program Files (x86)/Docsvision/WebClient/5.5/Site/Extensions',
			template1: '',
			template2: '',
			tablet: '',
			del: 'trash',
			buttons: 'auto',

		}
	}),
	getters: {},
	actions: {},
})
