import { defineStore } from 'pinia'

export const useHran = defineStore({
	id: 'hran',
	state: () => ({
		list2: [
			{ id: 1, name: 'Storage 1', type: 'Хранилища в базе', state: 'Online', sections: 'Основной, архивный', size: 100 }
		],
	}),
	getters: {},
	actions: {
		unique() {
			this.list2 = [...new Map(this.list2.map((item) => [item["id"], item])).values()]
		}
	},
})
