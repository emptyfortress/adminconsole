const tree = [
	{
		id: 'root',
		label: 'Модули',
		icon: 'mdi-folder-outline',
		children: [
			{
				id: 'appserver',
				label: 'Сервер приложений',
				children: [
					{ id: 'config', label: 'Конфигурации', children: [] },
					{
						id: 'serv1',
						label: '102pc0102',
						icon: 'mdi-penguin',
						children: [],
					},
					{
						id: 'serv2',
						label: 'DVM-new',
						icon: 'mdi-penguin',
						children: [],
					},
				],
			},
			{ id: 'wc', label: 'Web-клиент', children: [] },
			{
				id: 'worker',
				label: 'Служба фоновых операций',
				children: [],
			},
			{
				id: 'bp',
				label: 'Сервис бизнес-процессов',
				children: [],
			},
			{
				id: 'search',
				label: 'Полнотекстовый поиск',
				children: [],
			},
			{ id: 'widget', label: 'Виджеты', children: [] },
			{ id: 'mail', label: 'Почтовый сервер', children: [] },
		],
	},
	{
		id: 0,
		label: 'Серверы',
		icon: 'mdi-folder-outline',
		children: [
			{
				id: 0,
				label: '102pc0102',
				avatar: '',
				icon: 'mdi-microsoft-windows-classic',
				children: [],
			},
			{
				id: 0,
				label: 'DVM-new',
				avatar: '',
				icon: 'mdi-penguin',
				children: [],
			},
		],
	},
]

export { tree }
