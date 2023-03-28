<script setup lang="ts">
import { ref } from 'vue'
import Step1 from '@/components/wizard/Step1.vue'

const step = ref(1)
</script>

<template lang="pug">
.create
	q-stepper(v-model="step" ref="stepper" alternative-labels animated flat header-nav done-color="teal" )
		q-step(:name="1" prefix="1" title="SQL сервер" :done="step > 1" )
			.all900
				.arch
					component(:is="Step1")
		q-step(:name="2" prefix="2" title="Скрипт создания" :done="step > 2" )
			| second laksjdlajk
		q-step(:name="3" prefix="3" title="База данных" :done="step > 3" )
			| second laksjdlajk
		q-step(:name="4" prefix="4" title="Параметры" :done="step > 4" )
			| second laksjdlajk
		q-step(:name="5" prefix="5" title="Дополнительно" :done="step > 5" )
			| second laksjdlajk
		q-step(:name="6" prefix="6" title="Завершение" :done="step > 6" )
			| second laksjdlajk
</template>

<style scoped lang="scss">
:deep(.q-icon) {
	color: inherit;
}

.all900 {
	width: clamp(350px, calc(100% - 1rem), 900px);
	margin: 0 auto;
}
.arch {
	background: var(--bg-grey);
	padding: 1rem;
}
</style>
