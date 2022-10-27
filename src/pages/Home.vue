<template lang="pug">
q-page
	.grid
		q-card
		q-card
		q-card
		q-card
</template>

<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'
</script>

<style scoped lang="scss">
.grid {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: auto auto;
	gap: 1rem;
	height: calc(100vh - 64px - 64px);
}
.q-page {
	padding: 1rem;
}
.q-card {
	height: 100%;
}
</style>
