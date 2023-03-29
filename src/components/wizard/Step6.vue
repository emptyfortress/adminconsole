<script setup lang="ts">
import { reactive } from 'vue'
const check = reactive([
	{ id: 0, label: 'Базовые объекты', val: false },
	{ id: 1, label: 'Управление документами', val: false },
	{ id: 2, label: 'Web-client', val: false },
	{ id: 3, label: 'Управление процессами', val: false },
])
</script>

<template lang="pug">
.text-bold Дополнительно подгрузить в базу следующие модули:
.column.q-mt-md
	q-checkbox(v-for="item in check" :key="item.id" :label="item.label" v-model="item.val")

</template>

<style scoped lang="scss">
.form {
	width: 600px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	justify-items: start;
	align-items: baseline;
	column-gap: 1rem;
	row-gap: 0.5rem;
	margin: 1rem auto;
	padding: 1rem;
}
label {
	color: #666;
}
</style>
