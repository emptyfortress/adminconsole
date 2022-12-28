<template lang="pug">
.database
	q-table(
		flat
		:rows="rows"
		:columns="columns"
		row-key="name"
		hide-bottom)

		template(v-slot:body="props")
			q-tr(:props="props" :class="{ cool : props.row.def}")
				q-td(key="psevdo" :props="props")
					q-icon(name="mdi-database" size="16px" v-if="props.row.def").q-mr-sm
					q-icon(name="mdi-database-outline" size="16px" v-else).q-mr-sm
					span {{props.row.psevdo}}
				q-td(key="server" :props="props") {{props.row.server}}
				q-td(key="index" :props="props") {{props.row.index}}
				q-td(key="version" :props="props") {{props.row.version}}
				q-td(key="date" :props="props") {{props.row.date}}
				q-td(key="def" :props="props").text-center
					q-btn(round flat icon="mdi-checkbox-marked-circle" size="sm" v-if="props.row.def")
					q-btn(round flat icon="mdi-checkbox-blank-circle-outline" size="sm" v-else @click="assign(props.row.psevdo)")
				q-td(key="def" :props="props").text-right
					q-btn(round flat icon="mdi-pencil" size="sm" )
					q-btn(round flat icon="mdi-trash-can-outline" size="sm" )

q-dialog(v-model="change")
	q-card.q-pa-sm
		q-card-section(class="row items-center q-pb-none")
			div(class="text-h6") База данных по умолчанию
			q-space
			q-btn(icon="close" flat round dense v-close-popup)
		q-card-section Вы действительно хотите назначить <span class="name">{{changename}}</span> в качестве базы по умолчанию? <br />Это может занять некоторые время.
		q-card-section.def При обращении к серверу Docsvision без ввода дополнительных параметров, происходит подключение к базе данных по умолчанию. Эта же база обрабатывается сервисами.
		q-card-actions(align="right")
			q-btn(flat label="Отмена" color="primary" v-close-popup)
			q-btn(flat label="Назначить" color="primary" v-close-popup)
</template>

<script setup lang="ts">
import { ref } from 'vue'

const change = ref(false)
const changename = ref('')

const assign = (e) => {
	changename.value = e
	change.value = true
}

const columns = [
	{
		name: 'psevdo',
		required: true,
		label: 'Псевдоним',
		align: 'left',
		field: 'psevdo',
		sortable: true,
	},
	{ name: 'server', align: 'left', label: 'Сервер', field: 'server', sortable: true },
	{ name: 'index', align: 'left', label: 'Индексируется', field: 'index' },
	{ name: 'version', align: 'left', label: 'Версия', field: 'version' },
	{ name: 'date', align: 'left', label: 'Дата создания', field: 'date' },
	{ name: 'def', align: 'left', label: 'По умолчанию', field: 'def' },
	{ name: 'action', align: 'right', label: 'Действия' },
]
const rows = [
	{
		psevdo: 'AGSupport',
		server: 'Docsvision 1',
		index: 'yes',
		version: 4373,
		date: '20.10.2021',
		def: true,
	},
	{
		psevdo: 'DvTest',
		server: 'Docsvision 1',
		index: 'yes',
		version: 4373,
		date: '04.11.2022',
		def: false,
	},
	{
		psevdo: 'DvShowCase',
		server: 'Docsvision 1',
		index: 'yes',
		version: 4373,
		date: '09.07.2021',
		def: false,
	},
]
</script>

<style scoped lang="scss">
.database {
	// display: grid;
	// grid-template-columns: auto 1fr;
}
:deep(.q-table th) {
	font-size: 0.7rem;
	font-weight: normal;
	color: hsl(0, 0%, 40%);
}
.cool {
	font-weight: 600;
	background: var(--bg-selected);
}
.def {
	margin-top: 0;
	padding-top: 0;
	font-size: 0.8rem;
	color: hsla(0, 0%, 40%, 1);
}
.name {
	font-weight: 600;
	padding: 3px 8px;
	background: #efefef;
}
</style>
