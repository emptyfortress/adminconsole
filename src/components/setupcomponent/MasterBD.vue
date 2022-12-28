<template lang="pug">
q-dialog(:model-value="dialog" position="bottom" @update:model-value="$emit('toggle')")
	q-card(style="width: 350px")
		p lakjsdljal
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const props = defineProps({
	dialog: {
		type: Boolean,
		default: false,
	},
})
</script>

<style scoped lang="scss"></style>
