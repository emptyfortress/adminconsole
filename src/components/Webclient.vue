<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/store'
import GreyBlock5 from '@/components/GreyBlock5.vue'
import AddConnection from '@/components/AddConnection.vue'

const store = useStore()
const dialog = ref(false)
const add = () => {
	dialog.value = !dialog.value
}
const addWebConfig = (e: string, copy: boolean) => {
	if (copy) {
		store.addWebConfig(e + '-copy')
		store.setTabs2(e + '-copy')
	} else {
		store.addWebConfig(e)
		store.setTabs2(e)
	}
	dialog.value = false
}
</script>

<template lang="pug">
div
	AddConnection(v-model="dialog" dv @add="addConfig")
	.zag Настройки web-клиента
	.bar
		q-chip(color="warning") Всего конфигураций: {{ store.webconfig.length }}
		q-btn.plus(flat round icon="mdi-plus-circle" @click="add") 
			q-tooltip Добавить config
		q-space
		.alltab
			q-tabs(v-model="store.tabs2" active-color="primary" inline-label).text-secondary
				q-tab(v-for="item in store.webconfig" :key="item.id" :name="item.name" :label="item.name")

	q-card.card
		q-tab-panels(v-model="store.tabs2" animated)
			template(v-for="item in store.webconfig" :key="item.id")
				q-tab-panel(:name="item.name")
					GreyBlock5(:name="item.name" @delete="store.removeWebConfig(item)" @duble="addWebConfig(item.name, true)")
</template>

<style scoped lang="scss">
.bar {
	background: #dedede;
	max-width: clamp(600px, 80%, 1200px);
	margin: 0 auto;
	display: flex;
	align-items: center;
	padding: 0 0.5rem;

	@media screen and (max-width: 1233px) {
		display: block;
	}
}

.card {
	max-width: clamp(600px, 80%, 1200px);
	margin: 0 auto;
}

.plus {
	:deep(.q-icon) {
		color: $primary;
	}
}
</style>
