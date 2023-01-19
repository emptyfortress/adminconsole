<script setup lang="ts">
import { ref } from 'vue'
import draggable from 'vuedraggable'
import { useHran } from '@/stores/hran'

const hran = useHran()
const newGroupName = ref()
const showAdd = ref(false)

const remove = ((ind: number, index: number) => {
	hran.groups[ind].list.splice(index, 1)
})

const shape = ref(false)
const dragging = ref(false)

const addGroup = () => {
	hran.addGroup(newGroupName.value)
	showAdd.value = false
	newGroupName.value = ''
}

const removeGroup = ((ind: number) => {
	hran.removeGroup(ind)
})
</script>

<template lang="pug">
.row.items-center.justify-between
	.zg Группы хранилищ ({{ hran.groups.length }})
	q-btn(flat round icon="mdi-plus-circle" @click="showAdd = true")
.empt(v-if="hran.groups.length === 0") Создайте первую группу
q-expansion-item.exp(v-else v-model="group.expanded" v-for="(group, ind) in hran.groups" :key="group.id").gro
	template(#header)
		.row.items-center.justify-between.full-width
			.title {{ group.name }}
			.tog
				div Хранилища
				q-toggle(size="xs" v-model="shape" val="xs" label="Правила")
			div &nbsp;
			q-menu(touch-position context-menu)
				q-list
					q-item(clickable v-close-popup @click="removeGroup(ind)").pink
						q-item-section Удалить группу
	q-card.dblist
		component(:is="draggable" :list="group.list" item-key="id" group="group" ghost-class="ghost" @start="dragging = true" @end="dragging = false").list-group
			template(#item="{ element, index }")
				.row.justify-between.items-center
					div
						q-icon(name="mdi-database-outline" size="18px" style="vertical-align: top;")
						span.q-ml-sm {{ element.name }}
					q-btn(flat round dense icon="mdi-trash-can-outline" size="10px" )
						q-menu
							q-list
								q-item(clickable v-close-popup @click="remove(ind, index)").pink
									q-item-section Подтверждаю

q-dialog(:model-value="showAdd")
	q-card(style="min-width: 400px;")
		q-card-section.row.items-center.q-pb-none
			.text-h6 Новая группа
			q-space
			q-btn(icon="mdi-close" flat round dense v-close-popup)

		q-card-section
			q-input(v-model="newGroupName" autofocus label="Название")

		q-card-section
			q-card-actions(align="right")
				q-btn(flat color="primary" label="Отмена" @click="showAdd = false")
				q-btn(unelevated color="primary" label="Добавить" @click="addGroup")
		
</template>

<style scoped lang="scss">
.zg {
	font-size: 1.1rem;
	color: $secondary;
}

.grey {
	margin-top: 0;
	margin-bottom: 1rem;

	position: relative;
	padding-top: 1.3rem;
}

.tog {
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 0.8rem;
}

.exp {
	background: var(--bg-grey);
}

.dblist {
	background: var(--bg-grey);
	padding: 0 .5rem;
	border-top: 1px solid #ccc;
}

.gro {
	margin-bottom: 1rem;
}

.title {
	background: $secondary;
	color: white;
	padding: 2px 10px;
	font-weight: 600;
	text-transform: uppercase;
}

.empt {
	padding: 1rem;
	background: var(--bg-grey);
}
</style>
