<script setup lang="ts">
import { ref, reactive } from 'vue'
// import type { Ref } from 'vue'

import draggable from 'vuedraggable'

const list1 = reactive([
	{
		name: 'Storage 1', id: 1, props: [['Тип', 'Хранилище в базе',],
		['Состояние', 'Online',],
		['Разделы', 'Основной, архивный',],
		['Размер', 100,],
		]
	},
	{
		name: 'Storage 2', id: 2, props: [['Тип', 'Хранилище на диске',],
		['Состояние', 'Online',],
		['Разделы', 'Временный',],
		['Размер', 130,],
		]
	},
])

const showAdd = ref(false)
const remove1 = (n: number) => {
	list1.splice(n, 1)
}
const close = () => {
	showAdd.value = false
}

const clearAdd = (() => {
	name.value = null
	type.value = null
	state.value = null
	size.value = 0
	showAdd.value = true
})

const edit = (index: number) => {
	console.log('index: ', index)
	name.value = list1[index].name
	type.value = list1[index].props[0][1]
	state.value = list1[index].props[1][1]
	size.value = list1[index].props[3][1]
	showAdd.value = true

}

const name = ref()
const type = ref()
const state = ref()
const size = ref()
const raz1 = ref(true)
const raz2 = ref(true)
const raz3 = ref(false)
const options = ['', '', '', '', '', '']
const options1 = ['Online', 'Auto', 'Disabled', 'Read and delete', 'Reserved']
</script>

<template lang="pug">
.row.items-center.justify-between
	.zg Хранилища ({{ list1.length }})
	q-btn(flat round icon="mdi-plus-circle" @click="clearAdd")
.grey.hran
	component(:is="draggable" :list="list1"
		item-key="id"
		:group="{ name: 'group', pull: 'clone', put: false }"
		ghost-class='ghost'
		).list-group
		template(#item="{ element, index }")
			.tabel
				div
					q-icon(name="mdi-database-outline" size="18px" style="vertical-align: top;")
					span.q-ml-sm {{ element.name }}
				.desc {{ element.props[0][1] }}
				.desc {{ element.props[1][1] }}
				.desc {{ element.props[2][1] }}
				.desc {{ element.props[3][1] }} Gb
				div
					q-icon(name="mdi-information" size="sm").q-mr-md
						q-menu
							q-card(flat)
								.hrinfo
									template(v-for="prop in element.props")
										.label {{ prop[0]}}:
										.val {{ prop[1]}}

					q-btn(flat round dense icon="mdi-pencil" size="sm" @click="edit(index)" )
					q-btn(flat round dense icon="mdi-trash-can-outline" size="sm" )
						q-menu
							q-list
								q-item(clickable v-close-popup @click="remove1(index)").pink
									q-item-section Подтверждаю

q-dialog(:model-value="showAdd")
	q-card(padding)
		q-card-section.row.items-center.q-pb-none
			.text-h6 Настройки хранилища
			q-space
			q-btn(icon="mdi-close" flat round dense @click="close")

		q-card-section
			.edittable
				q-input(v-model="name" label="Название")
				q-select(v-model="type" label="Тип" :options="options")
				q-select(v-model="state" label="Состояние" :options="options1")
				q-input(v-model="size" label="Макс.размер, Гб" type="number" style="width:150px; margin: 0 auto;")
				br
				q-checkbox(v-model="raz1" label="Основной раздел")
				q-checkbox(v-model="raz2" label="Архивный раздел")
				q-checkbox(v-model="raz3" label="Временный раздел")
		q-card-section
			q-card-actions(align="right")
				q-btn(flat color="primary" label="Отмена" @click="close") 
				q-btn(unelevated color="primary" label="Сохранить") 
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

.desc {
	font-size: 0.8rem;
}

.tabel {
	// background: pink;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 150px 65px 150px 65px 100px;
	justify-items: start;
	// align-items: stretch;
	column-gap: 1rem;
	row-gap: .2rem;
}

.edittable {
	min-width: 400px;

	.fl {
		display: flex;
	}

	// display: grid;
	// grid-template-columns: auto 1fr;
	// gap: 1rem;


}
</style>
