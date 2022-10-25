<template lang="pug">
q-page(padding)
	q-breadcrumbs
		q-breadcrumbs-el(label="Dashboard" to="/")
		q-breadcrumbs-el(label="Логи")
	br
	br
	.zag Последние действия
	LogTable(:headers="headers" :items="actions")

</template>

<script setup lang="ts">
import LogTable from '@/components/LogTable.vue'
import { headers, actions } from '@/stores/actions'
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
</style>
