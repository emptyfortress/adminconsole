<template lang="pug">
.grey
	.current {{ props.name }}
	.close
		//- q-btn(round flat icon="mdi-pencil" @click="setEditMode")
		//- 	q-tooltip Редактировать
		q-btn(round flat icon="mdi-content-duplicate" @click="duble")
			q-tooltip Дублировать
		q-btn(round flat icon="mdi-trash-can-outline")
			q-tooltip Удалить
			q-menu
				q-list
					q-item(clickable v-close-popup @click="del").pink
						q-item-section Подтверждаю
	.form
		.label Название конфигурации:
		q-input(v-model="form.name" dense outlined bg-color="white")
		q-checkbox(v-model="form.def" dense label="Использовать по умолчанию")
	br
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const props = defineProps({
	name: {
		type: String,
		default: 'name',
	},
})

const form = reactive({
	name: props.name,
	def: false,
})
</script>

<style scoped lang="scss">
.form {
	grid-template-columns: 170px 320px 1fr;
}
</style>
