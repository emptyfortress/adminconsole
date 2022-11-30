import { uid } from 'quasar'
import { defineStore } from 'pinia'
import { useServer } from '@/stores/server'

interface Connection {
	name: string
}

export const useStore = defineStore({
	id: 'store',
	state: () => ({
		connections: [{ name: 'SOL2016' }],
		config: [
			{ id: '0', name: 'SOL2016' },
			{ id: '1', name: 'SOL2017' },
		],
		params: [
			{ id: 0, key: 'DV_Docsvision_Platform_5.5_Server Databases Docsvision DB', value: '' },
			{ id: 1, key: 'DV_Docsvision__Platform_5.5_Server_DefaultBaseName', value: '' },
			{ id: 2, key: 'DV_Groups_Docs Vision Administrators 0', value: '' },
			{ id: 3, key: 'DV_Groups_Docs Vision Administrators 1', value: '' },
			{ id: 4, key: 'DV_Groups_DocsVision Security Administrators_0', value: '' },
			{ id: 5, key: 'DV_Security_Jwt_Securitykey', value: '' },
			{ id: 6, key: 'DV_Security_Jwt_Issuer', value: '' },
			{ id: 7, key: 'DV_Domains_o', value: '' },
			{ id: 8, key: 'DV_Ldap_Credential_UserName', value: '' },
			{ id: 9, key: 'DV_Ldap_Credential_Password', value: '' },
			{ id: 10, key: 'DV_APIKEY', value: '' },
			{ id: 11, key: 'DV_Logging_LogLevel_Default', value: '' },
			{ id: 12, key: 'KRBS_KTNAME', value: '' },
		],
		panels: [
			{ id: 0, title: 'Лицензия', change: false },
			{ id: 1, title: 'Сервер DV', change: false },
			{ id: 2, title: 'Подключенные базы данных', change: false },
			{ id: 3, title: 'Настройка клиентской части', change: false },
			{ id: 4, title: 'Управление доступом', change: false },
			{ id: 5, title: 'Общие настройки серверной консоли', change: false },
			{ id: 6, title: 'Управление бизнес-процессами', change: false },
			{ id: 7, title: 'Настройки сервиса WorkFlow', change: false },
			{ id: 8, title: 'Почтовые настройки сервиса Workflow', change: false },
		],
		server: useServer(),
	}),
	getters: {},
	actions: {
		deleteConnection(e: Connection) {
			let index = this.connections.indexOf((item: Connection) => item === e)
			this.connections.splice(index, 1)
		},
		addConnection(e: string) {
			this.connections.push({ name: e })
		},
		addConfig(e: string) {
			let temp = { id: uid(), name: e }
			this.config.push(temp)
		},
		removeConfig(e: any) {
			let index = this.config.indexOf(e)
			this.config.splice(index, 1)
		},
		changeDefaults(e: number) {
			this.panels[e].change = true
		},
	},
})
