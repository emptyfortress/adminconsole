import { defineStore } from 'pinia'

export const useHran = defineStore({
	id: 'hran',
	state: () => ({
		groups: [
			{
				id: 0, name: 'Common', expanded: true, list: [
					{ id: 1, name: 'Storage 1', type: 'Хранилища в базе', state: 'Online', sections: 'Основной, архивный', size: 100 }
				]
			}
		],
	}),
	getters: {},
	actions: {
		unique() {
			this.groups.forEach(item => {
				item.list = [...new Map(item.list.map((item) => [item["id"], item])).values()]

			})
		}
	},
})
