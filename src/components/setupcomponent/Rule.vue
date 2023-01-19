<script setup lang="ts">
import { ref, reactive } from 'vue'
import draggable from 'vuedraggable'

const showAdd = ref(false)

const newRuleName = ref()
const type = ref('Все')
const options = ['Все', 'По расширению файла', 'Размер больше, чем', 'Размер меньше, чем', 'Файл справочника', 'Добавить из сборки']

const ext = ref()
const big = ref()
const small = ref()

const list = reactive([])

const date = new Date()
const addRule = (() => {
	list.push({
		id: +date,
		name: newRuleName.value,
		condition: type,
		value: ext
	})
	newRuleName.value = ''
	showAdd.value = false
})
</script>

<template lang="pug">
.row.items-center.justify-between
	.zg Правила помещения в хранилище (0)
	q-btn(flat round icon='mdi-plus-circle' @click="showAdd = true")
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
				.desc some text
				.desc some text
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


q-dialog(v-model="showAdd")
	q-card(style="min-width: 500px;")
		q-card-section.row.items-center.q-pb-none
			.text-h6 Новое правило
			q-space
			q-btn(icon="mdi-close" flat round dense v-close-popup)

		q-card-section
			q-input(v-model='newRuleName' autofocus label='Название')
			.grid
				q-select(v-model='type' label='Тип' :options="options").full-width
				q-input(v-model="ext" label="Расширение" v-if="type === 'По расширению файла'").full-width
				q-input(v-model="ext" label="Размер" v-if="type === 'Размер больше, чем'" type="number").full-width
				q-input(v-model="ext" label="Размер" v-if="type === 'Размер меньше, чем'" type="number").full-width

		q-card-section
			q-card-actions(align="right")
				q-btn(flat color='primary' label='Отмена' @click='showAdd = false')
				q-btn(unelevated color='primary' label='Добавить' @click='addRule')
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
	/* background: pink; */
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 150px 150px 100px;
	justify-items: start;
	column-gap: 1rem;
	row-gap: .2rem;
}
</style>
