import { uid } from 'quasar'
const conf = [
	{
		id: 'root',
		label: 'Конфигурации',
		header: 'root',
		children: [
			{
				id: 'platform',
				label: 'Platform',
				icon: 'mdi-folder-outline',
				children: [
					{
						id: uid(),
						label: 'Config 1',
						icon: 'mdi-code-braces',
						env: 'test',
						children: [
							{
								id: uid(),
								label: 'DVM',
								icon: 'mdi-penguin',
								docker: true,
								selected: false,
							},
							{
								id: uid(),
								label: '103pc0103',
								icon: 'mdi-penguin',
								selected: false,
							},
						],
					},
				],
			},
			{
				id: 'web',
				icon: 'mdi-folder-outline',
				label: 'Web-client',
				children: [
					{
						id: uid(),
						icon: 'mdi-code-braces',
						label: 'Config 2',
						env: 'test',
						children: [
							{
								id: uid(),
								icon: 'mdi-microsoft-windows-classic',
								label: '102pc0102',
							},
							{
								id: uid(),
								icon: 'mdi-penguin',
								label: '104pc0104',
							},
						],
					},
					{
						id: uid(),
						icon: 'mdi-code-braces',
						label: 'Config 3',
						env: 'prod',
						children: [
							{
								id: uid(),
								icon: 'mdi-penguin',
								label: '106pc0106',
							},
						],
					},
					{
						id: uid(),
						icon: 'mdi-code-braces',
						label: 'Config 4',
						env: 'dev',
						children: [
							{
								id: uid(),
								icon: 'mdi-microsoft-windows-classic',
								label: 'DV-test',
							},
							{
								id: uid(),
								icon: 'mdi-penguin',
								docker: true,
								label: 'DVM-new',
							},
						],
					},
				],
			},
			{
				id: uid(),
				label: 'Workflow',
				icon: 'mdi-folder-outline',
				children: [],
			},
			{
				id: uid(),
				label: 'Server DV',
				icon: 'mdi-folder-outline',
				children: [],
			},
		],
	},
]

export { conf }
