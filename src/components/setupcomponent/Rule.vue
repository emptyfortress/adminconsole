<script setup lang="ts">
import { ref } from 'vue'
import draggable from 'vuedraggable'
import { useHran } from '@/stores/hran'
import { useTabs } from '@/stores/tabs'

const hran = useHran()
const tabs = useTabs()

const showAdd = ref(false)

const name = ref()
const type = ref('Все')
const options = [
	'Все',
	'По расширению файла',
	'Размер больше, чем',
	'Размер меньше, чем',
	'Файл справочника',
	'Добавить из сборки',
]

const ext = ref()
const size1 = ref()
const size2 = ref()
const date = new Date()
const currentItemIndex = ref()

const add = () => {
	let tmp = {} as Rule
	tmp.id = +date
	tmp.name = name.value
	tmp.type = type.value
	tmp.ext = ext.value
	tmp.size1 = size1.value
	tmp.size2 = size2.value
	if (currentItemIndex.value !== null) {
		hran.rules[currentItemIndex.value] = tmp
	} else {
		hran.addRule(tmp)
	}
	tabs.setTabMod(2)
	showAdd.value = false
	currentItemIndex.value = null
	name.value = null
	type.value = 'Все'
	ext.value = null
	size1.value = null
	size2.value = null
}

const remove = (index: number) => {
	hran.removeRule(index)
	tabs.setTabMod(2)
}

const showDialog = () => {
	name.value = null
	currentItemIndex.value = null
	ext.value = null
	size1.value = null
	size2.value = null
	type.value = 'Все'
	showAdd.value = true
}

const edit = (index: number) => {
	name.value = hran.rules[index].name
	type.value = hran.rules[index].type
	ext.value = hran.rules[index].ext
	size1.value = hran.rules[index].size1
	size2.value = hran.rules[index].size2
	currentItemIndex.value = index
	showAdd.value = true
	tabs.setTabMod(2)
}

const set = () => {
	tabs.setTabMod(2)
}
</script>

<template lang="pug">
.row.items-center.justify-between
	.zg Правила помещения в хранилище ({{ hran.rules.length }})
	q-btn(flat round icon='mdi-plus-circle' @click="showDialog")
.empt(v-if="hran.rules.length === 0") Создайте первое правило

q-expansion-item(v-else v-model="rule.expanded" v-for="(rule, ind) in hran.rules" :key="rule.id" switch-toggle-side).gro.exp
	template(#header)
		.row.items-center.justify-between.full-width
			.title {{ rule.name }}

			div
				q-btn(flat round icon="mdi-information-outline" size="sm" )
					q-menu
						q-card.hrinfo
							.label Псевдоним:
							div дфлоывд
							.label Тип:
							div дфлывдолф
							.label Состояние:
							div дфлывдолф
				q-btn(flat round icon="mdi-pencil" @click.stop="editRule(rule, ind)" size="sm").q-mr-sm 
				q-btn(flat round icon="mdi-trash-can-outline" @click.stop="" size="sm") 
					q-menu
						q-list
							q-item(clickable v-close-popup @click="removeRule(ind)").pink
								q-item-section Удалить&nbsp;правило

// .grey
	component(:is="draggable" :list="hran.rules"
		item-key="id"
		group="rule"
		@end="set"
		ghost-class='ghost'
		).list-group
		template(#item="{ element, index }")
			.tabel
				div
					q-icon(name="mdi-gate-nor" size="18px" style="vertical-align: top;")
					span.q-ml-sm {{ element.name }}

				// .desc {{ element.type }}
				// .desc(v-if="element.type === 'Все'") &nbsp;
				// .desc(v-if="element.type === 'Файл справочника'") &nbsp;
				// .desc(v-if="element.type === 'Добавить из сборки'") &nbsp;
				// .desc(v-if="element.ext") {{ element.ext }}
				// .desc(v-if="element.size1") {{ element.size1 }} Gb
				// .desc(v-if="element.size2") {{ element.size2 }} Gb

				.right
					q-btn(flat round dense icon="mdi-information-outline" size="sm").q-mr-sm
						q-menu
							q-card.hrinfo
								.label Псевдоним:
								div {{ element.name}}
								.label Тип:
								div {{ element.type}}
								.label Состояние:
								div {{ element.state}}
								.label Размер:
								div {{ element.size}} Gb
								.label Раздел:
								div
									span(v-if="element.main") основной, 
									span(v-if="element.arch") архивный, 
									span(v-if="element.temp") временный
					q-btn(flat round dense icon="mdi-pencil" size="sm" @click="edit(index)" ).q-mr-sm
					q-btn(flat round dense icon="mdi-trash-can-outline" size="sm" )
						q-menu
							q-list
								q-item(clickable v-close-popup @click="remove(index)").pink
									q-item-section Удалить


q-dialog(v-model="showAdd")
	q-card(style="min-width: 500px;")
		q-form(@submit="add")
			q-card-section.row.items-center.q-pb-none
				.text-h6 Новое правило
				q-space
				q-btn(icon="mdi-close" flat round dense v-close-popup)

			q-card-section
				q-input(v-model='name' autofocus label='Название' lazy-rules :rules="[val => val && val.length > 0 || 'Обязательное поле']")
				.grid
					q-select(v-model='type' label='Тип' :options="options").full-width
					q-input(v-model="ext" label="Расширение" v-if="type === 'По расширению файла'" lazy-rules :rules="[val => val && val.length > 0 || 'Обязательное поле']").full-width
					q-input(v-model="size1" label="Размер" v-if="type === 'Размер больше, чем'" type="number" lazy-rules :rules="[val => val !== null && val !== '' || 'Обязательное поле']").full-width
					q-input(v-model="size2" label="Размер" v-if="type === 'Размер меньше, чем'" type="number").full-width

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
	grid-template-columns: 1fr 100px;
	justify-items: start;
	column-gap: 1rem;
	row-gap: 0.2rem;
}

.desc {
	font-size: 0.8rem;
}

.right {
	justify-self: end;
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
.empt {
	padding: 1rem;
	background: var(--bg-grey);
	font-size: 0.8rem;
}
.gro {
	margin-bottom: 0.5rem;
}
.exp {
	background: var(--bg-grey);
}
</style>
