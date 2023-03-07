<script setup lang="ts">
import { ref } from 'vue'

const typ = ref('MS Exchange Web Services')
const options = ['MS Exchange Web Services', 'SMT / POP3', 'MS Exchange']
const address = ref('')
const version = ref('2007 SP1')
const auth = ref('Простая')
const name = ref('')
const pass = ref('')
const ssl = ref(false)
</script>

<template lang="pug">
.post
	.form
		.label Тип сервера:
		q-select(v-model="typ" :options="options" dense outlined bg-color="white").inp
		.label E-mail сервера:
		q-input(v-model="email" dense outlined bg-color="white").inp
	fieldset(v-if="typ === 'MS Exchange Web Services'")
		legend MS Exchange Web Services
		.grd
			.label Адрес сервера для подключения:
			q-input(v-model="address" dense outlined bg-color="white").inp
			.label Версия сервиса:
			q-select(v-model="version" dense outlined bg-color="white").inp
			.label Аутентификация:
			q-select(v-model="auth" dense outlined bg-color="white").inp
			.label Имя пользователя:
			q-input(v-model="name" dense outlined bg-color="white").inp
			.label Пароль:
			q-input(v-model="pass" type="password" dense outlined bg-color="white").inp

	fieldset(v-if="typ === 'SMT / POP3'")
		legend SMT / POP3
		.grd
			.label Отправка:
			q-input(v-model="address" dense outlined bg-color="white").inp
			.label.text-bold SMPT Server
			.myrow
				q-input(v-model="address" dense outlined bg-color="white")
				q-checkbox(v-model="ssl" label="SSL" dense)
			.label Аутентификация:
			q-select(v-model="auth" dense outlined bg-color="white").inp
			.label Имя пользователя:
			q-input(v-model="name" dense outlined bg-color="white").inp
			.label Пароль:
			q-input(v-model="pass" type="password" dense outlined bg-color="white").inp
			.label.text-bold POP3 Server:
			.myrow
				q-input(v-model="address" dense outlined bg-color="white")
				q-checkbox(v-model="ssl" label="SSL" dense)
			.label Аутентификация:
			q-select(v-model="auth" dense outlined bg-color="white").inp
			.label Имя пользователя:
			q-input(v-model="name" dense outlined bg-color="white").inp
			.label Пароль:
			q-input(v-model="pass" type="password" dense outlined bg-color="white").inp

	fieldset(v-if="typ === 'MS Exchange'")
		legend MS Exchange
		.grd
			.label Профиль MS Exchange:
			q-input(v-model="address" dense outlined bg-color="white").inp
</template>

<style scoped lang="scss">
.post {
	display: grid;
	grid-template-columns: 3fr 4fr;
	justify-items: start;
	align-items: flex-start;
	column-gap: 1rem;
	row-gap: 0.5rem;
}
.form {
	width: 100%;
	display: grid;
	grid-template-columns: auto 1fr;
	justify-items: start;
	align-items: center;
	column-gap: 1rem;
	row-gap: 0.5rem;
}
fieldset {
	width: 100%;
	margin-top: -0.5rem;
}
.grd {
	display: grid;
	grid-template-columns: auto 1fr;
	justify-items: start;
	align-items: center;
	column-gap: 1rem;
	row-gap: 0.5rem;
}
.q-input,
.q-select {
	width: 100%;
	margin-bottom: 0;
}
.myrow {
	display: flex;
	gap: 1rem;
	width: 100%;
	.q-input {
		flex-grow: 1;
	}
}
</style>
