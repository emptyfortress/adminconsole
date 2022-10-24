<script setup lang="ts">
import { ref, reactive } from 'vue'

const leftDrawer = ref(true)
const rightDrawer = ref(true)
const toggleLeftDrawer = () => {
	leftDrawer.value = !leftDrawer.value
}
const toggleRightDrawer = () => {
	rightDrawer.value = !rightDrawer.value
}
</script>

<template lang="pug">
q-layout(view="hHh LpR fFf")
	q-header(elevated).head
		q-toolbar
			q-btn(dense flat round icon="menu" @click="toggleLeftDrawer")
			q-toolbar-title
				q-avatar
					img(src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg")
			q-btn(dense flat round icon="menu" @click="toggleRightDrawer")

	//- q-drawer(v-model="leftDrawer" side="left" bordered)
	q-drawer(show-if-above behavior="desktop" v-model="leftDrawer" side="left" bordered)
		div fuck

	q-drawer(show-if-above behavior="desktop" v-model="rightDrawer" side="right" bordered)
		p lakjsdlaj
		p lakjsdlaj
		p lakjsdlaj
		p lakjsdlaj
		p lakjsdlaj

	q-page-container
		router-view(v-slot="{ Component, route }")
			transition(name="fade")
				component(:is="Component")
</template>

<style scoped lang="scss">
.head {
	/* backdrop-filter: blur(10px); */
	/* -webkit-backdrop-filter: blur(10px); */
	/* background-color: #0000001a; */
	background-color: #d2d2d2;
	color: var(--font-color);
	height: 64px;
	line-height: 64px;
	/* border-bottom: 1px solid #fff; */
	@media screen and (max-width: 1024px) {
		height: 48px;
		line-height: 48px;
	}
}
</style>
