<script setup lang="ts">
import { computed, watch } from 'vue'
import { useStore } from '@/stores/store'

const store = useStore()
const emit = defineEmits(['change', 'haserror', 'noerror'])

watch(store.wc.localization, (value) => {
	if (value) {
		store.changeWebDefaults(6)
		emit('change')
	}
})

const select = ((e: any) => {
	store.wc.localization.map(item => item.selected = false)
	e.selected = true
})
const selection = computed(() => {
	return store.wc.localization.filter(e => e.selected === true)
})
</script>

<template lang="pug">
q-form(ref="form" @validation-error="$emit('haserror')" @validation-success="$emit('noerror')" no-error-focus)
	.lang
		.wh
			q-list
				q-item.db(clickable v-for="item in store.wc.localization" :key="item.id" @click="select(item)" :class="{ sel: item.selected }")
					q-item-section(side)
						q-icon(name="mdi-database-outline")
					q-item-section
						q-item-label {{ item.psevdo }}

		.to
			q-icon(name="mdi-arrow-right-bold" size="lg")
		.wh
			q-markup-table(flat)
				thead
					tr
						th Язык
						th По умолчанию
				tbody
					tr(v-for="item in selection[0].lang" :key="item.id")
						td
							q-checkbox(v-model="item.active") {{ item.name }}
						td
							q-radio(v-model="selection[0].defLang" :val="item.def")
</template>

<style scoped lang="scss">
.lang {
	margin: 0 2rem;
	display: grid;
	grid-template-columns: .5fr 100px 1fr;
	gap: 1rem;

	&>div.wh {
		background: white;
	}
}

th {
	text-align: left;
}

.to {
	align-self: center;
	text-align: center;
}

.q-item.db {
	border: none !important;
}

.sel {
	background: var(--bg-selected);
}
</style>
