<script setup lang="ts">
import { ref, computed, reactive } from 'vue'

const mode = ref('journal')
const query = ref('')
const date = ref('2019/02/01')
const list = ref(true)
const shab = [
	'Текущая неделя',
	'Текущий месяц',
	'Текущий квартал',
	'Текущий год',
	'Прошлая неделя',
	'Прошлый месяц',
	'Прошлый квартал',
	'Прошлый год',
]
const jour = reactive([
	{ selected: false, label: '10.05.2021' },
	{ selected: false, label: '11.05.2021' },
	{ selected: false, label: '12.05.2021' },
	{ selected: false, label: '13.05.2021' },
	{ selected: false, label: '14.05.2021' },
	{ selected: false, label: '15.05.2021' },
	{ selected: false, label: '16.05.2021' },
	{ selected: false, label: '17.05.2021' },
	{ selected: false, label: '18.05.2021' },
	{ selected: false, label: '19.05.2021' },
	{ selected: false, label: '20.05.2021' },
	{ selected: false, label: '21.05.2021' },
	{ selected: false, label: '22.05.2021' },
	{ selected: false, label: '23.05.2021' },
	{ selected: false, label: '24.05.2021' },
])
const filtered = computed(() => {
	return !!query.value
		? jour.filter(item => item.label.includes(query.value))
		: jour
})
const toggle = () => {
	list.value = !list.value
}
const check = ref(false)
</script>

<template lang="pug">
q-page(padding)
	.grid
		img(src="@/assets/img/image.png")
		q-btn(dense flat round icon="mdi-filter") 
			q-menu
				q-card
					q-card-section.q-gutter-x-md
						q-radio(dense label="Журнал" v-model="mode" val="journal")
						q-radio(dense label="Дата" v-model="mode" val="single")
						q-radio(dense label="Интервал" v-model="mode" val="range")

					template(v-if="mode == 'journal'")
						q-input(v-model="query" dense filled clearable)
							template(v-slot:prepend)
								q-icon(name="mdi-magnify")
						q-scroll-area(style="height: 250px")
							q-list(dense)
								q-item(clickable tag="label" v-for="item in filtered" :key="item.label")
									q-item-section(side)
										q-checkbox(v-model="item.selected")
									q-item-section {{ item.label}}

					template(v-if="mode == 'single'")
						q-input(v-model="date" dense filled)
							template(v-slot:append v-if="mode == 'range'")
								q-icon.cursor-pointer(name="mdi-calendar-blank" color="primary" @click="toggle")
						q-date( v-model="date" today-btn )

					template(v-if="mode == 'range'")
						q-input(v-model="date" dense filled)
							template(v-slot:append v-if="mode == 'range'")
								q-icon.cursor-pointer(name="mdi-calendar-blank" color="primary" @click="toggle")
						template(v-if="list")
							q-list(dense)
								q-item(clickable v-for="item in shab" :key="item" :class="{bord : item == 'Текущий год'}")
									q-item-section
										q-item-label {{ item }}

						template(v-else)
							q-date( v-model="date" today-btn range)
					.row.justify-between.items-center
						q-btn.red(flat round icon="mdi-trash-can-outline" @click="") 
						q-btn(flat color="primary" label="Применить" @click="") 

</template>

<style scoped lang="scss">
.grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	justify-items: start;
	align-items: start;
	column-gap: 0.5rem;
}
.q-card {
	padding: 1rem;
}
.q-radio {
	font-size: 0.8rem;
}
.q-input {
	margin-top: 0.5rem;
	margin-bottom: 0.8rem;
}
:deep(.red .q-icon) {
	color: $negative;
}
:deep(.q-date__header-today .q-icon) {
	color: white;
}
.bord {
	border-bottom: 1px solid #ccc;
}
</style>
