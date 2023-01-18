<script setup lang="ts">
import { ref } from 'vue'
import draggable from 'vuedraggable'

const list1 = ref([
	{ name: 'Storage 1', id: 1 },
	{ name: 'Storage 2', id: 2 },
])

const showAdd = ref(false)
const remove1 = (n: number) => {
	list1.value.splice(n, 1)
}
const close = () => {
	showAdd.value = false
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
		).list-group
		template(#item="{ element, index }")
			.row.justify-between.items-center
				div
					q-icon(name="mdi-database-outline" size="18px" style="vertical-align: top;")
					span.q-ml-sm {{ element.name }}
				div
					<!-- q-icon(name="mdi-information" size="sm")  -->
					q-btn(flat round dense icon="mdi-information" size="12px" )
					q-btn(flat round dense icon="mdi-pencil" size="12px" )
					q-btn(flat round dense icon="mdi-trash-can-outline" size="12px" )
						q-menu
							q-list
								q-item(clickable v-close-popup @click="remove1(index)").pink
									q-item-section Подтверждаю

q-dialog(:model-value="showAdd")
	q-card
		q-card-section.row.items-center.q-pb-none
			.text-h6 Настройки хранилища
			q-space
			q-btn(icon="mdi-close" flat round dense @click="close")

		q-card-section
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
		q-card-section
			q-card-actions(align='right')
				q-btn(flat color="primary" label="Отмена" @click="close") 
				q-btn(unelevated color="primary" label="Отмена" @click="action") 
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
