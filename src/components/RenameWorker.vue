<template lang="pug">
q-dialog(:model-value="props.modelValue")
	q-card(style="min-width: 400px; padding: 1rem;")
		.row.items-center.q-pb-none
			.text-h6 Переименовать службу
			q-space
			q-btn(icon="close" flat round dense @click="close")
		q-form(@submit="addConnection")
			q-card-section
				q-input(autofocus :model-value="props.name" label="Имя службы" @update:model-value="test($event.target.value)")
			q-card-actions(align="right")
				q-btn(flat color="primary" label="Отмена" @click="close")
				q-btn(unelevated color="primary" type="submit" label="Сохранить")

</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
	modelValue: {
		type: Boolean,
		default: false,
	},
	name: String,
})
const emit = defineEmits(['rename', 'update:modelValue'])

const test = e => {
	console.log(e)
}
const addConnection = e => {
	// emit('rename', e)
	console.log(e)
	// close()
}
const close = () => {
	emit('update:modelValue', false)
}
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
</style>
