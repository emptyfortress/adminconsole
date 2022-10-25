<script setup lang="ts">
import { ref } from 'vue'
import Drawer from '@/components/Drawer.vue'
import RDrawer from '@/components/RDrawer.vue'

const rightDrawer = ref(false)
const toggleRightDrawer = () => {
	rightDrawer.value = !rightDrawer.value
}
</script>

<template lang="pug">
q-layout(view="hHh LpR fFf")
	q-header.head
		q-toolbar
			img(src="@/assets/img/adm-logo.svg")
			q-toolbar-title.text-uppercase Administration
			q-btn(dense flat round icon="mdi-menu" @click="toggleRightDrawer")

	component(:is="Drawer")
	component(:is="RDrawer" :show="rightDrawer")

	q-page-container
		router-view(v-slot="{ Component, route }")
			transition(name="fade")
				component(:is="Component")
</template>

<style scoped lang="scss">
.head {
	background-color: #efefef;
	height: 64px;
	color: var(--text-color);
	padding-left: 1rem;
	line-height: 64px;
	border-bottom: 1px solid #fff;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
	@media screen and (max-width: 1024px) {
		height: 48px;
		line-height: 48px;
	}
}
</style>
