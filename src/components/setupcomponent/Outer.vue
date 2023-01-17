<template>
	<div class="outer">

		<div>
			<div class="row items-center justify-between">
				<div class="zg">Хранилища ({{ list1.length }})</div>
				<q-btn flat round icon="mdi-plus-circle"></q-btn>
			</div>
			<div class="grey">
				<draggable class="list-group" :list="list1" item-key="id" :group="{ name: 'group', pull: 'clone', put: false }"
					ghost-class="ghost" :move="checkMove" @start="dragging = true" @end="dragging = false">
					<template #item="{ element, index }">
						<div class="row justify-between items-center">
							<div>
								<q-icon name="mdi-database-outline" size="18px"></q-icon>{{ element.name }}
							</div>
							<div>
								<q-btn flat round dense icon="mdi-trash-can-outline" size="12px" @click="remove1(index)"></q-btn>
							</div>
						</div>
					</template>
				</draggable>
			</div>
		</div>

		<div>
			<div class="row items-center justify-between">
				<div class="zg">Группы хранилищ ({{ list2.length + 1 }})</div>
				<q-btn flat round icon="mdi-plus-circle" @click="showAdd = true" />
			</div>
			<q-expansion-item class="exp" v-model="gr">
				<template v-slot:header="header">
					<div class="row items-center justify-between full-width">
						<div class="title">Common</div>
						<div class="tog">
							<div>Хранилища</div>
							<q-toggle size="xs" v-model="shape" val="xs" label="Правила"></q-toggle>
						</div>
						<div>&nbsp;</div>
					</div>
				</template>
				<q-card class="dblist">
					<component class="list-group" :is="draggable" :list="list2" item-key="id" group="group" ghost-class="ghost"
						:move="checkMove" @start="dragging = true" @end="dragging = false">
						<template #item="{ element, index }">
							<div class="row justify-between items-center">
								<div>
									<q-icon name="mdi-database-outline" size="18px"></q-icon>{{ element.name }}
								</div>
								<div>
									<q-btn flat round dense icon="mdi-trash-can-outline" size="12px" @click="remove(index)"></q-btn>
								</div>
							</div>
						</template>
					</component>
				</q-card>
			</q-expansion-item>
		</div>

		<div>
			<div class="row items-center justify-between">
				<div class="zg">Правила помещения в хранилище (0)</div>
				<q-btn flat round icon="mdi-plus-circle"></q-btn>
			</div>
			<div class="grey">
				<p>Создайте первое правило.</p>
			</div>
		</div>

	</div>

	<AddDialog v-model="showAdd">
		<template v-slot:header>Новая группа</template>
		<template v-slot:main>Новая группа</template>
		<template v-slot:actions>
			<q-btn flat color="primary" label="Отмена" @click="showAdd = false" />
			<q-btn unelevated color="primary" label="Отмена" />
		</template>
	</AddDialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import draggable from 'vuedraggable'
import AddDialog from '@/components/setupcomponent/AddDialog.vue'

const gr = ref(true)
const shape = ref(false)

const list1 = ref([
	{ name: 'Storage 1', id: 1 },
	{ name: 'Storage 2', id: 2 },
])

const showAdd = ref()
const list2 = ref([])

const remove = (n: number) => {
	list2.value.splice(n, 1)
}
const remove1 = (n: number) => {
	list1.value.splice(n, 1)
}
const checkMove = () => {
	console.log(111)
}
const dragging = ref(false)
</script>

<style scoped lang="scss">
.outer {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem;
	padding-top: 1rem;
}

.grey {
	margin-top: 0;
	margin-bottom: 1rem;

	position: relative;
	padding-top: 1.3rem;
}

.zg {
	font-size: 1.1rem;
	color: $secondary;
}

.list-group>div {
	width: 100%;
	padding: 0.5rem 1rem;
	cursor: pointer;
	background: #efefef;

	&:not(:last-child) {
		border-bottom: 1px solid #0000001a;
	}

	.q-icon {
		vertical-align: top;
		margin-right: 0.5rem;
	}
}

.exp {
	background: var(--bg-grey);
	// padding: 0;
}

.dblist {
	background: var(--bg-grey);
	padding: 1rem;
}

.tog {
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 0.8rem;
}
</style>
