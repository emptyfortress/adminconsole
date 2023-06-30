import { defineStore } from 'pinia'

export const useWebConfig = defineStore({
	id: 'webconfig',
	state: () => ({
		common: {
			extensions: 'C:/Program Files (x86)/Docsvision/WebClient/5.5/Site/Extensions',
			template1: '',
			template2: '',
			tablet: '',
			del: 'trash',
			buttons: 'auto',
			dvwebtool: 'C:/Program Files (x86)/Docsvision/WebClient/5.5/Site/dvwebtool',
			sidebar: 'hide',
			offline: 10,
			close: 300,
			offlineMessage: 'yes',
			size: 50000000,
		},
		cache: {
			layout: false,
			folders: true,
			search: true,
		},
		system: {
			timeout: 0,
			counters: 3000,
			log: 'yes',
			port: 5413,
			autorefresh: 2,
			interval: 60,
			warnup: false,
			form: 'https://forms.yandex.ru/cloud/63a40f6b84227c76f60dc68e/?iframe=1'
		},
		sign: {
			address: 'https://stenddss.cryptopro.ru',
			clientid: 'docsvison',
			iis: '',
			urlcheck: '',
			stamp: '',
			type: 'BES',
			mode: 'cloud',
			redirect: 'http://localhost/DocsvisionWebClient/api/CryptoProDss/AcceptAuthorization',
			token: 'InMemory',
			logo: 'Content/App/Assets/Images/shield.png',
			aggregatTime: 1000,
			autorefresh: 'auto',

		}
	}),
	getters: {},
	actions: {},
})
