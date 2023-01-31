<script setup lang="ts">
import { ref } from 'vue'

const hran = ref(false)
const day = ref(0)
const hour = ref(1)
const hour1 = ref(10)
const hour2 = ref(10)
const hour3 = ref(600)
const rasp = ref('one')
const week = ref('понедельник')
const options = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье']
const path = ref('')
</script>

<template lang="pug">
.all
	.arch
		.title Корзина
		.column
			.check
				q-checkbox(v-model="hran")
				div Не хранить карточки более
				q-input(dense type="number" v-model="day").smm
				div дней. (0 - хранить всегда)
			br
			div Очищать корзину:
				q-list.full-width
					q-item(tag="label" dense)
						q-item-section(avatar)
							q-radio(v-model="rasp" val="one")
						q-item-section
							.row.justify-start.items-center.q-gutter-sm
								div Каждые
								q-input(v-model="hour" type="number" dense).smm
								div часов
					q-item(tag="label" dense)
						q-item-section(avatar)
							q-radio(v-model="rasp" val="two")
						q-item-section
							.row.justify-start.items-center.q-gutter-sm
								div Ежедневно в
								q-input(v-model="hour1" type="number" dense).smm
								div часов

					q-item(tag="label" dense)
						q-item-section(avatar)
							q-radio(v-model="rasp" val="three")
						q-item-section
							.row.justify-start.items-center.q-gutter-sm
								div Раз в неделю в
								q-select(v-model="week" dense :options="options").sma
								div в
								q-input(v-model="hour2" type="number" dense).smm
								div часов

					q-item(tag="label" dense)
						q-item-section(avatar)
							q-radio(v-model="rasp" val="four")
						q-item-section Не очищать корзину автоматически

			q-btn(unelevated color="primary" label="Очистить немедленно").bt

	br
	.arch
		.title Сценарий обслуживания
		.column
			.check
				q-input(dense v-model="path" label="Путь к файлу сценария").cs
				q-btn(unelevated round icon="mdi-dots-horizontal" dense).wh 
			.check
				div Таймаут
				q-input(v-model="hour3" type="number" dense).smm
				div сек.
				q-btn(unelevated color="secondary" label="Выполнить" size="sm").q-ml-xl
		
</template>

<style scoped lang="scss">
.all {
	width: 900px;
	margin: 0 auto;
}
.title {
	font-size: 0.8rem;
	text-transform: uppercase;
	color: $secondary;
}
.check {
	display: flex;
	justify-content: flex-start;
	gap: 0.5rem;
	align-items: baseline;
	.q-checkbox {
		transform: translateY(15px);
	}
}
.smm {
	width: 70px;
	:deep(.q-field__native) {
		text-align: center;
		font-size: 1.1rem;
	}
}
.sma {
	width: 200px;
}
.arch {
	background: var(--bg-grey);
	padding: 1rem;
	display: grid;
	grid-template-columns: 250px 1fr;
	align-items: center;
	justify-items: start;
	column-gap: 1rem;
	row-gap: 0.5rem;
}
label {
	width: 100%;
}
.bt {
	width: 220px;
	margin-top: 1rem;
	margin-left: 1.2rem;
}
.cs {
	width: 350px;
}
.wh .q-icon {
	color: red;
}
</style>
