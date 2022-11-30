<template lang="pug">
br
q-list
	q-expansion-item(
		v-for="panel in store.panels"
		icon="mdi-tune-variant"
		group="group"
		switch-toggle-side
		:label="panel.title")
		template(v-slot:header)
			.head
				.title {{panel.title}}
				.icon(v-if="panel.change")
					q-btn(dense flat round @click.stop="reset(panel.id)" )
						component(:is="SvgIcon" name="restore" color="secondary" size="20px")
						q-tooltip Восстановить значения по умолчанию
					q-btn(flat color="primary" size="sm" label="Сохранить" @click.stop="reset(panel.id)")
					//- q-icon(name="mdi-alert" size="20px" color="negative")
		.pcard
			component(:is="calcComponent(panel.id)" :key="key" @change="change")

</template>

<script setup lang="ts">
import { ref } from 'vue'
import Licence from '@/components/setupcomponent/Licence.vue'
import Server from '@/components/setupcomponent/Server.vue'
import SvgIcon from '@/components/global/SvgIcon.vue'
import { useStore } from '@/stores/store'

const emit = defineEmits(['change'])

const store = useStore()
const calcComponent = (e: number) => {
	switch (e) {
		case 0:
			return Licence
		case 1:
			return Server
		default:
			return Licence
	}
}
const key = ref(0)

const reset = (e: number) => {
	if (e === 1) {
		store.server.$reset()
		store.panels[e].change = false
	}
	key.value += 1
}
const change = () => {
	emit('change')
}
</script>

<style scoped lang="scss">
.q-expansion-item {
	transition: 0.2s ease all;
}
.q-expansion-item--expanded :deep(.q-item) {
	border-bottom: 1px dotted $secondary;
}
.q-expansion-item--expanded {
	border: 1px solid $secondary;
	margin-top: 1rem;
	margin-bottom: 1rem;
}
.head {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 1rem;
	color: $secondary;
}
.pcard {
	padding: 1rem;
	font-size: 0.85rem;
}
</style>
