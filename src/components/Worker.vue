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
						q-btn(flat round icon="mdi-trash-can-outline" @click.stop)
							q-tooltip Перезапустить службу
			.pcard
				GreyBlock2( v-for="item in panel.processes" :key="item.name" :name="item.name" @del="remove(panel.id, item)")

	AddConnection(v-model="dialog" @close="dialog = false" @add="addProcess" worker)
	RenameWorker(v-model="dialog2" @close="dialog2 = false" @rename="rename" :name="curPanel.text")
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import GreyBlock2 from '@/components/GreyBlock2.vue'
import AddConnection from '@/components/AddConnection.vue'
import RenameWorker from '@/components/RenameWorker.vue'

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
const curPanel = reactive<Worker>(workers[0])
const filter = ref('')
const filtered = computed(() => {
	if (filter.value === '') return workers
	else
		return workers.filter(item =>
			item.text.toLowerCase().includes(filter.value.toLowerCase())
		)
})
const add = (panel: Worker) => {
	Object.assign(curPanel, panel)
	dialog.value = true
}
const ren = (e: Worker) => {
	Object.assign(curPanel, e)
	console.log(curPanel)
	dialog2.value = true
}
const rename = (e: string) => {
	console.log(e)
	// curPanel.value?.text = e
}
const remove = (id: number, e: any) => {
	const index = workers[id].processes.findIndex(el => el === e)
	workers[id].processes.splice(index, 1)
}

const addProcess = (e: string) => {
	curPanel.processes.push({ name: e })
	dialog.value = false
}
const calColor = (id: number) => {
	if (id === 1) return 'red'
	return 'green'
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
