<script setup lang="ts">
import { ref, defineExpose } from 'vue'
import Step1 from '@/components/wizard/Step1.vue'
import Step2 from '@/components/wizard/Step2.vue'
import Step3 from '@/components/wizard/Step3.vue'
import Step4 from '@/components/wizard/Step4.vue'
import Step5 from '@/components/wizard/Step5.vue'
import Step6 from '@/components/wizard/Step6.vue'
import Step7 from '@/components/wizard/Step7.vue'

const step = ref(1)
const live = ref(false)
const stepper = ref()

const nextStep = () => {
	stepper.value.next()
}
const prevStep = () => {
	stepper.value.previous()
}
defineExpose({ step, nextStep, prevStep })
</script>

<template lang="pug">
.create
	q-stepper(v-model="step" ref="stepper" alternative-labels animated header-nav flat done-color="teal" :keep-alive="live")
		q-step(:name="1" prefix="1" title="SQL сервер" :done="step > 1" )
			.all900
				.arch
					component(:is="Step1")
		q-step(:name="2" prefix="2" title="Скрипт создания" :done="step > 2" )
			.all900
				.arch
					component(:is="Step2")
		q-step(:name="3" prefix="3" title="База данных" :done="step > 3" )
			.all900
				.arch
					component(:is="Step3")
		q-step(:name="4" prefix="4" title="Конфигурация" :done="step > 4" )
			.all900
				.arch
					component(:is="Step4")
		q-step(:name="5" prefix="5" title="Параметры БД" :done="step > 5" )
			.all900
				.arch
					component(:is="Step5")
		q-step(:name="6" prefix="6" title="Дополнительно" :done="step > 6" )
			.all900
				.arch
					component(:is="Step6")
		q-step(:name="7" prefix="7" title="Завершение" :done="step > 7" )
			.all900
				.arch
					component(:is="Step7")

</template>

<style scoped lang="scss">
:deep(.q-icon) {
	color: inherit;
}

.all900 {
	width: clamp(350px, calc(100% - 1rem), 800px);
	margin: 0 auto;
}
</style>
