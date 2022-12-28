<template lang="pug">
q-dialog(:modelValue="edit" persistent position="bottom" full-width)
	q-card.edit
		div
			q-card-section
				.title
					q-icon(name="mdi-database-cog")
					span {{props.bd.psevdo}}

			q-tabs(v-model="tabs" dense).text-secondary
				q-tab(name="prop" label="Свойства")
				q-tab(name="control" label="Управление")
				q-tab(name="outer" label="Внешние хранилища")
				q-tab(name="arh" label="Архивирование")
				q-tab(name="meta" label="Метаданные")
				q-tab(name="journal" label="Журнал")
				q-tab(name="cache" label="Кэширование")

			q-tab-panels(v-model="tabs" animated)
				q-tab-panel(name="outer")
					component(:is="Outer")

		div
			q-separator
			q-card-actions(align="center")
				template( v-if="tabs !== 'outer'")
					q-btn(flat @click="$emit('close')") Отмена
					q-btn(flat @click="$emit('close')") Применить
				template(v-else)
					.change
						q-icon(name="mdi-information-outline")
						span Все изменения на этой вкладке применяются сразу.

</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import Outer from '@/components/setupcomponent/Outer.vue'

const props = defineProps({
	edit: {
		type: Boolean,
		default: false,
	},
	bd: Object,
})
const tabs = ref('outer')
</script>

<style scoped lang="scss">
.edit {
	height: calc(100vh - 150px);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	// align-items: center;
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
.change {
	font-size: 1rem;
	text-align: center;
	margin-bottom: 0.5rem;
	margin-top: 0.5rem;
	.q-icon {
		font-size: 1.3rem;
		margin-right: 0.5rem;
	}
}
</style>
