<template lang="pug">
q-dialog(:modelValue='edit' persistent position='bottom' full-width)
	q-card.edit
		div
			q-card-section
				.title
					q-icon(name='mdi-database-cog')
					span {{ props.bd.psevdo }}

			q-tabs.text-secondary(v-model='mytab' dense)
				q-tab(v-for='tab in tabs.tabs' :key='tab.name' :name='tab.name')
					span {{tab.label}}
						q-badge(rounded float color="red" align="top" v-if="tab.modified")

			q-tab-panels(v-model='mytab' animated)
				q-tab-panel(name='prop')
					PropertyTab(:bd="props.bd")
				q-tab-panel(name='control')
					ControlTab(:bd="props.bd")
				q-tab-panel(name='outer')
					component(:is="Outer")
				q-tab-panel(name='arch')
					ArchTab(:bd="props.bd")
				q-tab-panel(name='meta')
					MetaTab(:bd="props.bd")
				q-tab-panel(name='journal')
					JournalTab(:bd="props.bd")
				q-tab-panel(name='cache')
					CacheTab(:bd="props.bd")
		div
			q-separator
			q-card-actions(align='center')
				q-btn(flat @click="$emit('close')") Отмена
				q-btn(flat @click="$emit('close')") Применить

</template>

<script setup lang="ts">
import { onUpdated, ref } from 'vue'
import { useTabs } from '@/stores/tabs'
import Outer from '@/components/setupcomponent/Outer.vue'
import PropertyTab from '@/components/setupcomponent/PropertyTab.vue'
import ControlTab from '@/components/setupcomponent/ControlTab.vue'
import ArchTab from '@/components/setupcomponent/ArchTab.vue'
import MetaTab from '@/components/setupcomponent/MetaTab.vue'
import JournalTab from '@/components/setupcomponent/JournalTab.vue'
import CacheTab from '@/components/setupcomponent/CacheTab.vue'

const props = defineProps({
	edit: {
		type: Boolean,
		default: true,
	},
	bd: {
		type: Object,
		default: {
			psevdo: 'AGSupport',
			name: 'AGSupport_1',
			server: 'Docsvision 1',
			index: 'yes',
			version: 4373,
			date: '20.10.2021',
			def: true,
		},
	},
	tab: {
		type: String,
		default: 'prop',
	},
})

const mytab = ref('arch')

onUpdated(() => {
	mytab.value = props.tab
})

const tabs = useTabs()
</script>

<style scoped lang="scss">
.edit {
	height: calc(100vh - 150px);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
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
