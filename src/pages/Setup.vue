<template lang="pug">
q-page(padding)
	//- q-breadcrumbs
	//- 	q-breadcrumbs-el(v-for="item in router.currentRoute.value.meta.bread" key="item.label" :label="item.label" :to="item.to")
	//- 	q-btn(round dense flat @click="notify").q-ml-xl
	//- 		q-icon(name="mdi-link-variant" color="primary" size="16px")

	router-view(v-slot="{ Component, route }")
		transition(name="slide-left")
			component(:is="Component")

</template>

<script setup lang="ts">
import { router } from '@/router/router'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const notify = () => {
	$q.notify({
		message: 'Путь скопирован в буфер обмена',
		icon: '',
		position: 'top',
	})
}
</script>

<style scoped lang="scss"></style>
