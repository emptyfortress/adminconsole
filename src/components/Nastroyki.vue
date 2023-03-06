<script setup lang="ts">
import { ref } from 'vue'

const path = ref(
	'C:\\Program Files\\Docsvision\\Workflow\\5.5\\Templates\\1049\\ProcessTemplate.xml'
)
const cert = ref('')
</script>

<template lang="pug">
div
	fieldset
		legend Шаблоны и настройки бизнес процессов
		.form1
			.label Путь к справочникам и шаблонам:
			q-input(v-model="path" dense outlined bg-color="white")
			div
				q-btn(flat round icon="mdi-dots-horizontal" color="primary").q-mr-sm
				q-btn(unelevated color="primary" label="Установить") 

	fieldset
		legend Дополнительно
		.form1
			.label Сертификат:
			q-input(v-model="cert" dense outlined bg-color="white")
			q-btn(flat round icon="mdi-dots-horizontal" color="primary") 

</template>

<style scoped lang="scss">
.form1 {
	display: grid;
	grid-template-columns: 230px 1fr auto;
	align-items: baseline;
	justify-content: start;
	row-gap: 0.4rem;
	column-gap: 1rem;
}
</style>
