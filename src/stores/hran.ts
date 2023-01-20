import { defineStore } from 'pinia'

const date = new Date()

export const useHran = defineStore({
	id: 'hran',
	state: () => ({
		groups: [
			{
				id: 0, name: 'Common', expanded: true, list: [
					{ id: 1, name: 'Storage 1', type: 'Хранилища в базе', state: 'Online', sections: 'Основной, архивный', size: 100 }
				], listRule: []
			}
		],
	}),
	getters: {},
	actions: {
		unique() {
			this.groups.forEach(item => {
				item.list = [...new Map(item.list.map((item) => [item["id"], item])).values()]

			})
		},
		addGroup(e: string) {
			const temp = {
				id: +date,
				name: e,
				expanded: true,
				list: [],
				listRule: []
			}
			this.groups.push(temp)
		},
		removeGroup(ind: number) {
			this.groups.splice(ind, 1)
		}

	},
})
