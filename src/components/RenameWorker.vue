<template lang="pug">
q-dialog(:model-value="props.modelValue")
	q-card(style="min-width: 400px; padding: 1rem;")
		.row.items-center.q-pb-none
			.text-h6 Переименовать службу
			q-space
			q-btn(icon="close" flat round dense @click="close")
		q-form(@submit="addConnection(newname)")
			q-card-section
				q-input(autofocus v-model="newname" label="Имя службы" @submit="addConnection(newname)")
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
	name: string,
})
const emit = defineEmits(['rename', 'update:modelValue'])

const newname = ref(props.name)

const addConnection = (e: string) => {
	emit('rename', e)
	close()
}
const close = () => {
	emit('update:modelValue', false)
}
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
</style>
