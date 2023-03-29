<script setup lang="ts">
import { ref, onMounted } from 'vue'

const visible = ref(true)
const showSimulatedReturnData = ref(false)

onMounted(() => {
	setTimeout(() => {
		visible.value = false
		showSimulatedReturnData.value = true
	}, 2000)
})
</script>

<template lang="pug">
.text-bold Завершение:
.min(flat)
	q-card-section
		transition(appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut")
			.suc(v-show="showSimulatedReturnData")
				q-icon(name="mdi-check-bold" color="teal" size="md").q-mr-md
				|Успешно
	q-inner-loading(:showing="visible")
		q-spinner-gears(size="50px" color="primary")
		.wait Идет установка...

</template>

<style scoped lang="scss">
.min {
	min-height: 300px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	div {
		text-align: center;
	}
}
.wait {
	margin-top: 1rem;
	color: $primary;
}
.suc {
	color: teal;
	font-weight: 600;
}
</style>
