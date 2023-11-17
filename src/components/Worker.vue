<template lang="pug">
.al
	.zag Настройки службы фоновых операций
	q-input.filter(v-model="filter" dense clearable placeholder="Фильтр")
		template(v-slot:prepend)
			q-icon(name="mdi-magnify")

	q-list.q-mt-md(separator)
		q-expansion-item(v-for="panel in workers" :key="panel.id" switch-toggle-side)
			template(v-slot:header)
				.head
					.title
						q-icon(name="mdi-circle-slice-8" size="26px" color="green")
						div {{ panel.text }}
					.row.q-gutter-x-sm.text-right
						q-chip(color="warning") Всего процессов: 4
						q-btn(flat round @click="add" icon="mdi-plus-circle")
						q-btn(flat round icon="mdi-reload")
							q-tooltip Перезапустить службу

	// .grid
	// 	q-card( v-for="item in store.config" :key="item.name").flcard
	// 		component(:is="Uzel" :name="item.name")

	component(:is="AddConnection" :show="dialog" @close="dialog = false" @add="addConnection")
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/store'

import AddConnection from '@/components/AddConnection.vue'
import Uzel from '@/components/Uzel.vue'

const store = useStore()

const dialog = ref(false)

const workers = [
	{ id: 0, text: 'One' },
	{ id: 1, text: 'Woe' },
	{ id: 2, text: 'lkajs' },
	{ id: 3, text: 'lakj' },
]

const addConnection = (e: string) => {
	store.addConnection(e)
	dialog.value = false
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
.flcard {
	width: clamp(640px, 47%, 900px);
	margin: 0.5rem auto;
	padding: 1rem;
}
.grid {
	// display: grid;
	// grid-template-rows: masonry;
	// grid-template-columns: repeat(2, 1fr);
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-wrap: wrap;
}
</style>
