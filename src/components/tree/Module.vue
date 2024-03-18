<script setup lang="ts">
const props = defineProps({
	page: {
		type: String,
		default: '',
	},
})
</script>

<template lang="pug">
.treepage
	.mainzag
		span {{ props.page }}
	p Это временная заглушка
</template>

<style scoped lang="scss"></style>
