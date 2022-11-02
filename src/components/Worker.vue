<template lang="pug">
div
	.zag Worker service
	.grid
		q-card( v-for="item in store.config" :key="item.name").flcard
			component(:is="Uzel" :name="item.name")

	component(:is="AddConnection" :show="dialog" @close="dialog = false" @add="addConnection")
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/store'

import AddConnection from '@/components/AddConnection.vue'
import Uzel from '@/components/Uzel.vue'

const store = useStore()

const dialog = ref(false)

const addConnection = (e: string) => {
	store.addConnection(e)
	dialog.value = false
}
</script>

<style scoped lang="scss">
.q-select {
	width: 200px;
}
.flcard {
	width: clamp(640px, 47%, 900px);
	margin: 0.5rem auto;
	padding: 1rem;
}
.grid {
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-wrap: wrap;
}
</style>
