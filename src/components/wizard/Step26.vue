<script setup lang="ts"></script>

<template lang="pug">
.mygrid
	.text-bold.text-negative
		q-icon(name="mdi-alert" color="negative" size="md").q-mr-md
		span Внимание!
	div Обновление базы данных может занять длительное время. Пользователи и сервисы, использующие эту базу данных, будут отключены, и не смогут подключиться к ней до окончания процесса обновления.
</template>

<style scoped lang="scss">
.mygrid {
	display: grid;
	grid-template-columns: auto 1fr;
	justify-content: start;
	align-items: center;
	column-gap: 3rem;
}
</style>
