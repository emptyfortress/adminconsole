<script setup lang="ts">
import { ref, watch } from 'vue'
import { useStore } from '@/stores/store'
import { req, reqnum } from '@/utils/utils'

const store = useStore()
const form = ref()
const emit = defineEmits(['change', 'haserror', 'noerror'])

watch(store.wc.system, (value) => {
	if (value) {
		store.changeWebDefaults(3)
		emit('change')
	}
})
</script>

<template lang="pug">
q-form(ref="form" @validation-error="$emit('haserror')" @validation-success="$emit('noerror')" no-error-focus)
	.blo
		.label Строка подключения к серверу DV:
		q-input(dense outlined v-model="store.wc.server.address" bg-color="white" :rules="req" @blur="form.validate()")
		.label Псевдоним:
		q-input(dense outlined v-model="store.wc.server.psevdo" bg-color="white" :rules="req" @blur="form.validate()")
		.label Путь к консоли администратора:
		q-input(dense outlined v-model="store.wc.server.adminPath" bg-color="white" :rules="req" @blur="form.validate()")
</template>

<style scoped lang="scss"></style>
