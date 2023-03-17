<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
	bd: {
		type: Object,
		required: true,
	},
})

const tabl1 = ref('laksdlkj')
const options = [
	'UseDefaultOrCurrent',
	'UseOwnDatabase',
	'UseOuterDatabase',
	'UseTemporaryDatabase',
]
const tables = [
	{ id: 0, label: 'ChangeObjectDataBase', val: 'UseTemporaryDatabase' },
	{ id: 1, label: 'CursorDataBaseType', val: 'UseTemporaryDatabase' },
	{ id: 2, label: 'FileCursorDataBaseType', val: 'UseOwnDatabase' },
	{ id: 3, label: 'IconDataBaseType', val: 'UseTemporaryDatabase' },
	{ id: 4, label: 'KeysetDataBaseType', val: 'UseTemporaryDatabase' },
	{ id: 5, label: 'SearchDataBaseType', val: 'UseTemporaryDatabase' },
]
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
		.title Расположение таблиц
		.tabl
			template(v-for="item in tables" :key="item.id")
				label {{ item.label }}:
				q-select(v-model="item.val" :options="options" dense)
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
	justify-self: left;
	margin-left: 4rem;
}
.arch {
	background: var(--bg-grey);
	padding: 1rem;
	display: grid;
	grid-template-columns: 300px 1fr;
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
	// margin: 0 auto;
	padding: 1rem;
}
label {
	color: #666;
}
.tabl {
	width: 100%;
	display: grid;
	grid-template-columns: auto 1fr;
	justify-items: start;
	align-items: center;
	column-gap: 2rem;
	row-gap: 0.2rem;
	padding-left: 1rem;
}
</style>
