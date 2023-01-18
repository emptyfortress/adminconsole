<script setup lang="ts">
import { ref } from 'vue'
import draggable from 'vuedraggable'

const list1 = ref([
	{ name: 'Storage 1', id: 1 },
	{ name: 'Storage 2', id: 2 },
])

</script>

<template>
	<div class="row items-center justify-between">
		<div class="zg">Хранилища ({{ list1.length }})</div>
		<q-btn flat round icon="mdi-plus-circle"></q-btn>
	</div>
	<div class="grey">
		<draggable class="list-group" :list="list1" item-key="id" :group="{ name: 'group', pull: 'clone', put: false }"
			ghost-class="ghost" :move="checkMove" @start="dragging = true" @end="dragging = false">
			<template #item="{ element, index }">
				<div class="row justify-between items-center">
					<div>
						<q-icon name="mdi-database-outline" size="18px"></q-icon>{{ element.name }}
					</div>
					<q-btn flat round dense icon="mdi-trash-can-outline" size="10px" @click="remove1(index)"></q-btn>
				</div>
			</template>
		</draggable>
	</div>
</template>

<style scoped lang="scss">
.grey {
	margin-top: 0;
	margin-bottom: 1rem;
	position: relative;
	padding-top: 1.3rem;
}
</style>
