<script setup lang="ts">
import { ref, } from 'vue'
import type { Ref } from 'vue'
import draggable from 'vuedraggable'


const showAdd = ref(false)

const newRuleName = ref()
const type = ref('Все')
const options = ['Все', 'По расширению файла', 'Размер больше, чем', 'Размер меньше, чем', 'Файл справочника', 'Добавить из сборки']

const ext = ref()
const size = ref()
const size1 = ref()

const list: Ref<Rule[]> = ref([])
const date = new Date()

interface Rule {
	id: number
	name: string
	type: string
	ext: string
	size: number
	size1: number
}

const addRule = (() => {
	let tmp = {} as Rule
	tmp.id = +date
	tmp.name = newRuleName.value
	tmp.type = type.value
	tmp.ext = ext.value
	tmp.size = size.value
	tmp.size1 = size1.value
	list.value.push(tmp)
	newRuleName.value = null
	type.value = 'Все'
	ext.value = null
	size.value = null
	size1.value = null
	showAdd.value = false
})

const showDialog = (() => {
	newRuleName.value = null
	type.value = 'Все'
	ext.value = null
	size.value = null
	size1.value = null
	showAdd.value = true
})
const remove = ((ind: number) => {
	list.value.splice(ind, 1)
})
</script>

<template lang="pug">
.row.items-center.justify-between
	.zg Правила помещения в хранилище ({{ list.length }})
	q-btn(flat round icon='mdi-plus-circle' @click="showDialog")
.grey
	div(v-if="list.length === 0") Создайте первое правило
	component(:is="draggable" :list="list"
		item-key="id"
		:group="{ name: 'group', pull: 'clone', put: false }"
		ghost-class='ghost'
		@end="checkDub"
		).list-group
		template(#item="{ element, index }")
			.tabel
				div
					q-icon(name="mdi-gate-nor" size="18px" style="vertical-align: top;")
					span.q-ml-sm {{ element.name }}
				.desc {{ element.type }}
				.desc(v-if="element.type === 'Все'") &nbsp;
				.desc(v-if="element.type === 'Файл справочника'") &nbsp;
				.desc(v-if="element.type === 'Добавить из сборки'") &nbsp;
				.desc(v-if="element.ext") {{ element.ext }}
				.desc(v-if="element.size") {{ element.size }} Gb
				.desc(v-if="element.size1") {{ element.size1 }} Gb

				.right
					q-btn(flat round dense icon="mdi-pencil" size="sm" @click="edit(index)" )
					q-btn(flat round dense icon="mdi-trash-can-outline" size="sm" )
						q-menu
							q-list
								q-item(clickable v-close-popup @click="remove(index)").pink
									q-item-section Подтверждаю


q-dialog(v-model="showAdd")
	q-card(style="min-width: 500px;")
		q-form(@submit="addRule")
			q-card-section.row.items-center.q-pb-none
				.text-h6 Новое правило
				q-space
				q-btn(icon="mdi-close" flat round dense v-close-popup)

			q-card-section
				q-input(v-model='newRuleName' autofocus label='Название' lazy-rules :rules="[val => val && val.length > 0 || 'Обязательное поле']")
				.grid
					q-select(v-model='type' label='Тип' :options="options").full-width
					q-input(v-model="ext" label="Расширение" v-if="type === 'По расширению файла'" lazy-rules :rules="[val => val && val.length > 0 || 'Обязательное поле']").full-width
					q-input(v-model="size" label="Размер" v-if="type === 'Размер больше, чем'" type="number" lazy-rules :rules="[val => val !== null && val !== '' || 'Обязательное поле']").full-width
					q-input(v-model="size1" label="Размер" v-if="type === 'Размер меньше, чем'" type="number").full-width

			q-card-section
				q-card-actions(align="right")
					q-btn(flat color='primary' label='Отмена' @click='showAdd = false')
					q-btn(unelevated color='primary' label='Добавить' type="submit")
</template>

<style scoped lang="scss">
.grey {
	margin-top: 0;
	margin-bottom: 1rem;

	position: relative;
	padding-top: 1.3rem;
}

.zg {
	font-size: 1.1rem;
	color: $secondary;
}

.grid {
	display: grid;
	grid-template-columns: 2fr 1fr;
	justify-items: start;
	align-items: stretch;
	gap: 1rem;

	div {
		height: 30px;
		width: 100%;
		background: #ccc;
	}
}

.tabel {
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 150px 70px 100px;
	justify-items: start;
	column-gap: 1rem;
	row-gap: .2rem;
}

.desc {
	font-size: 0.8rem;
}

.right {
	justify-self: end;
}
</style>
