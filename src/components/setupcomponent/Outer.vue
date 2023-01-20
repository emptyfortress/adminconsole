<template lang="pug">
.outer
	q-splitter(v-model="split").spl
		template(#before)
			Hran
			Rule

		template(#after)
			Group
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Group from '@/components/setupcomponent/Group.vue'
import Hran from '@/components/setupcomponent/Hran.vue'
import Rule from '@/components/setupcomponent/Rule.vue'

const split = ref(50)
</script>

<style scoped lang="scss">
.spl {
	height: calc(100vh - 360px);
}

.outer {
	padding-top: 1rem;
}
</style>
