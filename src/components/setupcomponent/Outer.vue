<template lang="pug">
.outer
	q-splitter(v-model="split1").spl
		template(#before)
			Hran

		template(#after)
			q-splitter(v-model="split2").spl

				template(#before)
					Group

				template(#after)
					Rule
			
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Group from '@/components/setupcomponent/Group.vue'
import Hran from '@/components/setupcomponent/Hran.vue'
import Rule from '@/components/setupcomponent/Rule.vue'

const split1 = ref(32)
const split2 = ref(42)
</script>

<style scoped lang="scss">
.spl {
	height: calc(100vh - 360px);
}

.outer {
	padding-top: 1rem;
}
</style>
