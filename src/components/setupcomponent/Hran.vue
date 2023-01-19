<script setup lang="ts">
import { ref } from 'vue'
import draggable from 'vuedraggable'

const list1 = ref([
	{
		name: 'Storage 1', id: 1, props: [['Тип', 'Хранилище в базе',],
		['Состояние', 'Online',],
		['Разделы', 'Основной, архивный',],]
	},
	{
		name: 'Storage 2', id: 2, props: [['Тип', 'Хранилище на диске',],
		['Состояние', 'Online',],
		['Разделы', 'Временный',],]
	},
])

const showAdd = ref(false)
const remove1 = (n: number) => {
	list1.value.splice(n, 1)
}
const close = () => {
	showAdd.value = false
}
const showInfo = ref(false)
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
					q-icon(name="mdi-information" size="sm").q-mr-md
						q-menu
							q-card(flat)
								.hrinfo
									template(v-for="prop in element.props")
										.label {{ prop[0]}}:
										.val {{ prop[1]}}

					q-btn(flat round dense icon="mdi-pencil" size="sm" )
					q-btn(flat round dense icon="mdi-trash-can-outline" size="sm" )
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
			p Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
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

.inf {
	background: #fff;
	width: 200px;
	height: 102px;
	border: 1px solid #ccc;
	position: absolute;
	top: 1rem;
	left: 1rem;
	z-index: 100;
}

.hrinfo {
	padding: 1rem;
	display: grid;
	grid-template-columns: auto 1fr;
	justify-items: start;
	align-items: flex-end;
	column-gap: 1rem;
	row-gap: 3px;

	.label {
		color: grey;
		justify-self: end;
	}
}
</style>
