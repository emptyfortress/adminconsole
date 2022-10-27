<template lang="pug">
div
	.zag Email server
	q-card
		.row.items-baseline.q-gutter-x-md
			q-select(v-model="type" label="Тип соединения" disable)
			q-chip(color="warning") Всего соединений: {{connections.length}}
			q-space
			q-btn(color="primary" unelevated @click="add") Добавить экземпляр
		component(:is="GreyBlock" v-for="item in connections" :key="item" :name="item.name" @delete="del" @duble="addConnection")

	q-dialog(v-model="dialog")
		q-card(style="min-width: 400px;")
			.row.items-center.q-pb-none
				.text-h6 Добавить экземпляр
				q-space
				q-btn(icon="close" flat round dense v-close-popup)
			q-card-section
				q-input(autofocus v-model="newname" label="Имя соединения")
			q-card-actions(align="right")
				q-btn(flat label="Отмена" v-close-popup)
				q-btn(unelevated color="primary" label="Добавить" v-close-popup @click="addConnection(newname)")
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import GreyBlock from '@/components/GreyBlock.vue'

const type = ref('Почтовый сервер')

const connections = reactive([{ name: 'd6d224' }])

const dialog = ref(false)
const add = () => {
	dialog.value = !dialog.value
}
const newname = ref('name')
const addConnection = (e: string) => {
	connections.push({ name: e })
}
const del = (e: string) => {
	let index = connections.indexOf((item: any) => item.name === e)
	connections.splice(index, 1)
}
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.q-card {
	max-width: 800px;
	margin: 1rem auto;
	padding: 1rem;
}
.q-select {
	width: 200px;
}
</style>
