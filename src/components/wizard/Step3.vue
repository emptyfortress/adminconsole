<script setup lang="ts"></script>

<template lang="pug">
.text-bold Укажите название и расположение(?) базы данных:
q-form.q-mt-md
	.form
		label Имя:
		q-input(v-model="type" dense outlined bg-color="white")
		label Псевдоним:
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
