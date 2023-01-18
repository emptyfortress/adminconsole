<script setup lang="ts">
import { ref } from 'vue'

const showAdd = ref(false)

</script>

<template lang="pug">
.row.items-center.justify-between
	.zg Правила помещения в хранилище (0)
	q-btn(flat round icon='mdi-plus-circle' @click="showAdd = true")
.grey
	p Создайте первое правило

q-dialog(v-model="showAdd")
	q-card(style="min-width: 400px;")
		q-card-section.row.items-center.q-pb-none
			.text-h6 Новая группа
			q-space
			q-btn(icon="mdi-close" flat round dense v-close-popup)

		q-card-section
			q-input(v-model='newGroupName' autofocus label='Название')

		q-card-section
			q-card-actions(align="right")
				q-btn(flat color='primary' label='Отмена' @click='showAdd = false')
				q-btn(unelevated color='primary' label='Добавить' @click='addGroup')
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
</style>
