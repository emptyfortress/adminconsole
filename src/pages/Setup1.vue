<script setup lang="ts">
import { ref } from 'vue'
import { tree } from '@/stores/tree'
import { useRoute, useRouter } from 'vue-router'

const selected = ref()
const expanded = ref(['root'])
const query = ref('')

const route = useRoute()
const router = useRouter()

const select = () => {
	router.push('setup/connection')
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
				q-tree(
					:nodes="tree"
					v-model:selected="selected"
					v-model:expanded="expanded"
					default-expand-all
					node-key="id")
					template(v-slot:default-header="prop")
						div(@click="select") {{prop.node.label}}

			.content
				router-view(v-slot="{ Component, route }")
					transition(name="slide-left" mode="out-in")
						component(:is="Component")
	// transition(name="slide-top")
	// 	.nav(v-if="route.meta.nav")
	// 		q-btn(round color="secondary" size="sm" @click="router.push('/setup1')")
	// 			q-icon(name="mdi-arrow-left" color="white")
	// 		router-link(v-for="item in items" :to="item.to").bl {{ item.label }}
	// 			q-tooltip(v-if="item.tooltip") {{ item.tooltip }}
	//
	// router-view(v-slot="{ Component, route }")
	// 	transition(name="slide-left" mode="out-in")
	// 		component(:is="Component")

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
</style>
