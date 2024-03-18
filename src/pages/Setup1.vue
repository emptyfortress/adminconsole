<script setup lang="ts">
import { ref } from 'vue'
import { tree } from '@/stores/tree'
import { useRouter } from 'vue-router'

const selected = ref('appserver')
const expanded = ref(['appserver'])
const query = ref('')

const router = useRouter()

const active = ref('Сервер приложений')
const goto = (e: string, a: string) => {
	router.push(e)
	active.value = a
}
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
						no-selection-unset
						node-key="id")

						template(v-slot:default-header="prop")
							.node(@click="goto(prop.node.url, prop.node.label)")
								label {{ prop.node.label }}

			div
				router-view(v-slot="{ Component, route }")
					transition(name="page")
						component(:is="Component" :page="active")

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
	column-gap: 4rem;
	row-gap: 0.5rem;
}
:deep(.q-tree__node--selected) {
	background: var(--tree-selection);
	// background: #cad4e9;
}
.left {
	height: 700px;
	width: 300px;
}
.right {
	height: 800px;
}
.q-tree {
	font-size: 0.8rem;
}
</style>
