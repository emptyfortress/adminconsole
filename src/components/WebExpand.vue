<template lang="pug">
q-list.q-mt-md(separator)
	q-expansion-item(v-for="(panel, index) in store.panelsWeb" group="group" v-model="panel.expanded" switch-toggle-side :key="panel.id" :class="{ er: panel.neg }" :label="panel.title")
		template(v-slot:header)
			.head(:class="{ er: panel.neg }")
				.title {{ panel.title }}
				.icon
					q-btn(dense flat round @click.stop="reset(panel.id)" v-if="panel.change")
						q-icon(name="mdi-reload" style="transform: scaleX(-1)")
						q-tooltip Восстановить значения по умолчанию
					q-btn(flat color="primary" size="sm" label="Сохранить" @click.stop="reset(panel.id)" v-if="panel.change")
					q-icon(name="mdi-alert-circle" size="20px" color="negative" v-if="panel.neg")

		.pcard
			component(:is="calcComponent(panel.id)" :key="key" @change="change" @haserror="setNeg(index)" @noerror="setPos(index)")
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WebCommon from '@/components/webconfig/WebCommon.vue'
import { useStore } from '@/stores/store'

const emit = defineEmits(['change'])

const setNeg = (e: number) => {
	store.panels[e].neg = true
}
const setPos = (e: number) => {
	store.panels[e].neg = false
}

const store = useStore()
const calcComponent: any = (e: number) => {
	switch (e) {
		case 0:
			return WebCommon
		default:
			return null
		// case 1:
		// 	return WebCache
		// case 2:
		// 	return WebSystem
		// case 3:
		// 	return WebSign
		// case 4:
		// 	return WebGrid
		// case 5:
		// 	return WebServer
	}
}
const key = ref(0)

const reset = (e: number) => {
	if (e === 2) {
		store.server.$reset()
		store.panels[e].change = false
	}
	key.value += 1
	store.panels[e].neg = false
	if (e === 3) {
		store.access.$reset()
		store.panels[e].change = false
	}
	key.value += 1
	store.panels[e].neg = false
}
const change = () => {
	emit('change')
}
</script>

<style scoped lang="scss">
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

.head {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 1rem;
	color: $secondary;
}

.pcard {
	padding: 1rem;
	font-size: 0.85rem;
}

:deep(.er.q-expansion-item--collapsed) {
	background: $pink-1;
	border: 1px solid $negative;

	.title {
		color: $negative;
	}
}
</style>
