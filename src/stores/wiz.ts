import { defineStore } from 'pinia'

export const useWiz = defineStore({
	id: 'wiz',
	state: () => ({
		choose: 'start',
		finish: false,
	}),
	getters: {},

	actions: {},
})
