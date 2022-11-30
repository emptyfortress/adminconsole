<template lang="pug">
.grey
	.current {{ props.name }}
	//- .close
	//- 	q-btn(round flat icon="mdi-content-duplicate" @click="duble")
	//- 		q-tooltip Дублировать
	//- 	q-btn(round flat icon="mdi-trash-can-outline")
	//- 		q-tooltip Удалить
	//- 		q-menu
	//- 			q-list
	//- 				q-item(clickable v-close-popup @click="del").pink
	//- 					q-item-section Подтверждаю
	q-form
		.form
			.label Название конфигурации:
			q-input(v-model="form.name" dense outlined bg-color="white")
			q-checkbox(v-model="form.def" dense label="Использовать по умолчанию").def
			.but
				q-btn(round flat icon="mdi-content-duplicate" @click="duble")
					q-tooltip Дублировать
				q-btn(round flat icon="mdi-trash-can-outline")
					q-tooltip Удалить
					q-menu
						q-list
							q-item(clickable v-close-popup @click="del").pink
								q-item-section Подтверждаю
		component(:is="Expand")

	br
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import Expand from '@/components/Expand.vue'

const props = defineProps({
	name: {
		type: String,
		default: 'name',
	},
})
const emit = defineEmits(['delete', 'duble'])
const del = () => {
	emit('delete')
}
const duble = () => {
	emit('duble', name)
}

const form = reactive({
	name: props.name,
	def: false,
})
</script>

<style scoped lang="scss">
.form {
	grid-template-columns: 170px 1fr 1fr 120px;
	.but {
		text-align: right;
	}
	@media screen and (max-width: 1180px) {
		grid-template-columns: 170px 1fr 120px;
		.def {
			grid-column: 2/3;
		}
		.but {
			grid-row: 1/2;
			grid-column: 3/4;
		}
	}
}
</style>
