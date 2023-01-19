<template lang="pug">
.outer
	div
		Hran

	.group
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
	grid-template-columns: 4fr 3fr;
	gap: 1rem;
	padding-top: 1rem;
}

.group {
	grid-column: 2/3;
	grid-row: 1/3;

}
</style>
