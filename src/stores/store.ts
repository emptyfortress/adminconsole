import { uid } from 'quasar'
import { defineStore } from 'pinia'

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
	},
})
