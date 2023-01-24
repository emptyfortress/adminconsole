<template lang="pug">
.database
	.bd(v-for="item in rows" :key="item.psevdo")
		q-btn(flat round icon="mdi-trash-can-outline" size="md" @click="remove(item)").del
		.label Псевдоним:
		.title {{item.psevdo}}
		.label Сервер:
		.title {{item.server}}
		.label Индексация:
		.title {{item.index}}
		.label Версия:
		.title {{item.version}}
		q-checkbox(v-model="item.def" dense label="Использовать по умолчанию").check

		.check
			q-btn(flat color="primary" size="sm" v-for="bt in tabs" :key="bt.id" :label="bt.label"  @click="editBD(item, bt.field)")

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
.database {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	justify-items: start;
	align-items: stretch;
	gap: 0.5rem;
	.bd {
		width: 100%;
		background: white;
		border: 1px solid #ccc;
		padding: 0.5rem;
		display: grid;
		grid-template-columns: auto 1fr;
		justify-items: start;
		align-items: stretch;
		column-gap: 1rem;
		row-gap: 2px;
		position: relative;
		.del {
			position: absolute;
			top: 5px;
			right: 5px;
			:deep(.q-icon) {
				color: darkred;
			}
		}
	}
	.label {
		color: #666;
	}
	.check {
		margin-top: 1rem;
		grid-column: 1/-1;
	}
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
