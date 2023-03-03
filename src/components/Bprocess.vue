<script setup lang="ts">
import { useStore } from '@/stores/store'

const store = useStore()
</script>

<template lang="pug">
div
	.zag Настройки службы управления бизнес-процессами
	q-card.card
		.grey
			q-list(separator)
				q-expansion-item(
					v-for="(panel, index) in store.panelsBP"
					v-model="panel.expanded"
					switch-toggle-side
					:key="panel.id"
					:class="{ er: panel.neg }"
					:label="panel.title"
					)
					template(v-slot:header)
						.head
							.title {{ panel.title }}
							.icon
								q-btn(flat round icon="mdi-close" color="primary" @click="") 
		
</template>

<style scoped lang="scss">
.q-expansion-item {
	transition: 0.2s ease all;
}

.q-expansion-item--expanded :deep(.q-item) {
	border-bottom: 1px dotted $secondary;
	border-top: 1px solid $primary;
}

.q-expansion-item--expanded {
	box-shadow: 0 2px 7px rgba(0, 0, 0, 0.5);
	border: 1px solid $primary;
	margin-top: 1rem;
	margin-bottom: 1rem;
}
.head {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 1rem;
	color: $secondary;
}
.pcard {
	padding: 1rem;
	font-size: 0.85rem;
}

:deep(.er.q-expansion-item--collapsed) {
	background: $pink-1;
	border: 1px solid $negative;

	.title {
		color: $negative;
	}
}
</style>
