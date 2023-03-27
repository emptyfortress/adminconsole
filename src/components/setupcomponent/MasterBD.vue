<template lang="pug">
q-dialog(:model-value="props.dialog" position="bottom" full-width persistent)
	q-card.edit
		q-btn.close(flat round icon="mdi-close" color="primary" @click="close")

		div
			q-card-section
				.title
					q-icon(name='mdi-database-cog')
					span Мастер баз данных

			q-tabs.text-secondary(v-model='mytab' dense)
				q-tab(v-for='tab in tabs' :key='tab.name' :name='tab.name') {{tab.label}}

			// q-stepper(v-model="step" ref="stepper" color="primary" animated flat)
			// 	q-step(:name="1" title="Select campaign settings" icon="settings" :done="step > 1") laksjl
    

		div
			q-separator
			q-card-actions(align='center')
				q-btn(flat color="primary" @click="close") Отмена
				q-btn(unelevated color="primary" @click="close") Применить
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
	dialog: {
		type: Boolean,
		default: false,
	},
})
const emit = defineEmits(['update:modelValue'])

const close = () => {
	emit('update:modelValue', false)
}

const mytab = ref('create')
const tabs = [
	{ id: 0, field: 'create', name: 'create', label: 'Создание БД', modified: false },
	{ id: 1, field: 'update', name: 'update', label: 'Обновление БД', modified: false },
	{
		id: 2,
		field: 'connect',
		name: 'connect',
		label: 'Подключение к существующей БД',
		modified: false,
	},
]

// const step = ref(1)
</script>

<style scoped lang="scss">
.edit {
	height: calc(100vh - 120px);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
}
.title {
	font-size: 1.5rem;
	text-align: center;
	color: $secondary;
	vertical-align: baseline;

	.q-icon {
		margin-right: 0.5rem;
		margin-top: -3px;
		font-size: 1.6rem;
	}
}
.close {
	position: absolute;
	top: 1rem;
	right: 1rem;
}
</style>
