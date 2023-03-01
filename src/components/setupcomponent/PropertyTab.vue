<script setup lang="ts">
const props = defineProps({
	bd: {
		type: Object,
		required: true,
	},
})
</script>

<template lang="pug">
.all
	.arch
		.title Свойства базы данных

		.proper
			label Имя базы данных:
			.val(contenteditable) {{props.bd.name}}
			label Псевдоним:
			.val(contenteditable) {{props.bd.psevdo}}
			label SQL server:
			.val(contenteditable) {{props.bd.server}}
			label Версия:
			.val(contenteditable) {{props.bd.version}}
			label Дата последнего обновления:
			.val(contenteditable) {{props.bd.date}}
			label Используется по умолчанию:
			q-checkbox(v-model="props.bd.def" dense)
	br
	.arch
		.title Таблицы
		.proper
			q-btn(unelevated color="primary" label="Местоположение служебных таблиц")
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
	justify-self: center;
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

.proper {
	width: 450px;
	background: var(--bg-grey);
	display: grid;
	grid-template-columns: auto 1fr;
	justify-items: start;
	align-items: center;
	column-gap: 1rem;
	row-gap: 1rem;
	margin: 0 auto;
	padding: 1rem;
}
label {
	color: #666;
}
</style>
