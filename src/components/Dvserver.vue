<template lang="pug">
div
	.zag Настройки сервера Docsvision
	q-card.card
		.row.items-baseline.q-gutter-x-md
			//- q-select(v-model="type" label="Тип соединения" disable)
			q-chip(color="warning") Всего конфигураций: {{config.length}}
			q-space
			q-btn(color="primary" unelevated @click="add") Добавить конфигурацию

		component(:is="GreyBlock3" v-for="item in config" :key="item.id" :name="item.name" @delete="del(item)" @duble="addConnection")

	component(:is="AddConnection" :show="dialog" @close="dialog = false" @add="addConnection" dv)
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import GreyBlock3 from '@/components/GreyBlock3.vue'
import AddConnection from '@/components/AddConnection.vue'
import { uid } from 'quasar'

const config = ref([{ id: '0', name: 'SOL2016' }])

const dialog = ref(false)
const add = () => {
	dialog.value = !dialog.value
}
const del = (e: any) => {
	let index = config.value.indexOf(e)
	config.value.splice(index, 1)
}
const addConnection = (e: string) => {
	let temp = { id: uid(), name: e }
	config.value.push(temp)
	dialog.value = false
}
</script>

<style scoped lang="scss">
.q-select {
	width: 200px;
}
.card {
	max-width: clamp(600px, 70%, 1200px);
}
</style>
