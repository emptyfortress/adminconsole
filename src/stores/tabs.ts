import { defineStore } from 'pinia'

export const useTabs = defineStore({
	id: 'tabs',
	state: () => ({
		tabs: [
			{ name: 'prop', label: 'Свойства', modified: false },
			{ name: 'control', label: 'Управление', modified: false },
			{ name: 'outer', label: 'Внешние хранилища', modified: false },
			{ name: 'arch', label: 'Архивирование', modified: false },
			{ name: 'meta', label: 'Метаданные', modified: false },
			{ name: 'journal', label: 'Журнал', modified: false },
			{ name: 'cache', label: 'Кэширование', modified: false },
		],
	}),
	getters: {},
	actions: {},
})
