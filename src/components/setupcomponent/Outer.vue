<template lang="pug">
.outer
	div
		.row.items-center.justify-between
			.zg Хранилища
			div
				q-chip(color="warning").chip Всего: {{list1.length}}
				q-btn(flat round icon="mdi-plus-circle")
		.grey
			component(:is="draggable"
				:list="list1"
				item-key="id"
				:group="{ name: 'group', pull: 'clone', put: false }"
				class="list-group"
				ghost-class="ghost"
				:move="checkMove"
				@start="dragging = true"
				@end="dragging = false")
				template(#item="{element, index}")
					.row.justify-between.items-center
						div
							q-icon(name="mdi-database-outline" size="18px")
							|{{element.name}}
						div
							q-btn(flat round dense icon="mdi-trash-can-outline" size="12px" @click="remove1(index)")

	div
		.row.items-center.justify-between
			.zg Группы хранилищ
			div
				q-chip(color="warning").chip Всего: {{list2.length}}
				q-btn(flat round icon="mdi-plus-circle")
		q-expansion-item(v-model="gr").exp
			template(#header)
				.row.items-center.justify-between.full-width
					.title Common
					.tog
						div Хранилища
						q-toggle( size="xs" v-model="shape" val="xs" label="Правила" )
					div &nbsp;
						//- q-btn(unelevated flat round icon="mdi-tune-variant" @click.stop)

			q-card.dblist
				component(:is="draggable"
					:list="list2"
					item-key="id"
					group="group"
					class="list-group"
					ghost-class="ghost"
					:move="checkMove"
					@start="dragging = true"
					@end="dragging = false")
					template(#item="{element, index}")
						.row.justify-between.items-center
							div
								q-icon(name="mdi-database-outline" size="18px")
								|{{element.name}}
							div
								q-btn(flat round dense icon="mdi-trash-can-outline" size="12px" @click="remove(index)")
	div
		.row.items-center.justify-between
			.zg Правила помещения в хранилище
			div
				q-chip(color="warning").chip Всего: 0
				q-btn(flat round icon="mdi-plus-circle")
		.grey
			p Создайте первое правило.
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import draggable from 'vuedraggable'

const gr = ref(true)
const shape = ref(false)

const list1 = ref([
	{ name: 'Storage 1', id: 1 },
	{ name: 'Storage 2', id: 2 },
	{ name: 'Storage 3', id: 3 },
	{ name: 'Storage 4', id: 4 },
	{ name: 'Storage 5', id: 5 },
	{ name: 'Storage 6', id: 6 },
])
const list2 = ref([])

const remove = (n: number) => {
	list2.value.splice(n, 1)
}
const remove1 = (n: number) => {
	list1.value.splice(n, 1)
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
.list-group > div {
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
.exp {
	background: var(--bg-grey);
	// padding: 0;
}
.dblist {
	background: var(--bg-grey);
	padding: 1rem;
}
.tog {
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 0.8rem;
}
</style>
