<template lang="pug">
.outer
	.grey
		q-chip(color="warning").chip Всего хранилищ: 6
		.row.items-center.justify-between
			.zg Хранилища
			q-btn(flat round icon="mdi-plus-circle")
		component(:is="draggable"
			:list="list1"
			item-key="id"
			group="group"
			class="list-group"
			ghost-class="ghost"
			:move="checkMove"
			@start="dragging = true"
			@end="dragging = false")
			template(#item="{element, index}")
				div
					q-icon(name="mdi-database-outline" size="18px")
					|{{element.name}} - {{index}}
	.grey
		q-chip(color="warning").chip Всего групп: 1
		.row.items-center.justify-between
			.zg Группы хранилищ
			q-btn(flat round icon="mdi-plus-circle")
		q-expansion-item.exp
			template(#header)
				.row.items-center.justify-between.full-width
					.flex.items-center.q-gutter-md
						//- q-icon(name="mdi-folder-settings-outline" size="md")
						.title Common
					div
						q-btn(unelevated flat round icon="mdi-tune-variant" @click.stop)
	.grey
		q-chip(color="warning").chip Всего правил: 4
		.row.items-center.justify-between
			.zg Правила помещения в хранилище
			q-btn(flat round icon="mdi-plus-circle")
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import draggable from 'vuedraggable'

const list1 = ref([
	{ name: 'BD digdes', id: 3 },
	{ name: 'BD docsvision', id: 4 },
	{ name: 'BD showcase', id: 5 },
])
</script>

<style scoped lang="scss">
.outer {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;
	padding-top: 1rem;
}
.grey {
	margin-top: 0;
	position: relative;
	padding-top: 1.3rem;
}
.chip {
	position: absolute;
	top: -18px;
}
.zg {
	font-size: 1.1rem;
}
.list-group > div {
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
	background: pink;
	padding: 0;
}
</style>
