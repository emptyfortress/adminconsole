<script setup lang="ts">
import { watch } from 'vue'
import { useBp } from '@/stores/bp'

const emit = defineEmits(['change'])

const bp = useBp()

watch(bp.nastr, (value) => {
	if (value) {
		emit('change')
	}
})
</script>

<template lang="pug">
div
	fieldset
		legend Шаблоны и настройки бизнес процессов
		.form1
			.label Путь к справочникам и шаблонам:
			q-input(v-model="bp.nastr.path" dense outlined bg-color="white")
			div
				q-btn(flat round icon="mdi-dots-horizontal" color="primary").q-mr-sm
				q-btn(unelevated color="secondary" size="sm" label="Настроить").q-mr-sm 
				q-btn(unelevated color="secondary" size="sm" label="Установить") 

	fieldset
		legend Локализация полей
		.radio
			.label Язык по умолчанию:
			div
				q-radio(v-model="bp.nastr.def" val="ru" label="Русский")
				q-radio(v-model="bp.nastr.def" val="en" label="English")
			.label Режим локализации полей:
			div
				q-radio(v-model="bp.nastr.reg" val="one" label="Выкл.")
				q-radio(v-model="bp.nastr.reg" val="two" label="Только чтение")
				q-radio(v-model="bp.nastr.reg" val="three" label="Только запись")
				q-radio(v-model="bp.nastr.reg" val="foru" label="Вкл.")
				q-radio(v-model="bp.nastr.reg" val="five" label="Особый режим")

	fieldset
		legend Дополнительно
		.form1
			.label Сертификат:
			q-input(v-model="bp.nastr.cert" dense outlined bg-color="white")
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
fieldset:first-child {
	/* width: 100%; */
	margin-top: -0.5rem;
}
.radio {
	display: grid;
	grid-template-columns: auto 1fr;
	justify-items: start;
	align-items: baseline;
	column-gap: 1rem;
	row-gap: 0.5rem;
}
.q-radio {
	margin-right: 1rem;
}
</style>
