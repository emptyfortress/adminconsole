<script setup lang="ts">
import { ref, reactive, computed, watch } from 'vue'
import WordHighlighter from 'vue-word-highlighter'
import { conf } from '@/stores/confTree'

const filter = ref('')
const expandedKeys = ref(['root', 'platform', 'web'])
const chips = reactive([
	{ id: 0, label: 'Все', selected: true },
	{ id: 1, label: 'test', selected: false },
	{ id: 2, label: 'dev', selected: false },
	{ id: 3, label: 'prod', selected: false },
])
const selChip = ref(0)
const select = (e: any) => {
	chips.map(item => (item.selected = false))
	e.selected = true
	selChip.value = e.id
	if (selChip.value > 0) tree.value.expandAll()
	if (selChip.value == 0) expandedKeys.value = ['root', 'platform', 'web']
}
const tree = ref()
watch(filter, val => {
	if (val.length > 0) {
		tree.value.expandAll()
	}
})

const filterByEnv = (array: any, searchTerm: string) => {
	return array.reduce((prev: any, curr: any) => {
		const children = curr.children
			? filterByEnv(curr.children, searchTerm)
			: undefined

		return curr.env?.toLowerCase().includes(searchTerm.toLowerCase()) ||
			children?.length > 0
			? [...prev, { ...curr, children }]
			: prev
	}, [])
}
const filtered = computed(() => {
	if (selChip.value == 1) {
		return filterByEnv(conf, 'test')
	}
	if (selChip.value == 2) {
		return filterByEnv(conf, 'dev')
	}
	if (selChip.value == 3) {
		return filterByEnv(conf, 'prod')
	}
	return conf
})
</script>

<template lang="pug">
div
	q-chip.fuck(v-for="chip in chips" :key="chip.id" v-model:selected="chip.selected" @click="select(chip)" size="md") {{ chip.label }}
	q-input.q-mt-md(v-model="filter" dense clearable placeholder="Фильтр" @clear="filter = ''")
		template(v-slot:prepend)
			q-icon(name="mdi-magnify")

	q-tree(ref="tree"
		:nodes="filtered"
		icon="mdi-chevron-right"
		node-key="id"
		color="secondary"
		:filter="filter"
		v-model:expanded="expandedKeys"
		)
		template(v-slot:header-root="prop")
			.row.items-center.q-gutter-x-md
				.text-h6 {{ prop.node.label }}
		template(v-slot:default-header="prop")
			.node
				div
					q-icon.q-mr-sm(:name="prop.node.icon")
					q-icon.q-mr-sm(v-if="prop.node.docker" name="mdi-docker")
					component(:is="WordHighlighter" :query="filter") {{ prop.node.label }}
				q-chip(v-if="prop.node.env" size="sm" :class="prop.node.env") {{ prop.node.env }}
</template>

<style scoped lang="scss">
.node {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	justify-items: space-between;
}
.test {
	background: $secondary;
	background: $blue-grey-3;
}
.dev {
	background: $blue-2;
}
.prod {
	background: pink;
}
.fuck {
	background: #ccc;
}
:deep(.q-chip--selected) {
	background: $secondary;
	color: white;
}
</style>
