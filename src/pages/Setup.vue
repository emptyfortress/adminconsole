<template lang="pug">
q-page(padding)
	transition(name="slide-top")
		.nav(v-if="route.meta.nav")
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
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const items = [
	{ id: 0, label: 'Сервер DV', to: '/setup/dvserver' },
	{ id: 0, label: 'Сервер DV 1', to: '/setup/dvserver1' },
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
	font-size: 0.8rem;
	color: $secondary;
	text-decoration: none;
	opacity: 0.7;
	margin-left: 0.5rem;
}
.bl {
	background: var(--bg-drawer);
	font-size: 0.8rem;
	color: $secondary;
	padding: 4px 10px;
	border: 1px dotted $secondary;
	cursor: pointer;
	text-decoration: none;
	&:hover {
		border: 1px solid $primary;
		color: #000;
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
