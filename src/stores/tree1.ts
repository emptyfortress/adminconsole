import { defineStore } from 'pinia'
import { tree } from '@/stores/tree'
// import { getMembers } from '@/utils/utils'

export const useTree = defineStore({
	id: 'tree1',
	state: () => ({
		tree: [] as Config[],
	}),

	getters: {
		configs: state => {
			return state.tree[0].children[0].children
		},
	},

	actions: {
		setTree() {
			this.tree = tree
		},
	},
})
