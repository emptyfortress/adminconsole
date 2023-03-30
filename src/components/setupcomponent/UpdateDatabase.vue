<script setup lang="ts">
import { ref, defineExpose } from 'vue'
import Step26 from '@/components/wizard/Step26.vue'
import Step4 from '@/components/wizard/Step4.vue'
import Step5 from '@/components/wizard/Step5.vue'
import Step6 from '@/components/wizard/Step6.vue'
import Step7 from '@/components/wizard/Step7.vue'

const step = ref(4)
const live = ref(false)
const stepper = ref()

const nextStep = () => {
	stepper.value.next()
}
const prevStep = () => {
	stepper.value.previous()
}
defineExpose({ nextStep, prevStep })
</script>

<template lang="pug">
.create
	q-stepper(v-model="step" ref="stepper" alternative-labels animated header-nav flat done-color="teal" :keep-alive="live")
		q-step(:name="4" prefix="1" title="Конфигурация" :done="step > 4" )
			.all900
				.arch
					component(:is="Step4")
		q-step(:name="5" prefix="2" title="Параметры БД" :done="step > 5" )
			.all900
				.arch
					component(:is="Step5")
			.all900
				.arch.q-mt-sm
					component(:is="Step26")
		q-step(:name="6" prefix="3" title="Дополнительно" :done="step > 6" )
			.all900
				.arch
					component(:is="Step6")
		q-step(:name="7" prefix="4" title="Завершение" :done="step > 7" )
			.all900
				.arch
					component(:is="Step7" hint="Идет обновление..." result="Обновление прошло успешно!")

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
