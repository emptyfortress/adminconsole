<template lang="pug">
br
q-list
	q-expansion-item(
		v-for="panel in panels"
		icon="mdi-tune-variant"
		group="group"
		switch-toggle-side
		:label="panel.title")
		template(v-slot:header)
			.head
				.title {{panel.title}}
				.icon
					q-btn(flat round @click.stop )
						component(:is="SvgIcon" name="restore" color="secondary" size="20px")
					q-icon(name="mdi-alert" size="20px" color="negative")
		.pcard
			component(:is="panel.comp")

</template>

<script setup lang="ts">
import SvgIcon from '@/components/global/SvgIcon.vue'
import License from '@/components/setupcomponent/Licence.vue'

const panels = [
	{ id: 0, title: 'Лицензия', comp: License },
	{ id: 1, title: 'Сервер DV' },
	{ id: 2, title: 'Подключенные базы данных' },
	{ id: 3, title: 'Настройка клиентской части' },
	{ id: 4, title: 'Управление доступом' },
	{ id: 5, title: 'Общие настройки серверной консоли' },
	{ id: 6, title: 'Управление бизнес-процессами' },
	{ id: 7, title: 'Настройки сервиса WorkFlow' },
	{ id: 8, title: 'Почтовые настройки сервиса Workflow' },
]
</script>

<style scoped lang="scss">
.q-expansion-item {
	transition: 0.2s ease all;
}
.q-expansion-item--expanded :deep(.q-item) {
	border-bottom: 1px dotted $secondary;
}
.q-expansion-item--expanded {
	border: 1px solid $secondary;
	margin-top: 1rem;
	margin-bottom: 1rem;
}
.head {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 1rem;
	color: $secondary;
}
.pcard {
	padding: 1rem;
}
</style>
