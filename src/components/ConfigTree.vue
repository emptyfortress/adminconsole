<script setup lang="ts">
import { ref } from 'vue'
import WordHighlighter from 'vue-word-highlighter'
import { conf } from '@/stores/confTree'

const filter = ref('')
</script>

<template lang="pug">
.grid
	.section
		q-input(v-model="filter" dense clearable placeholder="Фильтр")
			template(v-slot:prepend)
				q-icon(name="mdi-magnify")

		q-tree(ref="tree"
			:nodes="conf"
			icon="mdi-chevron-right"
			node-key="id"
			color="secondary"
			:filter="filter"
			default-expand-all)
			template(v-slot:header-root="prop")
				.row.items-center.q-gutter-x-md
					.text-h6 {{ prop.node.label }}
			template(v-slot:default-header="prop")
				.node
					div
						q-icon.q-mr-sm(:name="prop.node.icon")
						WordHighlighter(:query="filter") {{ prop.node.label }}
					q-chip(v-if="prop.node.env == 'test'" size="sm" color="white") test
	.section
		.text-h6 Серверы
</template>

<style scoped lang="scss">
.grid {
	width: 100%;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem;
	.section {
		background: var(--main-bg);
		padding: 1rem;
	}
}
.node {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	justify-items: space-between;
}
</style>
