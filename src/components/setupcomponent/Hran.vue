<script setup lang="ts">
import { ref } from 'vue'
import draggable from 'vuedraggable'
import AddDialog1 from '@/components/setupcomponent/AddDialog1.vue'
import AddDialog from './AddDialog.vue';

const list1 = ref([
	{ name: 'Storage 1', id: 1 },
	{ name: 'Storage 2', id: 2 },
])

const showAdd = ref(false)
const remove1 = (n: number) => {
	list1.value.splice(n, 1)
}
</script>

<template lang="pug">
.row.items-center.justify-between
	.zg Хранилища ({{ list1.length }})
	q-btn(flat round icon="mdi-plus-circle" @click="showAdd = true")
.grey.hran
	draggable(:list="list1"
		item-key="id"
		:group="{ name: 'group', pull: 'clone', put: false }"
		ghost-class='ghost'
		:move='checkMove'
		@start='dragging = true'
		@end='dragging = false'
		).list-group
		template(#item="{ element, index }")
			.row.justify-between.items-center
				div
					q-icon(name="mdi-database-outline" size="18px" style="vertical-align: top;")
					span.q-ml-sm {{ element.name }}
				q-btn(flat round dense icon="mdi-trash-can-outline" size="10px" )
					q-menu
						q-list
							q-item(clickable v-close-popup @click="remove1(index)").pink
								q-item-section Подтверждаю

AddDialog1(v-model="showAdd")
</template>

<style scoped lang="scss">
.zg {
	font-size: 1.1rem;
	color: $secondary;
}

.hran {
	margin-top: 0;
	margin-bottom: 1rem;
	position: relative;
	padding-top: 1.3rem;
}
</style>
