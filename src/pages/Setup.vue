<template lang="pug">
q-page(padding)
	transition(name="slide-top")
		.nav(v-if="router.currentRoute.value.meta.nav")
			q-btn(round color="secondary" size="sm" @click="router.push('/setup')")
				q-icon(name="mdi-arrow-left" color="white")
			router-link(v-for="item in items" :to="item.to").bl
				div {{item.label}}
				q-tooltip(v-if="item.tooltip") {{item.tooltip}}
			.bl1
				div Web-клиент
			.bl1
				div СУБП
				q-tooltip Сервис управления бизнес-процессами


	router-view(v-slot="{ Component, route }")
		transition(name="slide-left" mode="out-in")
			component(:is="Component")

</template>

<script setup lang="ts">
import { router } from '@/router/router'
const items = [
	{ id: 0, label: 'Сервер DV', to: '/setup/dvserver' },
	{ id: 1, label: 'Соединения', to: '/setup/connection' },
	{ id: 2, label: 'Почтовый сервер', to: '/setup/email' },
	{ id: 3, label: 'СФО', to: '/setup/worker', tooltip: 'Служба фоновых операций' },
]
</script>

<style scoped lang="scss">
.nav {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 0.5rem;
	margin-bottom: 2rem;
}
.bl1 {
	// background: var(--bg-drawer);
	font-size: 0.8rem;
	color: $secondary;
	// border-radius: 0.5rem;
	// padding: 4px 10px;
	// border: 1px dotted $secondary;
	text-decoration: none;
	opacity: 0.7;
	margin-left: 0.5rem;
}
.bl {
	background: var(--bg-drawer);
	font-size: 0.8rem;
	color: $secondary;
	border-radius: 0.5rem;
	padding: 4px 10px;
	border: 1px dotted $secondary;
	cursor: pointer;
	// transition: 0.2s ease all;
	text-decoration: none;
	&:hover {
		box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4), -1px -1px 3px rgba(0, 0, 0, 0.2);
		border: 1px solid #fff;
		color: #000;
		background: #cad0da;
	}
}
.router-link-active {
	color: #fff;
	background: $secondary;
	&:hover {
		background: $secondary;
		color: white;
		border: 1px solid $secondary;
	}
}
</style>
