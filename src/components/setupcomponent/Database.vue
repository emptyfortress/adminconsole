<template lang="pug">
.database
	q-tabs(v-model="tabs" vertical switch-indicator active-color="primary").text-secondary
		q-tab(name="base1" label="Docsvision-DB")
		q-tab(name="base2" label="Database 2")
	q-tab-panels(v-model="tabs" animated swipeable vertical transition-prev="jump-up" transition-next="jump-up")
		q-tab-panel(name="base1")
			Db(v-model="def")
		q-tab-panel(name="base2")
			Db(v-model="def1")
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Db from '@/components/setupcomponent/Db.vue'

const tabs = ref('base1')
const def = ref(true)
const def1 = ref(false)
</script>

<style scoped lang="scss">
.database {
	display: grid;
	grid-template-columns: auto 1fr;
}
.q-tab--active {
	background: #dedede;
	background: #fff;
}
.q-tab-panel {
	background: #dedede;
	background: #fff;
}
</style>
