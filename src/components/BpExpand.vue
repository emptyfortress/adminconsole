<script setup lang="ts">
import { ref } from 'vue'

const name = ref('Docsvision 5.5 Workflow Server')
const typ = ref('Автоматический')
const user = ref('')
const check = ref(false)
</script>

<template lang="pug">
.divide
	.form
		.label Имя службы:
		q-input(v-model="name" dense outlined bg-color="white" lazy-rules :rules="req").inp
		.label Тип запуска:
		q-select(v-model="typ" dense outlined bg-color="white" lazy-rules :rules="req").inp
		.label Учетная запись:
		q-input(v-model="user" dense outlined bg-color="white" lazy-rules :rules="req").inp
		.label Пароль:
		q-input(v-model="user" dense outlined bg-color="white" lazy-rules :rules="req").inp
	fieldset
		legend Управление службой
		q-card-actions(align="left")
			q-btn(unelevated size="sm" icon="mdi-play" color="secondary" label="Старт").start
			q-btn(unelevated size="sm" icon="mdi-restart" color="secondary" label="Рестарт").start
			q-btn(unelevated size="sm" icon="mdi-stop" color="secondary" label="Стоп").start
			q-checkbox(v-model="check" dense label="Перезапускать при неудачном старте").q-my-md
			.smform
				.label Задержка перед запуском, сек:
				q-input(v-model="user" dense outlined bg-color="white" type="number")
				.label Очищать счетчик попыток, сек:
				q-input(v-model="user" dense outlined bg-color="white" type="number")

</template>

<style scoped lang="scss">
.divide {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	justify-items: start;
	align-items: flex-start;
	column-gap: 3rem;
}
.form {
	grid-template-columns: auto 1fr;
	justify-items: start;
	align-items: center;
	column-gap: 1rem;
	row-gap: 0.5rem;
	width: 100%;
	.q-input,
	.q-select {
		width: 100%;
	}
}
fieldset {
	margin-top: 0;
	width: 100%;
}
.start :deep(.q-icon) {
	color: white;
}
.smform {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 1rem;
	.q-input {
		width: 70px;
	}
}
</style>
