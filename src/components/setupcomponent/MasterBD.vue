<template lang="pug">
q-dialog(:model-value="props.dialog" position="bottom" full-width persistent)
	q-card.edit
		div
			q-card-section
				.title
					q-icon(name='mdi-database-cog')
					span Мастер баз данных
		q-btn(flat round icon="mdi-close" color="primary" @click="close").close 
		div
			q-separator
			q-card-actions(align='center')
				q-btn(flat color="primary" @click="close") Отмена
				q-btn(unelevated color="primary" @click="close") Применить
</template>

<script setup lang="ts">
// import { ref, reactive } from 'vue'

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
</style>
