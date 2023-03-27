<template lang="pug">
q-dialog(:model-value="props.dialog" position="bottom" full-width persistent)
	q-card.edit
		div
			q-card-section
				.title
					q-icon(name='mdi-database-cog')
					span Мастер баз данных

			.all
				.arch
					component(:is="draggable" :list="list"
						item-key="id"
						ghost-class='ghost'
						).list-group

						template(#header)
							.tabel.gr
								div Название БД
								div Доступно пользователям ДВ

						template(#item="{ element, index }")
							.tabel(:class="{ selected : element.selected }" @click="select(index)")
								div
									q-icon(name="mdi-database-outline" size="18px" style="vertical-align: top;")
									span.q-ml-sm {{ element.name }}
								q-checkbox(v-model="act" :val="element.id" dense)

		div
			q-separator
			q-card-actions(align='center')
				q-btn(flat color="primary" @click="close") Отмена
				q-btn(unelevated color="primary" @click="close") Применить
		q-btn.close(flat round icon="mdi-close" color="primary" @click="close")
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import draggable from 'vuedraggable'

const props = defineProps({
	dialog: {
		type: Boolean,
		default: false,
	},
})
const emit = defineEmits(['update:modelValue'])

const close = () => {
	emit('update:modelValue', false)
}

const act = ref([0, 1])

const list = reactive([
	{
		id: 0,
		name: 'DV_management',
		selected: false,
	},
	{
		id: 1,
		name: 'lyahova_dv6',
		selected: false,
	},
	{
		id: 2,
		name: 'lyahova_gbl_2926',
		selected: false,
	},
	{
		id: 3,
		name: 'nefedov_gbl_3132',
		selected: false,
	},
])
const select = (ind: number) => {
	list.map((item) => (item.selected = false))
	list[ind].selected = true
}
</script>

<style scoped lang="scss">
.edit {
	height: calc(100vh - 120px);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
}
.title {
	font-size: 1.5rem;
	text-align: center;
	color: $secondary;
	vertical-align: baseline;

	.q-icon {
		margin-right: 0.5rem;
		margin-top: -3px;
		font-size: 1.6rem;
	}
}
.close {
	position: absolute;
	top: 1rem;
	right: 1rem;
}
.all {
	width: 900px;
	margin: 0 auto;
}
.arch {
	background: var(--bg-grey);
	padding: 1rem;
}
.titl {
	font-size: 0.9rem;
	text-transform: uppercase;
	color: $secondary;
}
.tabel {
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 230px;
	justify-items: start;
	align-items: center;
	grid-column: 1/-1;
	&.gr {
		color: #666;
	}
	&.selected {
		background: var(--bg-selected);
	}
}
</style>
