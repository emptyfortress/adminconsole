<template lang="pug">
div
	.grey(:class="{ edit : editMode1}")
		.close
			q-btn(round flat icon="mdi-restart")
				q-tooltip Перезапустить процесс
			q-btn(round flat icon="mdi-trash-can-outline")
				q-tooltip Удалить процесс
				q-menu
					q-list
						q-item(clickable v-close-popup @click="del(name)").pink
							q-item-section Подтверждаю

		.current {{ name }}
		br
		.form
			.label Имя процесса:
			q-input(v-model="form.name" dense outlined bg-color="white").rem
			div
			.label Тип конфигурации:
			q-select(v-model="form.configtype" dense outlined :options="options" bg-color="white").rem
			div

		.grid
			.border
				.form
					.label Соединение Docsvision:
					q-select(v-model="form.connection" dense outlined :options="options" bg-color="white").rem
					.label Соединение Почтовый сервер:
					q-select(v-model="form.email" dense outlined :options="options" bg-color="white").rem
			.border
				.row.items-center.q-gutter-x-sm
					.label Таймаут:
					q-input(v-model="form.timeout" dense outlined bg-color="white" type="number").small
				.column.q-mt-sm
					q-checkbox(v-model="form.turn" dense label="Отключено")
					q-checkbox(v-model="form.x86" dense label="Использовать x86")

		q-checkbox(v-model="form.def1" dense label="Использовать по умолчанию")
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
const options = ['Option 1', 'Не задано']
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

watch(form, (value) => {
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
.border {
	border: 4px double #ccc;
	padding: 0.5rem;
	margin: 1rem 0;
	.form {
		column-gap: 0.3rem;
	}
}
.ed {
	border-bottom: 1px dotted $primary;
	height: 28px;
}
.form {
	grid-template-columns: 160px 1fr 95px;
}
.grid {
	margin-top: 0.5rem;
	display: grid;
	grid-template-columns: auto 194px;
	gap: 1rem;
	.form {
		grid-template-columns: 160px 1fr;
	}
}
.small {
	width: 80px;
	font-size: 1rem;
}
</style>
