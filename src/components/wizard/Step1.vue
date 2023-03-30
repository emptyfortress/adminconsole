<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
	text: {
		type: String,
		default: 'Выберите сервер БД, под управлением которого будет работать создаваемая база данных:',
	},
})

const type = ref('')
</script>

<template lang="pug">
.text-bold {{ props.text }}
q-form.q-mt-md
	.form
		label Тип сервера:
		q-input(v-model="type" dense outlined bg-color="white")
		label Имя сервера:
		q-input(v-model="type" dense outlined bg-color="white")
		label Порт:
		q-input(v-model="type" dense outlined bg-color="white")
		label Проверка подлинности:
		q-input(v-model="type" dense outlined bg-color="white")
		label Логин:
		q-input(v-model="type" dense outlined bg-color="white")
		label Пароль:
		q-input(v-model="type" dense outlined bg-color="white")
</template>

<style scoped lang="scss">
.form {
	display: grid;
	grid-template-columns: auto 300px;
	justify-items: start;
	align-items: baseline;
	column-gap: 1rem;
	row-gap: 0.5rem;
	margin: 0 auto;
}
.q-input {
	width: 100%;
}
</style>
