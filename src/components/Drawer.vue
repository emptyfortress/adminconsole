<template lang="pug">
q-drawer(show-if-above behavior="desktop" v-model="leftDrawer" side="left" bordered :width="256" :mini="mini").rel
	q-list.q-mt-md
		q-item(v-for="item in menu" :key="item.url" clickable)
			q-item-section(avatar)
				q-icon(:name="item.icon" color="secondary")
			q-item-section {{item.text}}

	q-btn(round flat dense :icon="minitoogle" @click="toggleMini" color="secondary").mini.gt-sm
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const leftDrawer = ref(true)
const mini = ref(false)

const toggleMini = () => {
	mini.value = !mini.value
}

const minitoogle = computed(() => {
	return mini.value ? 'mdi-forwardburger' : 'mdi-backburger'
})

const menu = [
	{ url: '/', icon: 'mdi-monitor-dashboard', text: 'Dashboard' },
	{ url: '/setup', icon: 'mdi-hammer-wrench', text: 'Настройка' },
	{ url: '/logs', icon: 'mdi-script-text-outline', text: 'Логи' },
]
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.mini {
	position: absolute;
	bottom: 0.5rem;
	left: 0.5rem;
	overflow-x: hidden;
}
</style>
