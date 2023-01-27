import { defineStore } from 'pinia'
import { useTabs } from '@/stores/tabs'

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
			},
		],
		rules: [
			{
				id: 1,
				name: 'Правило 1',
				type: 'Все',
				expanded: true,
				list: [],
			},
			{
				id: 2,
				name: 'Большие файлы',
				type: 'Размер больше, чем',
				size1: 300,
				expanded: false,
				list: [],
			},
			{
				id: 3,
				name: 'Маленькие файлы',
				type: 'Размер меньше, чем',
				size2: 100,
				expanded: false,
				list: [],
			},
			{
				id: 4,
				name: 'Справочники',
				type: 'Файл справочника',
				expanded: false,
				list: [],
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
			const tabs = useTabs()
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
			tabs.setTabMod(2)
		},
		editGroup(ind: number, name: string, rule: string) {
			const tabs = useTabs()
			this.groups[ind].name = name
			this.groups[ind].rule = rule
			tabs.setTabMod(2)
		},
		removeGroup(ind: number) {
			const tabs = useTabs()
			this.groups.splice(ind, 1)
			tabs.setTabMod(2)
		},
		removeRule(ind: number) {
			const tabs = useTabs()
			this.rules.splice(ind, 1)
			tabs.setTabMod(2)
		},
		addRule(tmp: Rule) {
			const tabs = useTabs()
			this.rules.push(tmp)
			tabs.setTabMod(2)
		},
		removeRuleFromGroup(ind: number, index: number) {
			const tabs = useTabs()
			const temp = this.groups[ind].listRule[index]
			this.groups[ind].listRule.splice(index, 1)
			this.rules.push(temp)
			tabs.setTabMod(2)
		},
	},
})
