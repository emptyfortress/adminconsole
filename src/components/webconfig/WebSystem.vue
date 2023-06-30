<script setup lang="ts">
import { ref, watch } from 'vue'
import { useStore } from '@/stores/store'
import { req, reqnum } from '@/utils/utils'

const store = useStore()
const form = ref()
const emit = defineEmits(['change', 'haserror', 'noerror'])

watch(store.wc.system, (value) => {
	if (value) {
		store.changeWebDefaults(2)
		emit('change')
	}
})
</script>

<template lang="pug">
q-form(ref="form" @validation-error="$emit('haserror')" @validation-success="$emit('noerror')" no-error-focus)
	.blo
		.label Максимальный таймаут, мс:
		q-input.short(dense outlined type="number" v-model="store.wc.system.timeout" bg-color="white" :rules="reqnum" @blur="form.validate()")
		.label Задержка работы счетчиков, мс:
		q-input.short(dense outlined type="number" v-model="store.wc.system.counters" bg-color="white" :rules="reqnum" @blur="form.validate()")
		.label Автоматическое логирование:
		div
			q-radio.q-mr-lg(v-model="store.wc.system.log" :val="true") Да
			q-radio(v-model="store.wc.system.log" :val="false") Нет
		.label Порт:
		q-input.short(dense outlined type="number" v-model="store.wc.system.port" bg-color="white" :rules="reqnum" @blur="form.validate()")
		.label Автоматическое обновление справочников:
		q-select.short(dense outlined v-model="store.wc.system.autorefresh" bg-color="white" rules="true" @blur="form.validate()")
		.label Интервал обновления справочников, сек.:
		q-input.short(dense outlined type="number" v-model="store.wc.system.interval" bg-color="white" :rules="reqnum" @blur="form.validate()")
		.label Адрес формы обратной связи:
		q-input(dense outlined v-model="store.wc.system.form" bg-color="white" :rules="req" @blur="form.validate()")
</template>

<style scoped lang="scss">
.short {
	width: 150px;
}
</style>
