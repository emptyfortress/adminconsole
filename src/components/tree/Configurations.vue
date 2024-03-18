<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { QTableColumn } from 'quasar'

const scrollAreaRef = ref()

const cols: QTableColumn[] = [
	{
		label: 'Название',
		align: 'left',
		sortable: true,
		name: 'name',
		field: 'name',
	},
	{
		label: 'Модуль',
		align: 'left',
		sortable: true,
		name: 'module',
		field: 'module',
	},
	{
		label: 'Среда',
		align: 'left',
		sortable: true,
		name: 'env',
		field: 'env',
	},
	{
		label: 'Описание',
		align: 'left',
		sortable: true,
		name: 'descr',
		field: 'descr',
	},
	{
		label: '',
		align: 'left',
		sortable: true,
		name: 'action',
		field: 'action',
	},
]
const rows: any = reactive([
	{ id: 0, name: 'Sol2016', module: '', env: '', descr: '', action: '' },
	{ id: 1, name: 'Sol2017', module: '', env: '', descr: '', action: '' },
])
const remove = (e: any) => {
	const idx = rows.findIndex(item => item.id == e.id)
	rows.splice(idx, 1)
}
</script>

<template lang="pug">
.treepage
	.mainzag
		q-icon.q-mr-md(name="mdi-hammer-wrench" color="secondary" size="md")
		span Конфигурации
	q-table(:columns="cols"
		:rows="rows"
		row-key="id"
		hide-bottom )
		template(v-slot:body-cell-action="props")
			q-td.text-right(:props="props")
				q-btn(flat dense round icon="mdi-trash-can-outline" size="sm") 
					q-menu
						q-list
							q-item(clickable v-close-popup @click="remove(props.row)").pink
								q-item-section Удалить
	br
	q-btn(unelevated color="primary" label="Добавить конфигурацию" @click="") 
	q-scroll-area.right(ref="scrollAreaRef")
</template>

<style scoped lang="scss">
.q-list {
	max-width: 300px;
}
.right {
	height: 800px;
}
</style>
