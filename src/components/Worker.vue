<template lang="pug">
div
	.zag Worker service
	.inf
		q-icon(name="mdi-information" color="primary" size="18px").q-mr-sm
		span Адрес хранилища настроек: http://sol2016.digdes.com/api

	br
	q-tabs(v-model="connect" active-color="primary").bg-grey-4.text-grey-7
		q-tab(name="one" label="Connection")
		q-tab(name="two" label="Служба фоновых операций")

	q-tab-panels(v-model="connect" animated)
		q-tab-panel(name="one")
			q-card.card
				.row.items-baseline.q-gutter-x-md
					q-select(v-model="type" label="Тип соединения" disable)
					q-chip(color="warning") Всего соединений: {{connections.length}}
					q-space
					q-btn(color="primary" unelevated @click="add") Добавить экземпляр

				component(:is="GreyBlock1" v-for="item in connections" :key="item" :name="item.name" @delete="del" @duble="addConnection")


		q-tab-panel(name="two")
			q-card.card
				.text-h6 Что здесь? В задаче отсутствует описание.

	component(:is="AddConnection" :show="dialog" @close="dialog = false" @add="addConnection")
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import GreyBlock1 from '@/components/GreyBlock1.vue'
import AddConnection from '@/components/AddConnection.vue'

const type = ref('Docsvision')
const connect = ref('one')
const connections = reactive([{ name: 'SOL2016' }])

const dialog = ref(false)
const add = () => {
	dialog.value = !dialog.value
}
const del = (e: string) => {
	let index = connections.indexOf((item: any) => item.name === e)
	connections.splice(index, 1)
}
const addConnection = (e: string) => {
	connections.push({ name: e })
	dialog.value = false
}
</script>

<style scoped lang="scss">
.q-tab-panels {
	background: transparent;
}
.q-select {
	width: 200px;
}
.inf {
	text-align: left;
}
</style>
