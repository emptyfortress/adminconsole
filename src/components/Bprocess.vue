<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useStore } from '@/stores/store'
import AddComputer from '@/components/AddComputer.vue'
import Nastroyki from '@/components/Nastroyki.vue'

const store = useStore()

const dialog = ref(false)
const add = () => {
	dialog.value = !dialog.value
}

const req = [(val: string) => (val && val.length > 0) || 'Это обязательное поле']

const key = ref(0)
const calcComponent = (e: number) => {
	switch (e) {
		case 0:
			return Nastroyki
		case 1:
			return null
		case 2:
			return null
		case 3:
			return null
	}
}
</script>

<template lang="pug">
div
	AddComputer(v-model="dialog")
	.zag Настройки службы управления бизнес-процессами
	.bar
		q-chip(color="warning") Всего компьютеров: {{ store.conputer.length}}
		q-btn(flat round icon="mdi-plus-circle" @click="add") 
			q-tooltip Добавить компьютер
		q-space
		.alltab
			q-tabs(v-model="store.tabs1" active-color="primary" inline-label).text-secondary
				q-tab(v-for="item in store.conputer" :key="item.id" :name="item.name" :label="item.name")
		

	q-card.card
		q-tab-panels(v-model="store.tabs1" animated)
			template(v-for="item in store.conputer" :key="item.id")
				q-tab-panel(:name="item.name")
					.grey()
						.close
							q-btn(round flat icon="mdi-trash-can-outline")
								q-tooltip удалить
								q-menu
									q-list
										q-item(clickable v-close-popup @click="").pink
											q-item-section удалить
						.current {{ item.name }}

						q-form
							.form
								.label Имя компьютера:
								q-input(v-model="store.tabs1" dense outlined bg-color="white" lazy-rules :rules="req")


						q-list(separator)
							q-expansion-item(
								v-for="(panel, index) in store.panelsBP"
								v-model="panel.expanded"
								switch-toggle-side
								:key="panel.id"
								:class="{ er: panel.neg }"
								:label="panel.title"
								)
								template(v-slot:header)
									.head
										.title {{ panel.title }}
										.icon
											q-btn(flat round icon="mdi-close" color="primary" @click="") 

								.pcard
									component(:is="calcComponent(panel.id)" :key="key")
		
</template>

<style scoped lang="scss">
.bar {
	background: #dedede;
	max-width: clamp(600px, 80%, 1200px);
	margin: 0 auto;
	display: flex;
	align-items: center;
	padding: 0 0.5rem;

	@media screen and (max-width: 1233px) {
		display: block;
	}
}

.card {
	max-width: clamp(600px, 80%, 1200px);
	margin: 0 auto;
}

.plus {
	:deep(.q-icon) {
		color: $primary;
	}
}

.alltab {
	max-width: 700px;
}

.q-expansion-item {
	transition: 0.2s ease all;
}

.q-expansion-item--expanded :deep(.q-item) {
	border-bottom: 1px dotted $secondary;
	border-top: 1px solid $primary;
}

.q-expansion-item--expanded {
	box-shadow: 0 2px 7px rgba(0, 0, 0, 0.5);
	border: 1px solid $primary;
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
	font-size: 0.85rem;
}

:deep(.er.q-expansion-item--collapsed) {
	background: $pink-1;
	border: 1px solid $negative;

	.title {
		color: $negative;
	}
}
</style>
