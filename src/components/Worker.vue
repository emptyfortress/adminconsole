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
					q-chip(color="warning") Всего соединений: {{store.connections.length}}
					q-space
					q-btn(color="primary" unelevated @click="add") Добавить экземпляр

				component(:is="GreyBlock1" v-for="item in store.connections" :key="item" :name="item.name" @delete="store.deleteConnection(item)" @duble="addConnection")


		q-tab-panel(name="two").mypanel
			q-card( v-for="item in store.connections" :key="item.name").flcard
				component(:is="Uzel" :name="item.name")

	component(:is="AddConnection" :show="dialog" @close="dialog = false" @add="addConnection")
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/store'

import GreyBlock1 from '@/components/GreyBlock1.vue'
import AddConnection from '@/components/AddConnection.vue'
import Uzel from '@/components/Uzel.vue'

const store = useStore()
const type = ref('Docsvision')
const connect = ref('one')

const dialog = ref(false)
const add = () => {
	dialog.value = !dialog.value
}
const addConnection = (e: string) => {
	store.addConnection(e)
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
.mypanel {
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 0.5rem;
	flex-wrap: wrap;
	padding: 1rem 0;
}
.flcard {
	width: clamp(640px, 47%, 900px);
	// width: 680px;
	// min-width: 600px;
	margin: 0.5rem auto;
	padding: 1rem;
}
</style>
