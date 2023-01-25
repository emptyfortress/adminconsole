<template lang="pug">
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
					q-icon(name="mdi-check-bold" size="sm" v-if="props.row.def")
					q-btn(flat color="primary" label="Назначить" v-else size="sm" @click='assign(props.row.psevdo)')
				q-td.text-right(key='def' :props='props')
					q-btn(:props="props" round flat icon='mdi-cog' size='sm')
						q-menu(:props="props")
							q-list(:props="props")
								q-item(:props="props" clickable v-for="item in tabs" :key="item.id" @click="editBD(props.row, item.field)" v-close-popup)
									q-item-section(side)
										q-icon(name="mdi-database-cog-outline")
									q-item-section {{ item.label }}
								q-separator
								q-item(clickable :props="props" @click="remove(props.row)" v-close-popup)
									q-item-section(side)
										q-icon(name="mdi-trash-can-outline" color="pink")
									q-item-section Удалить
			q-menu(touch-position context-menu)
				q-list(dense)
					q-item(clickable v-for="item in tabs" :key="item.id" @click="editBD(props.row, item.field)" v-close-popup)
						q-item-section(side)
							q-icon(name="mdi-database-cog-outline" size="16px")
						q-item-section {{ item.label }}
					q-separator
					q-item(clickable :props="props" @click="remove(props.row)" v-close-popup)
						q-item-section(side)
							q-icon(name="mdi-trash-can-outline" color="pink" size="16px")
						q-item-section Удалить

	.master
		div Чтобы создать новую базу данных, сделать доступной для пользователей существующую базу данных, а также обновить БД, если ее версия отличается от версии сервера Docsvision, воспользуйтесь Мастером баз данных.
		q-btn(unelevated color='primary' @click='master = true') Мастер&nbsp;баз&nbsp;данных 

ChangeDialog(v-model="change" :changename="changename" @changeDef="assignDef")
MasterBD(v-model="master")
component(:is="EditBD" v-model="edit" @close="edit = false" :bd="bdRow" :tab="bdTab")
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import ChangeDialog from '@/components/setupcomponent/ChangeDialog.vue'
import MasterBD from '@/components/setupcomponent/MasterBD.vue'
import EditBD from '@/components/setupcomponent/EditBD.vue'
import type { QTableProps } from 'quasar'

const emit = defineEmits(['change', 'haserror', 'noerror'])

const change = ref(false)
const bdRow = ref()
const bdTab = ref('prop')
const master = ref(false)
const edit = ref(false)
const changename = ref('')

const remove = (row: any) => {
	const index = rows.indexOf(row)
	rows.splice(index, 1)
}
const editBD = (row: any, field: string) => {
	bdRow.value = row
	bdTab.value = field
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
	{ name: 'def', align: 'center', label: 'По умолчанию', field: 'def', sortable: true },
	{ name: 'action', align: 'right', label: '', field: '' },
]
const rows = reactive([
	{
		psevdo: 'AGSupport',
		name: 'AGSupport_1',
		server: 'Docsvision 1',
		index: 'yes',
		version: 4373,
		date: '20.10.2021',
		def: true,
	},
	{
		psevdo: 'DvTest',
		name: 'AGSupport_2',
		server: 'Docsvision 1',
		index: 'yes',
		version: 4373,
		date: '04.11.2022',
		def: false,
	},
	{
		psevdo: 'DvShowCase',
		name: 'AGSupport_3',
		server: 'Docsvision 1',
		index: 'yes',
		version: 4373,
		date: '09.07.2021',
		def: false,
	},
])

const tabs = ref([
	{ id: 0, field: 'prop', label: 'Свойства', action: '' },
	{ id: 1, field: 'control', label: 'Управление', action: '' },
	{ id: 2, field: 'outer', label: 'Внешние хранилища', action: '' },
	{ id: 3, field: 'arch', label: 'Архивирование', action: '' },
	{ id: 4, field: 'meta', label: 'Метаданные', action: '' },
	{ id: 5, field: 'journal', label: 'Журнал', action: '' },
	{ id: 6, field: 'cache', label: 'Кэширование', action: '' },
])
</script>

<style lang="scss" scoped>
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
	gap: 1rem;
}
</style>
