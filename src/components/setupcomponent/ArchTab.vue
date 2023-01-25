<script setup lang="ts">
import { ref } from 'vue'

const rasp = ref('one')
const hour = ref(1)
const hour1 = ref(1)
const hour2 = ref(1)
const week = ref('понедельник')
const options = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье']
</script>

<template lang="pug">
.all
	.title Расписание
	.arch
		div Архивировать файлы и карточки:

		q-list.full-width
			q-item(tag="label")
				q-item-section(avatar)
					q-radio(v-model="rasp" val="one")
				q-item-section
					.row.justify-start.items-center.q-gutter-sm
						div Каждые
						q-input(v-model="hour" type="number" dense).smm
						div часов


			q-item(tag="label")
				q-item-section(avatar)
					q-radio(v-model="rasp" val="two")
				q-item-section
					.row.justify-start.items-center.q-gutter-sm
						div Ежедневно в
						q-input(v-model="hour1" type="number" dense).smm
						div часов

			q-item(tag="label")
				q-item-section(avatar)
					q-radio(v-model="rasp" val="three")
				q-item-section
					.row.justify-start.items-center.q-gutter-sm
						div Раз в неделю в
						q-select(v-model="week" dense :options="options").sma
						div в
						q-input(v-model="hour2" type="number" dense).smm
						div часов

			q-item(tag="label")
				q-item-section(avatar)
					q-radio(v-model="rasp" val="four")
				q-item-section Не архивировать файлы и карточки автоматически

			q-item(tag="label")
				q-item-section(avatar)
					q-radio(v-model="rasp" val="five")
				q-item-section Нестандартное описание архивирования
					
					
	br
	.title Управление
	.arch
		p fuck
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
.arch {
	background: var(--bg-grey);
	padding: 1rem;
	display: grid;
	grid-template-columns: auto 1fr;
	align-items: center;
	column-gap: 1rem;
	row-gap: 0.5rem;
}
label {
	width: 100%;
}
.smm {
	width: 100px;
}
.sma {
	width: 200px;
}
:deep(.q-field__native) {
	font-size: 1rem;
	text-align: center;
}
</style>
