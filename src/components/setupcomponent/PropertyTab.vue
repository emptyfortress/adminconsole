<script setup lang="ts">
const props = defineProps({
	bd: {
		type: Object,
		required: true,
	},
})
</script>

<template lang="pug">
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
</template>

<style scoped lang="scss">
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
.title {
	text-align: center;
	font-size: 1.3rem;
}
</style>
