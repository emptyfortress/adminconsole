import { QTableProps } from 'quasar'

const headers: QTableProps['columns'] = [
	// { text: '#', align: 'start', sortable: true, value: 'id'},
	{ label: 'дата', align: 'left', sortable: true, name: 'date', field: 'date' },
	{ label: 'Пользователь', align: 'left', sortable: true, name: 'level', field: 'level' },
	{ label: 'модуль', align: 'left', sortable: true, name: 'module', field: 'module' },
	{ label: 'действие', align: 'left', sortable: true, name: 'descr', field: 'descr' },
	{ label: 'результат', align: 'left', sortable: true, name: 'settle', field: 'settle' },
]

const actions = [
	{
		id: 0,
		date: '01.12.19 \u2501 10:15:35',
		level: 'Щербаков С.В.',
		module: 'worker service',
		descr: 'Action: Your local changes to the following files would be overwritten by checkout',
		settle: 'yes',
	},
	{
		id: 1,
		date: '01.12.19 \u2501 10:15:35',
		level: 'Щербаков С.В.',
		module: 'client',
		descr: 'Action: Your local changes to the following files would be overwritten by checkout',
		settle: 'yes',
	},
	{
		id: 2,
		date: '01.12.19 \u2501 10:15:35',
		level: 'Щербаков С.В.',
		module: 'server',
		descr: 'Action: Your local changes to the following files would be overwritten by checkout',
		settle: 'yes',
	},
	{
		id: 3,
		date: '01.12.19 \u2501 10:15:35',
		level: 'Щербаков С.В.',
		module: 'worker service',
		descr: 'Action: Your local changes to the following files would be overwritten by checkout',
		settle: 'yes',
	},
	{
		id: 4,
		date: '01.12.19 \u2501 10:15:35',
		level: 'Орлов П.К.',
		module: 'server',
		descr: 'Action: Your local changes to the following files would be overwritten by checkout',
		settle: 'yes',
	},
	{
		id: 5,
		date: '01.12.19 \u2501 10:15:35',
		level: 'Щербаков С.В.',
		module: 'worker service',
		descr: 'Action: Your local changes to the following files would be overwritten by checkout',
		settle: 'yes',
	},
	{
		id: 6,
		date: '01.12.19 \u2501 10:15:35',
		level: 'Щербаков С.В.',
		module: 'worker service',
		descr: 'Action: Your local changes to the following files would be overwritten by checkout',
		settle: 'yes',
	},
	{
		id: 7,
		date: '01.12.19 \u2501 10:15:35',
		level: 'Щербаков С.В.',
		module: 'worker service',
		descr: 'Action: Your local changes to the following files would be overwritten by checkout',
		settle: 'yes',
	},
	{
		id: 8,
		date: '01.12.19 \u2501 10:15:35',
		level: 'Орлов П.К.',
		module: 'client',
		descr: 'Action: Your local changes to the following files would be overwritten by checkout',
		settle: 'yes',
	},
	{
		id: 9,
		date: '01.12.19 \u2501 10:15:35',
		level: 'Орлов П.К.',
		module: 'client',
		descr: 'Action: Your local changes to the following files would be overwritten by checkout',
		settle: 'yes',
	},
	{
		id: 10,
		date: '01.12.19 \u2501 10:15:35',
		level: 'Щербаков С.В.',
		module: 'server',
		descr: 'Action: Your local changes to the following files would be overwritten by checkout',
		settle: 'yes',
	},
	{
		id: 11,
		date: '01.12.19 \u2501 10:15:35',
		level: 'Щербаков С.В.',
		module: 'worker service',
		descr: 'Action: Your local changes to the following files would be overwritten by checkout',
		settle: 'yes',
	},
	{
		id: 12,
		date: '01.12.19 \u2501 10:15:35',
		level: 'Орлов П.К.',
		module: 'worker service',
		descr: 'Action: Your local changes to the following files would be overwritten by checkout',
		settle: 'yes',
	},
	{
		id: 13,
		date: '01.12.19 \u2501 10:15:35',
		level: 'Щербаков С.В.',
		module: 'worker service',
		descr: 'Action: Your local changes to the following files would be overwritten by checkout',
		settle: 'yes',
	},
	{
		id: 14,
		date: '01.12.19 \u2501 10:15:35',
		level: 'Щербаков С.В.',
		module: 'worker service',
		descr: 'Action: Your local changes to the following files would be overwritten by checkout',
		settle: 'yes',
	},
	{
		id: 15,
		date: '01.12.19 \u2501 10:15:35',
		level: 'Щербаков С.В.',
		module: 'client',
		descr: 'Action: Your local changes to the following files would be overwritten by checkout',
		settle: 'yes',
	},
	{
		id: 16,
		date: '01.12.19 \u2501 10:15:35',
		level: 'Щербаков С.В.',
		module: 'worker service',
		descr: 'Action: Your local changes to the following files would be overwritten by checkout',
		settle: 'yes',
	},
	{
		id: 17,
		date: '01.12.19 \u2501 10:15:35',
		level: 'Щербаков С.В.',
		module: 'server',
		descr: 'Action: Your local changes to the following files would be overwritten by checkout',
		settle: 'yes',
	},
	{
		id: 18,
		date: '01.12.19 \u2501 10:15:35',
		level: 'Орлов П.К.',
		module: 'worker service',
		descr: 'Action: Your local changes to the following files would be overwritten by checkout',
		settle: 'yes',
	},
	{
		id: 19,
		date: '01.12.19 \u2501 10:15:35',
		level: 'Щербаков С.В.',
		module: 'client',
		descr: 'Action: Your local changes to the following files would be overwritten by checkout',
		settle: 'yes',
	},
	{
		id: 20,
		date: '01.12.19 \u2501 10:15:35',
		level: 'Орлов П.К.',
		module: 'worker service',
		descr: 'Action: Your local changes to the following files would be overwritten by checkout',
		settle: 'yes',
	},
	{
		id: 21,
		date: '01.12.19 \u2501 10:15:35',
		level: 'Щербаков С.В.',
		module: 'worker service',
		descr: 'Action: Your local changes to the following files would be overwritten by checkout',
		settle: 'yes',
	},
	{
		id: 22,
		date: '01.12.19 \u2501 10:15:35',
		level: 'Щербаков С.В.',
		module: 'client',
		descr: 'Action: Your local changes to the following files would be overwritten by checkout',
		settle: 'yes',
	},
	{
		id: 23,
		date: '01.12.19 \u2501 10:15:35',
		level: 'Щербаков С.В.',
		module: 'worker service',
		descr: 'Action: Your local changes to the following files would be overwritten by checkout',
		settle: 'yes',
	},
	{
		id: 24,
		date: '01.12.19 \u2501 10:15:35',
		level: 'Щербаков С.В.',
		module: 'worker service',
		descr: 'Action: Your local changes to the following files would be overwritten by checkout',
		settle: 'yes',
	},
	{
		id: 25,
		date: '01.12.19 \u2501 10:15:35',
		level: 'Щербаков С.В.',
		module: 'server',
		descr: 'Action: Your local changes to the following files would be overwritten by checkout',
		settle: 'yes',
	},
	{
		id: 26,
		date: '01.12.19 \u2501 10:15:35',
		level: 'Щербаков С.В.',
		module: 'worker service',
		descr: 'Action: Your local changes to the following files would be overwritten by checkout',
		settle: 'yes',
	},
	{
		id: 27,
		date: '01.12.19 \u2501 10:15:35',
		level: 'Орлов П.К.',
		module: 'client',
		descr: 'Action: Your local changes to the following files would be overwritten by checkout',
		settle: 'yes',
	},
	{
		id: 28,
		date: '01.12.19 \u2501 10:15:35',
		level: 'Щербаков С.В.',
		module: 'server',
		descr: 'Action: Your local changes to the following files would be overwritten by checkout',
		settle: 'yes',
	},
	{
		id: 29,
		date: '01.12.19 \u2501 10:15:35',
		level: 'Орлов П.К.',
		module: 'worker service',
		descr: 'Action: Your local changes to the following files would be overwritten by checkout',
		settle: 'yes',
	},
	{
		id: 30,
		date: '01.12.19 \u2501 10:15:35',
		level: 'Щербаков С.В.',
		module: 'worker service',
		descr: 'Action: Your local changes to the following files would be overwritten by checkout',
		settle: 'yes',
	},
	{
		id: 31,
		date: '01.12.19 \u2501 10:15:35',
		level: 'Щербаков С.В.',
		module: 'client',
		descr: 'Action: Your local changes to the following files would be overwritten by checkout',
		settle: 'yes',
	},
	{
		id: 32,
		date: '01.12.19 \u2501 10:15:35',
		level: 'Щербаков С.В.',
		module: 'worker service',
		descr: 'Action: Your local changes to the following files would be overwritten by checkout',
		settle: 'yes',
	},
	{
		id: 33,
		date: '01.12.19 \u2501 10:15:35',
		level: 'Орлов П.К.',
		module: 'worker service',
		descr: 'Action: Your local changes to the following files would be overwritten by checkout',
		settle: 'yes',
	},
	{
		id: 34,
		date: '01.12.19 \u2501 10:15:35',
		level: 'Щербаков С.В.',
		module: 'worker service',
		descr: 'Action: Your local changes to the following files would be overwritten by checkout',
		settle: 'yes',
	},
	{
		id: 35,
		date: '01.12.19 \u2501 10:15:35',
		level: 'Орлов П.К.',
		module: 'worker service',
		descr: 'Action: Your local changes to the following files would be overwritten by checkout',
		settle: 'yes',
	},
	{
		id: 36,
		date: '01.12.19 \u2501 10:15:35',
		level: 'Щербаков С.В.',
		module: 'client',
		descr: 'Action: Your local changes to the following files would be overwritten by checkout',
		settle: 'yes',
	},
	{
		id: 37,
		date: '01.12.19 \u2501 10:15:35',
		level: 'Щербаков С.В.',
		module: 'worker service',
		descr: 'Action: Your local changes to the following files would be overwritten by checkout',
		settle: 'yes',
	},
	{
		id: 38,
		date: '01.12.19 \u2501 10:15:35',
		level: 'Щербаков С.В.',
		module: 'worker service',
		descr: 'Action: Your local changes to the following files would be overwritten by checkout',
		settle: 'yes',
	},
	{
		id: 39,
		date: '01.12.19 \u2501 10:15:35',
		level: 'Щербаков С.В.',
		module: 'client',
		descr: 'Action: Your local changes to the following files would be overwritten by checkout',
		settle: 'yes',
	},
	{
		id: 40,
		date: '01.12.19 \u2501 10:15:35',
		level: 'Щербаков С.В.',
		module: 'worker service',
		descr: 'Action: Your local changes to the following files would be overwritten by checkout',
		settle: 'yes',
	},
]

export { headers, actions }
