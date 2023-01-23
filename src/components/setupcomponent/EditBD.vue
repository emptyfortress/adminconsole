<template>
	<q-dialog
		:modelValue="edit"
		persistent
		position="bottom"
		full-width
	>
		<q-card class="edit">
			<div>
				<q-card-section>
					<div class="title">
						<q-icon name="mdi-database-cog"></q-icon>
						<span>{{ props.bd.psevdo }}</span>
					</div>
				</q-card-section>
				<q-tabs
					class="text-secondary"
					v-model="tab"
					dense
				>
					<q-tab
						v-for="tab in tabspanels"
						:key="tab.name"
						:name="tab.name"
						:label="tab.label"
					/>
				</q-tabs>
				<q-tab-panels
					v-model="tab"
					animated
				>
					<q-tab-panel name="outer">
						<Outer />
					</q-tab-panel>
					<!-- <q-tab-panel name=control>Control</q-tab-panel> -->
				</q-tab-panels>
			</div>
			<div>
				<q-separator></q-separator>
				<q-card-actions align="center">
					<q-btn
						flat
						@click="$emit('close')"
						>Отмена</q-btn
					>
					<q-btn
						flat
						@click="$emit('close')"
						>Применить</q-btn
					>
				</q-card-actions>
			</div>
		</q-card>
	</q-dialog>
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

// const tabs = ref('outer')

const tabspanels = ref([
	{ name: 'prop', label: 'Свойства' },
	{ name: 'control', label: 'Управление' },
	{ name: 'outer', label: 'Внешние хранилища' },
	{ name: 'arch', label: 'Архивирование' },
	{ name: 'meta', label: 'Метаданные' },
	{ name: 'journal', label: 'Журнал' },
	{ name: 'cache', label: 'Кэширование' },
])
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
