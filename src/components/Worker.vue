<template lang="pug">
.al
	.zag Настройки службы фоновых операций
	q-input.filter(v-model="filter" dense clearable placeholder="Фильтр" @clear="filter = ''")
		template(v-slot:prepend)
			q-icon(name="mdi-magnify")

	q-list.q-mt-md(separator)
		q-expansion-item(v-for="panel in filtered" :key="panel.id" switch-toggle-side)
			template(v-slot:header)
				.head
					.title
						q-icon(name="mdi-circle-slice-8" size="26px" :color="calColor(panel.id)")
						div {{ panel.text }}
					.row.items-center.q-gutter-x-sm.text-right
						.span Всего процессов:
						q-chip(color="warning") {{panel.processes.length}}
						q-btn(flat round @click.stop="add(panel)" icon="mdi-plus-circle")
							q-tooltip Добавить процесс
						q-btn(flat round icon="mdi-pencil" @click.stop="ren(panel)")
							q-tooltip Переименовать
						q-btn(flat round icon="mdi-reload" @click.stop)
							q-tooltip Перезапустить все процессы
						q-btn(flat round icon="mdi-trash-can-outline" @click.stop="removeService(panel)")
							q-tooltip Остановить службу
			.pcard
				GreyBlock2( v-for="item in panel.processes" :key="item.name" :name="item.name" @del="remove(panel.id, item)")

	AddConnection(v-model="dialog" @close="dialog = false" @add="addProcess" worker)

	q-dialog(v-model="dialog2")
		q-card(style="min-width: 400px; padding: 1rem;")
			.row.items-center.q-pb-none
				.text-h6 Переименовать службу
				q-space
				q-btn(icon="close" flat round dense @click="close")
			q-form(@submit="rename")
				q-card-section
					q-input(autofocus v-model="curName" label="Имя службы")
				q-card-actions(align="right")
					q-btn(flat color="primary" label="Отмена" @click="close")
					q-btn(unelevated color="primary" type="submit" label="Сохранить")
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import GreyBlock2 from '@/components/GreyBlock2.vue'
import AddConnection from '@/components/AddConnection.vue'

interface Proc {
	name: string
}
interface Worker {
	id: number
	text: string
	processes: Proc[]
}

const dialog = ref(false)
const dialog2 = ref(false)
let workers = reactive([
	{ id: 0, text: 'dv-agent', processes: [{ name: 'Coolprocess' }] },
	{
		id: 1,
		text: 'webclient-worker',
		processes: [{ name: 'Coolprocess' }, { name: 'Notsocool' }],
	},
	{ id: 2, text: 'KonturDoc', processes: [{ name: 'Test0' }] },
	{ id: 3, text: 'testWorker_1', processes: [{ name: 'Test1' }] },
	{ id: 4, text: 'testWorker_2', processes: [{ name: 'Test2' }] },
	{ id: 5, text: 'testWorker_3', processes: [{ name: 'Test3' }] },
])

const curName = ref('')
const curPanel = ref()

const filter = ref('')
const filtered = computed(() => {
	if (filter.value === '') return workers
	else
		return workers.filter(item =>
			item.text.toLowerCase().includes(filter.value.toLowerCase())
		)
})
const add = (panel: Worker) => {
	curName.value = panel.text
	dialog.value = true
}
const ren = (e: Worker) => {
	curPanel.value = e
	curName.value = e.text
	dialog2.value = true
}
const rename = () => {
	curPanel.value.text = curName.value
	dialog2.value = false
}
const remove = (id: number, e: any) => {
	const index = workers[id].processes.findIndex(el => el === e)
	workers[id].processes.splice(index, 1)
}
const removeService = (e: Worker) => {
	const ind = workers.findIndex(el => el === e)
	workers.splice(ind, 1)
}

const addProcess = (e: string) => {
	curPanel.value.processes.push({ name: e })
	dialog.value = false
}
const calColor = (id: number) => {
	if (id === 1) return 'red'
	return 'green'
}
const close = () => {
	dialog2.value = false
}
</script>

<style scoped lang="scss">
.head {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 1rem;
	color: $secondary;
}
.title {
	display: flex;
	align-items: center;
	gap: 1rem;
	font-size: 1.1rem;
}

.q-expansion-item {
	transition: 0.2s ease all;
}

.q-expansion-item--expanded :deep(.q-item) {
	border-bottom: 1px dotted $secondary;
	border-top: 1px solid $primary;
}

.q-expansion-item--expanded {
	box-shadow: 0 2px 7px rgba(0, 0, 0, 0.5);
	border: 1px solid $primary;
	margin-top: 1rem;
	margin-bottom: 1rem;
}

.pcard {
	padding: 1rem;
	font-size: 0.85rem;
	background: #fff;
}

:deep(.er.q-expansion-item--collapsed) {
	background: $pink-1;
	border: 1px solid $negative;

	.title {
		color: $negative;
	}
}
.al {
	max-width: 1200px;
	margin: 0 auto;
}
.filter {
	width: 400px;
	margin: 0 auto;
}
.q-select {
	width: 200px;
}
.span {
	font-size: 0.8rem;
}
</style>
