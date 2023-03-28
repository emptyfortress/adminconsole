<script setup lang="ts">
import { ref } from 'vue'

const item = ref()
</script>

<template lang="pug">
div Выберите SQL-скрипт для создания базы данных:
q-form.q-mt-md.column
	q-radio(v-model="item" val="one" label="Стандартный (рекомендуется)")
	.row.items-center
		q-radio(v-model="item" val="two" label="Другой").q-mr-xl
		input(type="file")
</template>

<style scoped lang="scss"></style>
