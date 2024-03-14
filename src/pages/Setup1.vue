<script setup lang="ts">
import { ref, watch } from 'vue'
import { tree } from '@/stores/tree'
import { useRouter } from 'vue-router'

const selected = ref('root')
const expanded = ref(['root'])
const query = ref('')

const router = useRouter()

watch(selected, val => {
	if (val == 'config') {
		router.push('/setup1/configurations#test')
	} else router.push('/setup1/modules')
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
				.left
					q-tree(:nodes="tree"
						v-model:selected="selected"
						v-model:expanded="expanded"
						selected-color="blue-10"
						default-expand-all
						node-key="id")

						template(v-slot:default-header="prop")
							.node
								q-icon(v-if="!prop.node.save" name="mdi-alert" color="orange" size="20px")
									q-tooltip Несохраненные изменения
								label {{ prop.node.label }}

			div
				router-view(v-slot="{ Component, route }")
					transition(name="page")
						component(:is="Component")

</template>

<style scoped lang="scss">
.container {
	// max-width: 1200px;
	margin: 0 auto;
}
.grid {
	width: 100%;
	display: grid;
	grid-template-columns: auto 1fr;
	// justify-items: start;
	align-items: start;
	column-gap: 4rem;
	row-gap: 0.5rem;
}
:deep(.q-tree__node--selected) {
	background: var(--tree-selection);
	// background: #cad4e9;
}
.node {
	.q-icon {
		margin-right: 5px;
	}
}
.left {
	height: 700px;
	width: 300px;
}
.right {
	height: 800px;
}
</style>
