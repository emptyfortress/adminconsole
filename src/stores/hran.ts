import { defineStore } from 'pinia'

const date = new Date()

export const useHran = defineStore({
	id: 'hran',
	state: () => ({
		groups: [
			{
				id: 0,
				name: 'Common',
				expanded: true,
				switch: false,
				rule: 'Случайный порядок',
				list: [],
				listRule: [],
			},
		],
		rules: [
			{
				id: 1,
				name: 'Правило 1',
				type: 'Все',
			},
			{
				id: 2,
				name: 'Большие файлы',
				type: 'Размер больше, чем',
				size1: 300,
			},
			{
				id: 3,
				name: 'Маленькие файлы',
				type: 'Размер меньше, чем',
				size2: 100,
			},
			{
				id: 4,
				name: 'Справочники',
				type: 'Файл справочника',
			},
		] as Rule[],
	}),
	getters: {},
	actions: {
		unique() {
			this.groups.forEach((item) => {
				item.list = [...new Map(item.list.map((item) => [item['id'], item])).values()]
			})
		},
		addGroup(e: string, c: string) {
			const temp = {
				id: +date,
				name: e,
				rule: c,
				expanded: true,
				switch: false,
				list: [],
				listRule: [],
			}
			this.groups.push(temp)
		},
		editGroup(ind: number, name: string, rule: string) {
			this.groups[ind].name = name
			this.groups[ind].rule = rule
		},
		removeGroup(ind: number) {
			this.groups.splice(ind, 1)
		},
		removeRule(ind: number) {
			this.rules.splice(ind, 1)
		},
		addRule(tmp: Rule) {
			this.rules.push(tmp)
		},
		removeRuleFromGroup(ind: number, index: number) {
			const temp = this.groups[ind].listRule[index]
			this.groups[ind].listRule.splice(index, 1)
			this.rules.push(temp)
		},
	},
})
