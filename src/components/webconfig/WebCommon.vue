<script setup lang="ts">
import { ref, watch } from 'vue'
import { useStore } from '@/stores/store'
import { req } from '@/utils/utils'

const store = useStore()

const form = ref()
</script>

<template lang="pug">
q-form(ref="form" @validation-error="$emit('haserror')" @validation-success="$emit('noerror')" no-error-focus)
	.blo
		.label Размещение расширений:
		q-input(dense outlined v-model="store.wc.common.extensions" bg-color="white" :rules="req" @blur="form.validate()")
			q-tooltip(anchor="top middle" self="bottom middle") ExtensionsPath
		.label.twoline Шаблон определения моб. устройств нового поколения:
		q-input(dense outlined v-model="store.wc.common.template1" bg-color="white" :rules="req" @blur="form.validate()")
		.label.twoline Шаблон определения старых мобильных устройств:
		q-input(dense outlined v-model="store.wc.common.template2" bg-color="white" :rules="req" @blur="form.validate()")
		.label.twoline Шаблон определения планшетов:
		q-input(dense outlined v-model="store.wc.common.tablet" bg-color="white" :rules="req" @blur="form.validate()")
		.label Режим удаления карточек:
		div
			q-radio.q-mr-lg(v-model="store.wc.common.del" val="trash") В корзину
			q-radio(v-model="store.wc.common.del" val="perm") Полное удаление
		.label Порядок следования кнопок:
		div
			q-radio.q-mr-lg(v-model="store.wc.common.buttons" val="auto") Auto
			q-radio.q-mr-lg(v-model="store.wc.common.buttons" val="one") OK, Cancel
			q-radio(v-model="store.wc.common.buttons" val="two") Cancel, OK
</template>

<style scoped lang="scss">
.blo {
	grid-template-columns: 200px 1fr;

	.twoline {
		align-self: start;
	}

}
</style>
