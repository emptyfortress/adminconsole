<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { QTableColumn } from 'quasar'

const scrollAreaRef = ref()

onMounted(() => {
	// const element = document.getElementById('test')
	// element.scrollIntoView()
	// let pos = scrollAreaRef.value.getScrollTarget('#test')
	// scrollAreaRef.value.setScrollPosition('vertical', pos, 300)
})

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
]
const rows: any = []
</script>

<template lang="pug">
div
	.mainzag
		q-icon.q-mr-md(name="mdi-hammer-wrench" color="secondary" size="md")
		span Конфигурации
	q-list
		q-item(clickable)
			q-item-section
				q-item-label Всего конфигураций:
			q-item-section(side)
				q-item-label 2
	q-table(:columns="cols" :rows="rows" row-key="id" hide-bottom)
	br
	q-btn(unelevated color="primary" label="Добавить конфигурацию" @click="") 
	q-scroll-area.right(ref="scrollAreaRef")
</template>

<style scoped lang="scss">
.mainzag {
	font-size: 1.5rem;
	border-bottom: 1px solid #aaa;
}
.q-list {
	max-width: 300px;
}
.right {
	height: 800px;
}
</style>
