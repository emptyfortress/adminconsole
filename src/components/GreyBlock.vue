<template lang="pug">
div
	.grey(:class="{ edit : editMode1}")
		.close
			q-btn(round flat icon="mdi-content-duplicate" @click="duble")
			q-btn(round flat icon="mdi-trash-can-outline")
				q-menu
					q-list
						q-item(clickable v-close-popup @click="del(name)").pink
							q-item-section Подтверждаю
		.current {{ name }}
		br
		.form
			.label Имя соединения:
			q-input(v-model="form.name" dense outlined bg-color="white")
			.label Тип сервера:
			q-select(v-model="form.servertype" dense outlined :options="options" bg-color="white").rem
			.label Email сервера:
			q-input(v-model="form.email" dense outlined bg-color="white")

		.border
			.form
				.label Адрес сервера для подключения:
				q-input(v-model="form.server" dense outlined bg-color="white")
				.label Версия сервиса:
				q-input(v-model="form.version" dense outlined bg-color="white")
				.label Аутентификация:
				q-input(v-model="form.auth" dense outlined bg-color="white")
				.label Имя пользователя:
				q-input(v-model="form.login" dense outlined bg-color="white")
				.label Пароль:
				q-input(v-model="form.password" dense outlined bg-color="white" type="password")

		.q-gutter-x-lg
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
const emit = defineEmits(['delete', 'duble'])

const editMode1 = ref(false)
const name = ref(props.name)
const options = ['MS Exchange', 'SMPT/POP3', 'MS Exchange Web Services']
const form = reactive({
	name: props.name,
	servertype: 'MS Exchange',
	email: '',
	server: '',
	version: '',
	auth: '',
	login: '',
	password: '',
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
	emit('delete', e)
}
const duble = () => {
	emit('duble', name)
}
</script>

<style scoped lang="scss">
.grey {
	background: #efefef;
	margin-top: 2rem;
	position: relative;
	border-radius: 0.3rem;
	padding: 1rem;
	&.edit {
		border: 1px dashed red;
	}
}
.border {
	border: 4px double #ccc;
	padding: 0.5rem;
	margin: 1rem 0;
	.form {
		column-gap: 0.3rem;
	}
}
.close {
	position: absolute;
	top: 0.5rem;
	right: 0.5rem;
}
.current {
	position: absolute;
	top: -12px;
	left: 15px;
	background: $warning;
	font-size: 0.9rem;
	padding: 1px 15px;
	border-radius: 20px;
}
.form {
	display: grid;
	grid-template-columns: 160px 350px;
	align-items: center;
	justify-content: start;
	row-gap: 0.4rem;
	column-gap: 1rem;
}
.rem {
	font-size: 1rem;
}
.ed {
	border-bottom: 1px dotted $primary;
	height: 28px;
}
</style>
