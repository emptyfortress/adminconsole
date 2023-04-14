import { defineStore } from 'pinia'

export const useWiz = defineStore({
	id: 'wiz',
	state: () => ({
		choose: 'start',
		done: false,
		finish: 0,
		check: [
			{ id: 0, label: 'Базовые объекты', val: false },
			{ id: 1, label: 'Управление документами', val: false },
			{ id: 2, label: 'Web-client', val: false },
			{ id: 3, label: 'Управление процессами', val: false },
			{ id: 4, label: 'КС', val: false },
		],
		check1: [
			{ id: 0, label: 'Базовые объекты', val: true },
			{ id: 1, label: 'Управление документами', val: true },
			{ id: 2, label: 'Web-client', val: true },
			{ id: 3, label: 'Управление процессами', val: false },
			{ id: 4, label: 'КС', val: false },
		],
	}),
	getters: {
		dopModules(state) {
			if (state.check.filter((item) => item.val).length > 0) {
				return true
			}
			return false
		},
	},

	actions: {},
})
