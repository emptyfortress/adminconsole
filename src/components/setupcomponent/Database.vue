<template lang="pug">
div
	.database
		q-table(bordered flat :rows='rows' :columns='columns' row-key='name' hide-bottom)
			template(v-slot:body='props')
				q-tr(:props='props' :class='{ cool: props.row.def }')
					q-td(key='psevdo' :props='props')
						q-icon.q-mr-sm(name='mdi-database' size='16px' v-if='props.row.def')
						q-icon.q-mr-sm(name='mdi-database-outline' size='16px' v-else)
							span {{ props.row.psevdo }}
					q-td(key='server' :props='props') {{ props.row.server }}
					q-td(key='index' :props='props') {{ props.row.index }}
					q-td(key='version' :props='props') {{ props.row.version }}
					q-td(key='date' :props='props') {{ props.row.date }}
					q-td.text-center(key='def' :props='props')
						q-btn(round flat icon='mdi-checkbox-marked-circle' size='sm' v-if='props.row.def')
						q-btn(round flat icon='mdi-checkbox-blank-circle-outline' size='sm' v-else @click='assign(props.row.psevdo)')
					q-td.text-right(key='def' :props='props')
						q-btn(round flat icon='mdi-pencil' size='sm' @click='editBD(props.row)')
							q-btn(round flat icon='mdi-trash-can-outline' size='sm' @click='remove(props.row.psevdo)')
		.master
			div Чтобы создать новую базу данных, сделать доступной для пользователей существующую базу данных, а также обновить БД, если ее версия отличается от версии сервера Docsvision, воспользуйтесь Мастером баз данных.
			q-btn(unelevated color='primary' @click='master = true') Мастер баз данных

ChangeDialog(v-model="change" :changename="changename" @changeDef="assignDef")
MasterBD(v-model="master")
EditBD(v-model="edit" @close="edit = false" :bd="bdRow")
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import ChangeDialog from '@/components/setupcomponent/ChangeDialog.vue'
import MasterBD from '@/components/setupcomponent/MasterBD.vue'
import EditBD from '@/components/setupcomponent/EditBD.vue'
import type { QTableProps } from 'quasar'

// import { useStore } from '@/stores/store'

// const store = useStore()
const emit = defineEmits(['change', 'haserror', 'noerror'])

const change = ref(false)
const bdRow = ref()
const master = ref(false)
const edit = ref(false)
const changename = ref('')

const remove = (row: string) => {
	console.log(row)
}
const editBD = (row: any) => {
	bdRow.value = row
	edit.value = true
}

const assign = (e: string) => {
	changename.value = e
	change.value = true
}

const assignDef = () => {
	let index = rows.findIndex((item) => item.psevdo === changename.value)
	rows.map((item) => (item.def = false))
	rows[index].def = true
	change.value = false
	// store.panels[2].change = true
}

// const columns = [
const columns: QTableProps['columns'] = [
	{
		name: 'psevdo',
		required: true,
		label: 'Псевдоним',
		align: 'left',
		field: 'psevdo',
		sortable: true,
	},
	{ name: 'server', align: 'left', label: 'Сервер', field: 'server', sortable: true },
	{ name: 'index', align: 'left', label: 'Индексируется', field: 'index', sortable: true },
	{ name: 'version', align: 'left', label: 'Версия', field: 'version', sortable: true },
	{ name: 'date', align: 'left', label: 'Дата создания', field: 'date', sortable: true },
	{ name: 'def', align: 'left', label: 'По умолчанию', field: 'def', sortable: true },
	{ name: 'action', align: 'right', label: 'Действия', field: '' },
]
const rows = reactive([
	{
		psevdo: 'AGSupport',
		server: 'Docsvision 1',
		index: 'yes',
		version: 4373,
		date: '20.10.2021',
		def: true,
	},
	{
		psevdo: 'DvTest',
		server: 'Docsvision 1',
		index: 'yes',
		version: 4373,
		date: '04.11.2022',
		def: false,
	},
	{
		psevdo: 'DvShowCase',
		server: 'Docsvision 1',
		index: 'yes',
		version: 4373,
		date: '09.07.2021',
		def: false,
	},
])
</script>

<style scoped lang="scss">
:deep(.q-table th) {
	font-size: 0.7rem;
	font-weight: normal;
	color: hsl(0, 0%, 40%);
}

.cool {
	font-weight: 600;
	background: var(--bg-selected);
}

.def {
	margin-top: 0;
	padding-top: 0;
	font-size: 0.8rem;
	color: hsla(0, 0%, 40%, 1);
}

.master {
	margin-top: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 2rem;
}
</style>
