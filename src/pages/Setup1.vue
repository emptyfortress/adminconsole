<script setup lang="ts">
import { ref, watch } from 'vue'
import { tree } from '@/stores/tree'
import { useRouter } from 'vue-router'

const selected = ref('root')
const expanded = ref(['root'])
const query = ref('')

const router = useRouter()

const select = (e: string) => {
	selected.value = e
	console.log(selected.value)
	// router.push('setup1/fuck')
}
watch(selected, val => {
	if (val) {
		console.log(val)
		router.push('/')
	}
})
</script>

<template lang="pug">
q-page(padding)
	.container
		.grid
			div
				q-input.q-mb-md(v-model="query" dense)
					template(v-slot:prepend)
						q-icon(name="mdi-magnify")
				q-tree(
					:nodes="tree"
					v-model:selected="selected"
					v-model:expanded="expanded"
					selected-color="primary"
					default-expand-all
					node-key="id")
					// template(v-slot:default-header="prop")
					// 	div(@click="select(prop.node.id)") {{prop.node.label}}

			.content
				router-view(v-slot="{ Component, route }")
					transition(name="page")
						component(:is="Component")

</template>

<style scoped lang="scss">
.container {
	max-width: 1200px;
	margin: 0 auto;
}
.grid {
	width: 100%;
	display: grid;
	grid-template-columns: auto 1fr;
	// justify-items: start;
	align-items: start;
	column-gap: 3rem;
	row-gap: 0.5rem;
	.content {
		background: pink;
	}
}
:deep(.q-tree__node--selected) {
	background: pink;
}
</style>
