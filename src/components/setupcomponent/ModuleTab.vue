<script setup lang="ts">
import { useWiz } from '@/stores/wiz'
const wiz = useWiz()
</script>

<template lang="pug">
.all
	.arch
		.title Загрузить или обновить модули:
		.column
			q-checkbox(v-for="item in wiz.check1"
				checked-icon="mdi-checkbox-marked-outline"
				unchecked-icon="mdi-checkbox-blank-outline"
				indeterminate-icon="mdi-reload"
				indeterminate-value="maybe"
				:toggle-indeterminate="true"
				:key="item.id"
				:label="item.label"
				v-model="item.val")
		div
		q-btn(unelevated color="primary" label="Обновить" @click="") 
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
}
.dis {
	opacity: 0.3;
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
.more {
	display: grid;
	grid-template-columns: auto 1fr;
	justify-items: start;
	align-items: center;
	column-gap: 1rem;
	row-gap: 0.5rem;
}
.q-select,
.q-input {
	width: 350px;
	font-size: 1rem;
}
</style>
