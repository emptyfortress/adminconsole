<template lang="pug">
div
	component(:is="AddConnection" v-model="dialog" @add="addConfig" dv)
	.zag Настройки сервера Docsvision 1
	.bar
		q-chip(color="warning") Всего конфигураций: {{store.config.length}}
		q-btn(flat round dense icon="mdi-plus-circle" @click="add").plus
			q-tooltip Добавить конфигурцию
		q-space
		.alltab
			q-tabs(v-model="store.tabs" active-color="primary" inline-label ).text-secondary
				q-tab(v-for="item in store.config" :key="item.id" :name="item.name" :label="item.name")

	q-card
		q-tab-panels(v-model="store.tabs" animated)
			template(v-for="item in store.config" :key="item.id")
				q-tab-panel(:name="item.name")
					component(:is="GreyBlock4" :name="item.name" @delete="store.removeConfig(item)" @duble="addConfig(item.name, true)")


</template>

<script setup lang="ts">
import { ref } from 'vue'
import AddConnection from '@/components/AddConnection.vue'
import GreyBlock4 from '@/components/GreyBlock4.vue'

import { useStore } from '@/stores/store'

const store = useStore()

const dialog = ref(false)
const add = () => {
	dialog.value = !dialog.value
}

const addConfig = (e: string, copy: boolean) => {
	if (copy) {
		store.addConfig(e + '-copy')
		store.setTabs(e + '-copy')
	} else {
		store.addConfig(e)
		store.setTabs(e)
	}
	dialog.value = false
}
</script>

<style scoped lang="scss">
.bar {
	background: #dedede;
	max-width: clamp(600px, 70%, 1200px);
	margin: 0 auto;
	display: flex;
	align-items: center;
	padding: 0 0.5rem;
	@media screen and (max-width: 1233px) {
		display: block;
	}
}
.q-card {
	max-width: clamp(600px, 70%, 1200px);
	margin: 0 auto;
	background: var(--bg-light);
}
.plus {
	:deep(.q-icon) {
		color: $primary;
	}
}
.alltab {
	max-width: 700px;
}
</style>
