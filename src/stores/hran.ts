import { defineStore } from 'pinia'

export const useHran = defineStore({
	id: 'hran',
	state: () => ({
		list2: [
			{ id: 1, name: 'Storage 1', type: 'Хранилища в базе', state: 'Online', sections: 'Основной, архивный', size: 100 },
			// { id: 2, name: 'Storage 2', type: 'Хранилища на диске', state: 'Online', sections: 'Временный', size: 130 },
			// { id: 3, name: 'Storage 3', type: 'Хранилища на диске', state: 'Auto', sections: 'Временный', size: 10 },

		],
	}),
	getters: {},
	actions: {},
})
