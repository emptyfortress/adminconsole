<script setup lang="ts">
import { ref } from 'vue'

const name = ref('Docsvision 5.5 Workflow Server')
const typ = ref('Автоматический')
const user = ref('')
const check = ref(false)
const delay = ref(0)
const iso = ref(false)
const jour = ref('')
const port = ref(8090)
const level = ref('Предупреждения')

const req = [(val: string) => (val && val.length > 0) || 'Это обязательное поле']
</script>

<template lang="pug">
div
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
		fieldset.first
			legend Управление службой
			q-card-actions(align="left")
				q-btn(unelevated size="sm" icon="mdi-play" color="secondary" label="Старт").start
				q-btn(unelevated size="sm" icon="mdi-restart" color="secondary" label="Рестарт").start
				q-btn(unelevated size="sm" icon="mdi-stop" color="secondary" label="Стоп").start
				q-checkbox(v-model="check" dense label="Перезапускать при неудачном старте").q-my-md
				.smform
					.label Задержка перед запуском, сек:
					q-input(v-model="delay" min="0" dense outlined bg-color="white" type="number")
					.label Очищать счетчик попыток, сек:
					q-input(v-model="delay" min="0" dense outlined bg-color="white" type="number")
	.second
		fieldset
			legend Параметры управления
			.third
				.digit
					.label Период поиска процессов, сек:
					q-input(v-model="delay" min="0" dense outlined bg-color="white" type="number")
					.label Макс. объем памяти, Мб:
					q-input(v-model="delay" min="0" dense outlined bg-color="white" type="number")
					.label Предел таймаутов функций:
					q-input(v-model="delay" min="0" dense outlined bg-color="white" type="number")
					.label Время ожидания выполнения функции в потоке, сек:
					q-input(v-model="delay" min="0" dense outlined bg-color="white" type="number")
				.digit
					.label Число процессов в пакете:
					q-input(v-model="delay" min="0" dense outlined bg-color="white" type="number")
					.label Размер пула шлюза:
					q-input(v-model="delay" min="0" dense outlined bg-color="white" type="number")
					.label Размер пула сессий:
					q-input(v-model="delay" min="0" dense outlined bg-color="white" type="number")
					.label Время ожидания выполнения метода StorageServer, сек:
					q-input(v-model="delay" min="0" dense outlined bg-color="white" type="number")
				q-checkbox(v-model="iso" label="Режим изоляции процесса").iso
		fieldset
			legend Прочие параметры
			.digit1
				.label Порт для удаленных вызовов:
				q-input(v-model="port" min="0" dense outlined bg-color="white" type="number")
				.label Имя файла журнала:
				q-input(v-model="jour" dense outlined bg-color="white" )
				.label Уровень журналирования:
				q-select(v-model="level" dense outlined bg-color="white" )
				.label Формат даты в имени журнала:
				q-input(v-model="jour" dense outlined bg-color="white" )
				q-btn(unelevated color="secondary" size="sm" label="Сбросить счетчики" ).iso



</template>

<style scoped lang="scss">
.divide {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	justify-items: start;
	align-items: flex-start;
	column-gap: 1rem;
}
.form {
	grid-template-columns: auto 1fr;
	justify-items: start;
	align-items: baseline;
	column-gap: 1rem;
	row-gap: 0.5rem;
	width: 100%;
	.q-input,
	.q-select {
		width: 100%;
	}
}
fieldset {
	width: 100%;
}
.first {
	margin-top: -0.4rem;
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
		width: 90px;
	}
}
.second {
	display: grid;
	grid-template-columns: 6fr 4fr;
	justify-items: start;
	align-items: stretch;
	column-gap: 0.5rem;
	row-gap: 0.5rem;
}
.third {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	justify-items: start;
	align-items: stretch;
	column-gap: 1rem;
	row-gap: 0.5rem;
}
.digit {
	display: grid;
	grid-template-columns: 200px 70px;
	justify-items: start;
	align-items: center;
	column-gap: 1rem;
	row-gap: 0.5rem;
}
.digit1 {
	display: grid;
	grid-template-columns: 200px 1fr;
	justify-items: start;
	align-items: center;
	column-gap: 1rem;
	row-gap: 0.5rem;
}
.iso {
	grid-column: 1/-1;
	margin-top: 1rem;
}
</style>
