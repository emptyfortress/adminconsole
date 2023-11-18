<template lang="pug">
.al
	.zag Настройки службы фоновых операций
	q-input.filter(v-model="filter" dense clearable placeholder="Фильтр")
		template(v-slot:prepend)
			q-icon(name="mdi-magnify")

	q-list.q-mt-md(separator)
		q-expansion-item(v-for="panel in filtered" :key="panel.id" switch-toggle-side)
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
			.pcard
				GreyBlock2(v-for="item in processes" :key="item.name" :name="item.name" )

	component(:is="AddConnection" :show="dialog" @close="dialog = false" @add="addConnection")
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { useStore } from '@/stores/store'
import GreyBlock2 from '@/components/GreyBlock2.vue'
import AddConnection from '@/components/AddConnection.vue'

const store = useStore()

const dialog = ref(false)
const processes = reactive([{ name: 'Coolname' }])

const workers = [
	{ id: 0, text: 'dv-agent' },
	{ id: 1, text: 'webclient-worker' },
	{ id: 2, text: 'dvDocKontur' },
	{ id: 3, text: 'testWorker_1' },
	{ id: 4, text: 'testWorker_2' },
	{ id: 5, text: 'testWorker_3' },
]
const filter = ref('')
const filtered = computed(() => {
	if (filter.value === '') return workers
	else return workers.filter(item => item.text.includes(filter.value))
})

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
</style>
