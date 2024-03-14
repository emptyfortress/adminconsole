const tree = [
	{
		id: 'root',
		label: 'Модули',
		save: true,
		icon: 'mdi-folder-outline',
		children: [
			{
				id: 'appserver',
				label: 'Сервер приложений',
				save: false,
				children: [
					{
						id: 'config',
						label: 'Конфигурации',
						save: true,
						children: [
							{
								id: 'conf1',
								label: 'SOL2016',
								save: true,
								children: [
									{
										id: 'licence1',
										label: 'Лицензия',
										save: true,
										children: [],
									},
									{
										id: 'db1',
										label: 'Базы данных',
										save: true,
										children: [],
									},
									{
										id: 'common1',
										label: 'Общие настройки',
										save: true,
										children: [],
									},
									{
										id: 'access1',
										label: 'Управление доступом',
										save: true,
										children: [],
									},
									{
										id: 'auth1',
										label: 'Расширенная аутентификация',
										save: true,
										children: [],
									},
								],
							},
							{
								id: 'conf2',
								label: 'SOL2017',
								save: true,
								children: [
									{
										id: 'licence2',
										label: 'Лицензия',
										save: true,
										children: [],
									},
									{
										id: 'db2',
										label: 'Базы данных',
										save: true,
										children: [],
									},
									{
										id: 'common2',
										label: 'Общие настройки',
										save: true,
										children: [],
									},
									{
										id: 'access2',
										label: 'Управление доступом',
										save: true,
										children: [],
									},
									{
										id: 'auth2',
										label: 'Расширенная аутентификация',
										save: true,
										children: [],
									},
								],
							},
						],
					},
					{
						id: 'serv1',
						label: '102pc0102',
						save: true,
						icon: 'mdi-penguin',
						children: [],
					},
					{
						id: 'serv2',
						label: 'DVM-new',
						save: true,
						icon: 'mdi-penguin',
						children: [],
					},
				],
			},
			{
				id: 'wc',
				label: 'Web-клиент',
				save: true,
				children: [],
			},
			{
				id: 'worker',
				label: 'Служба фоновых операций',
				save: true,
				children: [],
			},
			{
				id: 'bp',
				label: 'Сервис бизнес-процессов',
				save: true,
				children: [],
			},
			{
				id: 'search',
				label: 'Полнотекстовый поиск',
				save: true,
				children: [],
			},
			{
				id: 'widget',
				label: 'Виджеты',
				save: true,
				children: [],
			},
			{
				id: 'mail',
				label: 'Почтовый сервер',
				save: true,
				children: [],
			},
		],
	},
]

export { tree }
