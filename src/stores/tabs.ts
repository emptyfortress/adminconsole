import { defineStore } from 'pinia'

export const useTabs = defineStore({
	id: 'tabs',
	state: () => ({
		tabs: [
			{ id: 0, name: 'prop', label: 'Свойства', modified: false },
			{ id: 1, name: 'control', label: 'Управление', modified: false },
			{ id: 2, name: 'outer', label: 'Внешние хранилища', modified: false },
			{ id: 3, name: 'arch', label: 'Архивирование', modified: false },
			{ id: 4, name: 'meta', label: 'Метаданные', modified: false },
			{ id: 5, name: 'cache', label: 'Кэширование', modified: false },
		],
	}),
	getters: {},
	actions: {
		setTabMod(n: number) {
			this.tabs[n].modified = true
		},
	},
})
