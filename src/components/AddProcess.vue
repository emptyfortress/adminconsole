<template lang="pug">
q-dialog(v-model="props.show")
	q-card(style="min-width: 400px; padding: 1rem;")
		.row.items-center.q-pb-none
			.text-h6 Подключить процесс
			q-space
			q-btn(icon="close" flat round dense @click="close")
		q-card-section
			q-input(autofocus v-model="newname" label="Имя процесса")
			q-select(v-model="config" label="Тип конфигурации" :options="options")

		q-card-actions(align="right")
			q-btn(flat label="Отмена"  @click="close")
			q-btn(unelevated color="primary" label="Добавить" v-close-popup @click="addConnection(newname)")

</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
	show: Boolean,
})
const emit = defineEmits(['add', 'close'])

const newname = ref('name')
const config = ref('Не выбрано')
const options = ['laskdj', 'laksj', 'Не выбрано']

const addConnection = (e: string) => {
	emit('add', e)
}
const close = () => {
	emit('close')
}
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
</style>
