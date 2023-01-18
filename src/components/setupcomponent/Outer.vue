<template lang="pug">
.outer
	div
		Hran

	div
		Group

	div
		.row.items-center.justify-between
			.zg Правила помещения в хранилище (0)
			q-btn(flat round icon='mdi-plus-circle')
		.grey
			p 

q-form(@submit='addGroup')
	AddDialog(v-model='showAdd')
		template(#header) Новая группа
		template(#main)
			q-input(v-model='newGroupName' autofocus label='Название')
		template(#actions)
			q-btn(flat color='primary' label='Отмена' @click='showAdd = false')
				q-btn(unelevated color='primary' label='Добавить' @click='addGroup')

</template>

<script setup lang="ts">
import { ref } from 'vue'
// import draggable from 'vuedraggable'
import AddDialog from '@/components/setupcomponent/AddDialog.vue'
import Group from '@/components/setupcomponent/Group.vue'
import Hran from '@/components/setupcomponent/Hran.vue'

const list1 = ref([
	{ name: 'Storage 1', id: 1 },
	{ name: 'Storage 2', id: 2 },
])

const remove1 = (n: number) => {
	list1.value.splice(n, 1)
}
const checkMove = () => {
	console.log(111)
}
const dragging = ref(false)

const addGroup = () => {
	if (newGroupName.value.length === 0) return
	list2.value.push({ name: 'newGroupName' })
}
</script>

<style scoped lang="scss">
.outer {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem;
	padding-top: 1rem;
}

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

.list-group>div {
	width: 100%;
	padding: 0.5rem 1rem;
	cursor: pointer;
	background: #efefef;

	&:not(:last-child) {
		border-bottom: 1px solid #0000001a;
	}

	.q-icon {
		vertical-align: top;
		margin-right: 0.5rem;
	}
}
</style>
