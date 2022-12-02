<template lang="pug">
q-form(ref="form" @validation-error="setError" @validation-success="setSuccess" no-error-focus)
	.blo
		.label Файл журнала:
		q-input(dense outlined v-model="store.server.server.journal" bg-color="white" :rules="req" @blur="form.validate()")
		.label Адрес хранилища настроек:
		q-input(dense outlined v-model="store.server.server.address" bg-color="white" :rules="req" @blur="form.validate()")
		div
		q-checkbox(dense v-model="store.server.server.checkversion" label="Проверять версию базы данных")
		div
		.row
			q-checkbox(dense v-model="store.server.server.counters" label="Включить счетчики производительности")
			q-btn(unelevated color="secondary" size="sm").q-ml-lg Обнулить счетчики
	fieldset
		legend Контроль сети
		q-checkbox(dense v-model="store.server.server.netcontrol" label="Использовать контроль сети")
		.blo
			.label Время отклика на стандартных операциях, не более (сек.)
			q-input(dense outlined type="number" v-model="store.server.server.simpletime" bg-color="white").dig
			.label Время отклика на сложных операциях, не более (сек.)
			q-input(dense outlined type="number" v-model="store.server.server.complextime" bg-color="white").dig
	fieldset
		legend Режим кэширования
		q-checkbox(dense v-model="store.server.server.filecache" label="Файлы").q-mr-lg
		q-checkbox(dense v-model="store.server.server.cardcache" label="Карточки").q-mr-lg
		q-checkbox(dense v-model="store.server.server.spravcache" label="Справочники" disable).q-mr-lg
		q-btn(unelevated color="secondary" size="sm") Очистить клиентский кэш
	//- q-btn(type="submit" label="submit")

</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useStore } from '@/stores/store'

const store = useStore()

const form = ref()
const req = [(val: string) => (val && val.length > 0) || 'Это обязательное поле']

const emit = defineEmits(['change', 'haserror', 'noerror'])

const setError = () => {
	emit('haserror')
}
const setSuccess = () => {
	emit('noerror')
}

watch(store.server.server, (value) => {
	if (value) {
		store.changeDefaults(1)
		emit('change')
	}
})
</script>

<style scoped lang="scss">
.blo {
	display: grid;
	align-items: start;
	grid-template-columns: auto 1fr;
	column-gap: 1rem;
}
fieldset .blo {
	row-gap: 0.5rem;
}
.label {
	line-height: 38px;
}
.q-input {
	max-width: 450px;
}
legend {
	padding: 0 5px;
}
fieldset {
	margin-top: 1rem;
	border: 3px double #aaa;
	padding: 1rem;
}
.dig {
	width: 100px;
}
:deep(.q-field__bottom) {
	padding: 2px 3px;
}
</style>
