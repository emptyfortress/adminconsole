<template lang="pug">
div
	.inf
		span Адрес хранилища настроек:
		a(href="#").q-ml-md http://sol2016.digdes.com:5200/api
	.zag Настройки
	q-input(v-model="search" dense clearable autofocus ).search
		template(v-slot:prepend)
			q-icon(name="mdi-magnify")
	br
	.mygrid
		router-link(to="/setup/dvserver").bl
			.icon.serverdv
			.tit Сервер Docsvision
		router-link(to="/setup/dvserver1").bl
			.icon.serverdv
			.tit Сервер Docsvision 1
		router-link(to="/setup/connection").bl
			.icon.connection
			.tit Соединения
		router-link(to="/setup/email").bl
			.icon.mail
			.tit Почтовый сервер
		router-link(to="/setup/worker").bl
			.icon.worker
			.tit Служба фоновых операций
		.bl.disable
			.icon.webclient
			.tit Web-клиент
		.bl.disable
			.icon.workflow
			.tit Сервис управления бизнес-процессам
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const search = ref()
</script>

<style scoped lang="scss">
.search {
	width: 350px;
	margin: 0 auto;
	font-size: 1.1rem;
	margin-bottom: 1rem;
}
.mygrid {
	display: grid;
	grid-template-columns: repeat(3, 230px);
	margin: 0 auto;
	max-width: 692px;
	.bl {
		width: 230px;
		font-size: 1.2rem;
		color: $secondary;
		padding: 1rem;
		border: 1px solid transparent;
		cursor: pointer;
		transition: 0.2s ease all;
		text-decoration: none;
		.icon {
			width: 36px;
			height: 36px;
			margin-bottom: 0.5rem;
			&.mail {
				background: url('@/assets/img/mailserver.svg');
				width: 47px;
			}
			&.serverdv {
				background: url('@/assets/img/serverdv.svg');
			}
			&.worker {
				background: url('@/assets/img/worker.svg');
			}
			&.connection {
				background: url('@/assets/img/connection.svg');
			}
			&.webclient {
				background: url('@/assets/img/webclient.svg');
			}
			&.workflow {
				background: url('@/assets/img/workflow.svg');
			}
		}

		&:hover {
			border: 1px solid $primary;
			.webclient,
			.mail,
			.serverdv,
			.worker,
			.connection,
			.workflow {
				background-position: bottom;
			}
		}
		&.disable {
			opacity: 0.5;
			cursor: default;
			box-shadow: none;
			border: none;
		}
	}
}
.inf {
	text-align: right;
	font-size: 0.8rem;
	color: grey;
}
@media screen and (max-width: 750px) {
	.mygrid {
		display: block;
		.bl {
			display: flex;
			align-items: center;
			gap: 1rem;
			width: 100%;
			margin-bottom: 0.5rem;
		}
	}
}
</style>
