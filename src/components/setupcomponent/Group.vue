<script setup lang="ts">
import { ref } from 'vue'
import draggable from 'vuedraggable'
import AddDialog from '@/components/setupcomponent/AddDialog.vue'

const list2 = ref([])
const newGroupName = ref()
const showAdd = ref()

const remove = (n: number) => {
	list2.value.splice(n, 1)
}
const gr = ref(true)
const shape = ref(false)
</script>

<template lang="pug">
.row.items-center.justify-between
	.zg Группы хранилищ ({{ list2.length + 1 }})
	q-btn(flat round icon='mdi-plus-circle' @click='showAdd = true')
q-expansion-item.exp(v-model='gr')
	template(#header)
		.row.items-center.justify-between.full-width
			.title Common
			.tog
				div Хранилища
				q-toggle(size='xs' v-model='shape' val='xs' label='Правила')
			div &nbsp;
	q-card.dblist
		component.list-group(:is='draggable' :list='list2' item-key='id' group='group' ghost-class='ghost' :move='checkMove' @start='dragging = true' @end='dragging = false')
			template(#item='{ element, index }')
				.row.justify-between.items-center
					div
						q-icon(name="mdi-database-outline" size="18px" style="vertical-align: top;")
						span.q-ml-sm {{ element.name }}
					q-btn(flat round dense icon="mdi-trash-can-outline" size="10px" )
						q-menu
							q-list
								q-item(clickable v-close-popup @click="remove(index)").pink
									q-item-section Подтверждаю
					<!-- div -->
					<!-- 	q-icon(name='mdi-database-outline' size='18px') -->
					<!-- 	| {{ element.name }} -->
					<!-- div -->
					<!-- 	q-btn(flat round dense icon='mdi-trash-can-outline' size='12px' @click='remove(index)') -->

q-form(@submit='addGroup')
	AddDialog(v-model='showAdd')
		template(#header) Новая группа
		template(#main)
			q-input(v-model='newGroupName' autofocus label='Название')
		template(#actions)
			q-btn(flat color='primary' label='Отмена' @click='showAdd = false')
				q-btn(unelevated color='primary' label='Добавить' @click='addGroup')
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
	padding: 1rem;
}
</style>
