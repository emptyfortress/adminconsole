<template lang="pug">
div
	.grey(:class="{ edit : editMode1}")
		.close
			q-btn(round flat icon="mdi-restart")
				q-tooltip( anchor="top middle" self="bottom middle") Перезапустить процесс
			q-btn(round flat icon="mdi-trash-can-outline")
				q-tooltip( anchor="top middle" self="bottom middle") Удалить процесс
				q-menu
					q-list
						q-item(clickable v-close-popup @click="del(name)").pink
							q-item-section Удалить

		.current {{ name }}
		br
		.threecol
			.border.zero
				.form
					.label Имя процесса:
					q-input(v-model="form.name" dense outlined bg-color="white").rem
					.label Тип конфигурации:
					q-select(v-model="form.configtype" dense outlined :options="options" bg-color="white").rem

			.border
				.form.form1
					.label Соединение Docsvision:
					q-select(v-model="form.connection" dense outlined :options="options" bg-color="white").rem
					template(v-if="form.configtype == 'Базовые объекты'")
						.label Соединение Почтовый сервер:
						q-select(v-model="form.email" dense outlined :options="options" bg-color="white").rem

			.border
				.row.items-center.q-gutter-x-sm
					.label Таймаут, сек.:
					q-input(v-model="form.timeout" dense outlined bg-color="white" type="number").small
				.column.q-mt-sm
					q-checkbox(v-model="form.turn" dense label="Отключено")
					q-checkbox(v-model="form.x86" dense label="Использовать x86")

			.border.one(v-if="form.configtype == 'Обслуживание ЭП'")
				.sert
					.label Дней до окончания действия сертификата:
					q-input(v-model="form.timeout" dense outlined bg-color="white" type="number")
					.label Количество карточек:
					q-input(v-model="form.timeout" dense outlined bg-color="white" type="number")
					.label Интервал между запросами, сек.:
					q-input(v-model="form.timeout" dense outlined bg-color="white" type="number")

			.border.one(v-if="form.configtype == 'Коннектор к реестру МЧД'")
				.sert
					.label Сервис по работе с МЧД:
					q-select(v-model="mcd" dense outlined :options="options1" bg-color="white").rem
					.label API-ключ:
					q-input(v-model="api" dense outlined bg-color="white" type="text")
					.label Интервал между запросами, мс.:
					q-input(v-model="form.timeout" dense outlined bg-color="white" type="number")

			div(v-if="form.configtype !== 'Базовые объекты'")
			q-checkbox.q-mt-md(v-model="form.def1" dense label="Использовать по умолчанию")
		q-card-actions(align="right" v-if="editMode1")
			q-btn(flat label="Отмена" @click="editMode1 = false")
			q-btn(unelevated color="primary" label="Сохранить" @click="save1")
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'

const props = defineProps({
	name: {
		type: String,
		default: 'name',
	},
})
const emit = defineEmits(['del'])

const editMode1 = ref(false)
const name = ref(props.name)
const options = [
	'Базовые объекты',
	'Обслуживание ЭП',
	'Коннектор к реестру МЧД',
]
const options1 = ['Контур.Доверенность', 'Option 1', 'Option 2', 'Option 3']
const mcd = ref('Контур.Доверенность')
const api = ref('931a4d85-ef75-8f5e-4363-e5ee1e06bd1e')
const form = reactive({
	name: props.name,
	configtype: 'Базовые объекты',
	connection: 'Sol2016',
	email: 'd6d224',
	server: '',
	timeout: 0,
	turn: false,
	x86: false,
	def1: false,
})

watch(form, value => {
	if (value) {
		editMode1.value = true
	}
})
const save1 = () => {
	name.value = form.name
	editMode1.value = false
}
const del = (e: string) => {
	emit('del', e)
}
</script>

<style scoped lang="scss">
.threecol {
	display: grid;
	grid-template-columns: 2fr 2fr 1fr;
	gap: 0.5rem;
}
.one {
	grid-column: 2/4;
}
@media screen and (max-width: 1024px) {
	.threecol {
		grid-template-columns: 2fr 1fr;
	}
	.zero,
	.one {
		grid-column: 1/-1;
	}
}
@media screen and (max-width: 700px) {
	.threecol {
		grid-template-columns: 1fr;
	}
}
.border {
	border: 4px double #ccc;
	padding: 0.5rem;
	.form {
		column-gap: 0.3rem;
	}
}
.ed {
	border-bottom: 1px dotted $primary;
	height: 28px;
}
.form {
	grid-template-columns: 200px 1fr;
}
.form1 {
	grid-template-columns: 200px 1fr;
}
.grids {
	margin-top: 0.5rem;
	display: grid;
	grid-template-columns: auto 210px;
	gap: 1rem;
	.form {
		grid-template-columns: 160px 1fr;
	}
}
.small {
	width: 80px;
	font-size: 1rem;
}
.close {
	top: 0;
}
.sert {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 0.5rem;
	align-items: center;
}
</style>
