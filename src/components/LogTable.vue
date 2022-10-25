<template lang="pug">
.row.justify-between.items-center.q-mt-lg
	q-input(v-model="filter" dense clearable placeholder="Поиск")
		template(v-slot:prepend)
			q-icon(name="mdi-magnify")
	q-gutter-xs
		q-chip(v-for="(item, index) in time"
			:key="item.id"
			@click="select(index, time)"
			v-model:selected="item.selected") {{item.label}}
	q-gutter-xs
		q-chip(v-for="(item, index) in par"
			:key="item.id"
			@click="select(index, par)"
			v-model:selected="item.selected") {{item.label}}

</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

interface Chip {
	id: number
	label: string
	selected: boolean
}

const filter = ref('')

const time = reactive([
	{ id: 0, label: 'Сегодня', selected: false },
	{ id: 1, label: 'Вчера', selected: false },
	{ id: 2, label: 'Эта неделя', selected: false },
])
const par = reactive([
	{ id: 0, label: 'Параметр', selected: false },
	{ id: 1, label: 'Параметр', selected: false },
	{ id: 2, label: 'Параметр', selected: false },
])
const select = (index: number, arr: Chip[]) => {
	arr.map((e) => {
		return (e.selected = false)
	})
	arr[index].selected = true
}
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.q-chip--selected {
	background: $primary;
	color: #fff;
	.q-icon {
		color: #fff !important;
	}
}
.q-input {
	width: 240px;
}
</style>
