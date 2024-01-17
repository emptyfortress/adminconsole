const conf = [
	{
		id: 0,
		label: 'Конфигурации',
		header: 'root',
		children: [
			{
				id: 1,
				icon: 'mdi-folder-outline',
				label: 'Web-client',
				children: [
					{
						id: 11,
						icon: 'mdi-application-cog-outline',
						label: 'Config 1',
						env: 'test',
						children: [
							{
								id: 111,
								icon: 'mdi-microsoft-windows-classic',
								label: '102pc0102',
							},
							{
								id: 112,
								icon: 'mdi-microsoft-windows-classic',
								label: 'DV-test',
							},
							{
								id: 113,
								icon: 'mdi-penguin',
								label: 'DVM',
							},
							{
								id: 114,
								icon: 'mdi-penguin',
								label: '104pc0104',
							},
						],
					},
					{
						id: 12,
						icon: 'mdi-application-cog-outline',
						label: 'Config 2',
						children: [
							{
								id: 121,
								icon: 'mdi-penguin',
								label: 'DVM',
							},
						],
					},
				],
			},
			{
				id: 2,
				label: 'Platform',
				icon: 'mdi-folder-outline',
				children: [
					{
						id: 21,
						label: 'Config 3',
						icon: 'mdi-application-cog-outline',
						env: 'test',
						children: [
							{ id: 211, label: 'DVM', icon: 'mdi-penguin', selected: false },
							{
								id: 212,
								label: '104pc0104',
								icon: 'mdi-penguin',
								selected: false,
							},
						],
					},
				],
			},
			{
				id: 3,
				label: 'Workflow',
				icon: 'mdi-folder-outline',
				children: [],
			},
			{
				id: 4,
				label: 'Server DV',
				icon: 'mdi-folder-outline',
				children: [],
			},
		],
	},
]

export { conf }
