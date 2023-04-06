import { defineStore } from 'pinia'

export const useForm = defineStore({
	id: 'form',
	state: () => ({
		step1: {
			type: 'SQL Server',
			options: ['SQL Server', 'PostreSQL'],
			options1: ['SQL Server', 'Windows'],
			name: '',
			port: '',
			check: 'SQL Server',
			login: '',
			pass: '',
			success: false,
		},
	}),
	getters: {},
	actions: {},
})
