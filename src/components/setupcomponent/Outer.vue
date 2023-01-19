<template lang="pug">
.outer
	div
		Hran

	div
		Group

	div
		Rule
</template>

<script setup lang="ts">
import Group from '@/components/setupcomponent/Group.vue'
import Hran from '@/components/setupcomponent/Hran.vue'
import Rule from '@/components/setupcomponent/Rule.vue'
</script>

<style scoped lang="scss">
.outer {
	display: grid;
	grid-template-columns: 2fr 1fr;
	gap: 1rem;
	padding-top: 1rem;
}
</style>
