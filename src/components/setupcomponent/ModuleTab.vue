<script setup lang="ts">
import { ref } from 'vue'
import { useWiz } from '@/stores/wiz'
import Step7 from '@/components/wizard/Step7.vue'

const wiz = useWiz()

const updateState = ref(false)
const installState = ref(false)

const update = () => {
	updateState.value = true
	setTimeout(() => {
		wiz.resetCheck()
	}, 5000)
}
const load = () => {
	installState.value = true
	setTimeout(() => {
		wiz.moveCheck()
		wiz.resetCheck()
	}, 5000)
}
</script>

<template lang="pug">
.all
	.arch.archnew
		.title Дополнительные настройки модулей
		.column
			.text-bold Обновить модули:
			q-checkbox(v-for="item in wiz.check1"
				:key="item.id"
				:label="item.label"
				v-model="item.val")
		.column
			.text-bold Загрузить модули:
			.done(v-if="wiz.check2.length === 0") Все модули загружены
			q-checkbox(v-for="item in wiz.check2"
				:key="item.id"
				:label="item.label"
				v-model="item.val")
		div
		q-btn(unelevated color="primary" :disable="wiz.checkState1" size="sm" label="Обновить" @click="update").q-mt-md 
		q-btn(unelevated color="primary" :disable="wiz.checkState2" size="sm" label="Загрузить" @click="load").q-mt-md 
	.arch.q-mt-sm(v-if="updateState")
		component(:is="Step7" hint="Обновление модулей" result="Модули обновлены!" )
	.arch.q-mt-sm(v-if="installState")
		component(:is="Step7" hint="Загрузка модулей" result="Модули загружены!" )
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
	align-self: center;
}
.dis {
	opacity: 0.3;
}
.archnew {
	background: var(--bg-grey);
	padding: 1rem;
	display: grid;
	grid-template-columns: 200px 1fr 1fr;
	align-items: top;
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
.q-checkbox {
	margin-left: -0.5rem;
}
.done {
	margin-top: 2rem;
}
</style>
