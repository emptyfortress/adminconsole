<script setup lang="ts">
import { reactive } from 'vue'

const chips = reactive([
	{ id: 0, selected: true, label: 'Все' },
	{ id: 1, selected: false, label: 'Тестовая среда' },
	{ id: 2, selected: false, label: 'Прод' },
])
const select = ((e: any) => {
	chips.map(item => item.selected = false)
	e.selected = true
})

const columns = [
	{ label: 'Конфигурация', align: 'left', sortable: true, name: 'name', field: 'name' },
	{ label: 'Модуль', align: 'left', sortable: true, name: 'module', field: 'module' },
	{ label: 'Среда', align: 'left', sortable: true, name: 'env', field: 'env' },
]
const rows = [
	{ id: 0, name: 'Config 1', env: 'test', module: 'Web-client' },
	{ id: 1, name: 'Config 1', env: 'test', module: 'Web-client' },
	{ id: 2, name: 'Config 1', env: 'test', module: 'Web-client' },
	{ id: 3, name: 'Config 1', env: 'prod', module: 'Web-client' },
	{ id: 4, name: 'Config 1', env: 'test', module: 'Web-client' },
	{ id: 5, name: 'Config 1', env: 'prod', module: 'Web-client' },
	{ id: 6, name: 'Config 1', env: 'prod', module: 'Web-client' },
	{ id: 7, name: 'Config 1', env: 'test', module: 'Web-client' },
]
const pagination = {
	sortBy: 'name',
	rowsPerPage: 0
}
</script>

<template lang="pug">
.q-ml-sm.q-gutter-xs
	q-chip(v-for="chip in chips" :key="chip.id" v-model:selected="chip.selected" @click="select(chip)") {{ chip.label }}
.grid
	.left.wh
		q-table(flat :columns="columns" :rows="rows" hide-bottom :pagination="pagination")
	.to
		q-icon(name="mdi-arrow-right-bold" size="lg")
	.right.wh
		q-table(flat :columns="columns" :rows="rows" hide-bottom)
</template>

<style scoped lang="scss">
.q-chip {
	background: #e2e2d8;
}

.q-chip--selected {
	background: $secondary;
	color: #fff;
}

.grid {
	margin: .5rem;
	display: grid;
	grid-template-columns: 1fr auto 1fr;
	align-items: center;
	gap: 1rem;
	background: var(--bg-light);
	padding: 1rem;
}
</style>
