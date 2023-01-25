<template lang="pug">
q-dialog(:modelvalue='edit' persistent position='bottom' full-width)
q-dialog(v-model='edit' persistent position='bottom' full-width)

</template>

<script setup lang="ts">
import { ref } from 'vue'
import Outer from '@/components/setupcomponent/Outer.vue'

const props = defineProps({
	edit: {
		type: Boolean,
		default: true,
	},
	bd: {
		type: Object,
		default: {
			name: 'psevdo',
			required: true,
			label: 'Псевдоним',
			align: 'left',
			field: 'psevdo',
			sortable: true,
		},
	},
	tab: {
		type: String,
		default: 'outer',
	},
})

const tabs = useTabs()

// const tabspanels = ref([
// 	{ name: 'prop', label: 'Свойства', modified: false },
// 	{ name: 'control', label: 'Управление', modified: false },
// 	{ name: 'outer', label: 'Внешние хранилища', modified: false },
// 	{ name: 'arch', label: 'Архивирование', modified: false },
// 	{ name: 'meta', label: 'Метаданные', modified: false },
// 	{ name: 'journal', label: 'Журнал', modified: false },
// 	{ name: 'cache', label: 'Кэширование', modified: false },
// ])
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
.q-badge {
	padding: 0 4px;
	min-height: 8px;
}
</style>
