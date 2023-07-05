import { defineStore } from 'pinia'

export const useWebConfig = defineStore({
	id: 'webconfig',
	state: () => ({
		common: {
			mainFolder: 'C:/Program Files (x86)/Docsvision/WebClient/5.5/',
			virtual: 'http://DVSN-TV6VF0OS3H.digdes.com/',
			virt1: 'DocsvisionWebClient',
			iis: 'Default Web Site',
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
		},
		grid: {
			autorefresh: 'auto',
			timeout: 1000
		},
		server: {
			address: '',
			psevdo: '',
			adminPath: ''
		},
		localization: [
			{
				id: 0,
				psevdo: 'AGSupport',
				def: true,
				lang: [
					{ id: 0, active: true, name: 'Russian (Russia)', def: 'ru' },
					{ id: 1, active: true, name: 'English (United States)', def: 'en' },
					{ id: 2, active: true, name: 'Kazakh (Kazahstan)', def: 'kz' },
					{ id: 3, active: true, name: 'Latvian (Latvia)', def: 'lv' },
				],
				defLang: 'ru'
			},
			{
				id: 1,
				psevdo: 'DvTest',
				def: false,
				lang: [
					{ id: 0, active: true, name: 'Russian (Russia)', def: 'ru' },
					{ id: 1, active: false, name: 'English (United States)', def: 'en' },
					{ id: 2, active: true, name: 'Kazakh (Kazahstan)', def: 'kz' },
					{ id: 3, active: false, name: 'Latvian (Latvia)', def: 'lv' },
				],
				defLang: 'kz'
			},
			{
				id: 2,
				psevdo: 'DvShowCase',
				def: false,
				lang: [
					{ id: 0, active: true, name: 'Russian (Russia)', def: 'ru' },
					{ id: 1, active: false, name: 'English (United States)', def: 'en' },
					{ id: 2, active: false, name: 'Kazakh (Kazahstan)', def: 'kz' },
					{ id: 3, active: true, name: 'Latvian (Latvia)', def: 'lv' },
				],
				defLang: 'lv'
			},
		],
		cards: [
			{
				id: 0, psevdo: 'AGSupport', types: [
					{ id: 0, name: 'Задание', vid: 'На исполнение', key: 7, par: [0, 1, 5] },
					{ id: 1, name: 'Документ', vid: 'Исходящий', key: 26, par: [0, 2] },
					{ id: 2, name: 'Группа заданий', vid: 'Группа заданий УД', key: 44, par: [0, 3] },
					{ id: 3, name: 'Согласование', vid: 'Согласование КС', key: 15, par: [0, 1, 6, 12] },
				]
			},
			{
				id: 1, psevdo: 'DvTest', types: [
					{ id: 0, name: 'Задание', vid: 'На согласование', key: 8, par: [0, 1, 5] },
					{ id: 1, name: 'Документ', vid: 'Входящий пакет', key: 35, par: [0, 2, 25] },
					{ id: 2, name: 'Группа заданий', vid: 'Поручение', key: 43, par: [0, 3] },
					{ id: 3, name: 'Согласование', vid: 'Согласование КС', key: 15, par: [0, 1, 6, 12] },
				]
			},
			{
				id: 2, psevdo: 'DvShowCase', types: [
					{ id: 0, name: 'Задание', vid: 'На исполнение', key: 7, par: [0, 1, 5] },
					{ id: 1, name: 'Документ', vid: 'Пакет отгрузки', key: 40, par: [0, 2, 26] },
					{ id: 2, name: 'Группа заданий', vid: 'Группа заданий УД', key: 44, par: [0, 3] },
					{ id: 3, name: 'Согласование', vid: 'Согласование КС', key: 15, par: [0, 1, 6, 12] },
				]
			},
		],
		funcs: [
			{
				id: 0, psevdo: 'AGSupport', fun: [
					{ id: 0, name: 'Контрол комментариев', used: true, vid: [], },
					{ id: 1, name: 'Общие справочники', used: true, vid: [], },
				]
			},
			{
				id: 1, psevdo: 'DvTest', fun: [
					{ id: 0, name: 'Контрол комментариев', used: true, vid: [], },
					{ id: 1, name: 'Общие справочники', used: true, vid: [], },
				]
			},
			{
				id: 2, psevdo: 'DvShowCase', fun: [
					{ id: 0, name: 'Контрол комментариев', used: true, vid: [], },
					{ id: 1, name: 'Общие справочники', used: true, vid: [], },
				]
			},
		]
	}),
	getters: {},
	actions: {},
})
