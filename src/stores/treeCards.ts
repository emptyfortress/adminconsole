const cards = [
	{
		id: 0,
		label: 'Дерево видов',
		children: [
			{
				id: 1,
				label: 'Задание',
				icon: 'mdi-folder-outline',
				children: [
					{
						id: 5,
						label: 'Задание УД',
						children: [
							{ id: 7, label: 'На исполнение' },
							{ id: 8, label: 'На согласование' },
							{ id: 9, label: 'На ознакомление' },
							{ id: 10, label: 'Сообщение' },
							{ id: 11, label: 'Поручение' },
						]
					},
					{
						id: 6,
						label: 'Задание КС',
						children: [
							{
								id: 12,
								label: 'На согласование',
								children: [
									{ id: 13, label: 'На подписание' },
									{ id: 14, label: 'Заявки на договор' },
									{ id: 15, label: 'Согласование КС' },
									{ id: 16, label: 'Задание по отпускам' },
								]
							},
							{
								id: 17,
								label: 'На консолидацию',
								children: [
									{ id: 18, label: 'Согласование с контрагентом' },
									{ id: 19, label: 'Консолидация Договора ДВ' },
									{ id: 20, label: 'Консолидация аттестации ДВ' },
									{ id: 21, label: 'На публикацию НД ДВ' },
								]
							},
							{
								id: 22,
								label: 'На подписание',
								children: [
									{ id: 23, label: 'На подписание ДВ' },
									{ id: 24, label: 'На подписание контрагентом ДВ' },
								]
							},
						]
					},
				]
			},
			{
				id: 2,
				label: 'Документ',
				icon: 'mdi-folder-outline',
				children: [
					{
						id: 25, label: 'Входящий',
						children: [
							{ id: 35, label: 'Входящий пакет' },
							{ id: 36, label: 'Входящий акт' },
							{ id: 37, label: 'Письмо' },
						]
					},
					{
						id: 26, label: 'Исходящий',
						children: [
							{ id: 38, label: 'Новый' },
							{ id: 39, label: 'Коммерческое предложение' },
							{ id: 40, label: 'Пакет отгрузки' },
							{ id: 41, label: 'Ответ на претензию' },
							{ id: 42, label: 'Письмо' },
						]
					},
					{ id: 28, label: 'Договор' },
					{ id: 29, label: 'Приказ' },
					{ id: 30, label: 'Командировка' },
					{ id: 31, label: 'Проект' },
					{ id: 32, label: 'ОРД' },
					{ id: 33, label: 'Служебная записка' },
				]
			},
			{
				id: 3,
				label: 'Группа заданий',
				icon: 'mdi-folder-outline',
				children: [
					{ id: 43, label: 'Поручение' },
					{ id: 44, label: 'Группа заданий УД' }
				]
			},
		]
	}
]

export { cards }
