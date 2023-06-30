<script setup lang="ts">
import { ref, watch } from 'vue'
import { useStore } from '@/stores/store'

const store = useStore()
const form = ref()
const emit = defineEmits(['change', 'haserror', 'noerror'])
watch(store.wc.cache, (value) => {
	if (value) {
		store.changeWebDefaults(1)
		emit('change')
	}
})
</script>

<template lang="pug">
q-form(ref="form" @validation-error="$emit('haserror')" @validation-success="$emit('noerror')" no-error-focus)
	.blo
		.label Кэширование разметок:
		div
			q-radio.q-mr-lg(v-model="store.wc.cache.layout" :val="true") Да
			q-radio(v-model="store.wc.cache.layout" :val="false") Нет
		.label Кэширование папок:
		div
			q-radio.q-mr-lg(v-model="store.wc.cache.folders" :val="true") Да
			q-radio(v-model="store.wc.cache.folders" :val="false") Нет
		.label Кэширование поисковых запросов:
		div
			q-radio.q-mr-lg(v-model="store.wc.cache.search" :val="true") Да
			q-radio(v-model="store.wc.cache.search" :val="false") Нет
</template>

<style scoped lang="scss"></style>
