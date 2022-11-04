<template lang="pug">
div
	.zag Настройки
	.inf
		span Адрес хранилища настроек:
		a(href="#").q-ml-md http://sol2016.digdes.com:5200/api
	br
	.mygrid
		router-link(to="/setup/dvserver").bl
			.tit Сервер Docsvision
			q-img(src="@/assets/img/serverdv.svg" width="26px")
		router-link(to="/setup/connection").bl
			.tit Соединения
			q-img(src="@/assets/img/connection.svg" width="42px")
		router-link(to="/setup/email").bl
			.tit Почтовый сервер
			q-img(src="@/assets/img/mailserver.svg" width="43px")
		router-link(to="/setup/worker").bl
			.tit Служба фоновых операций
			q-img(src="@/assets/img/worker.svg" width="35px")
		.bl.disable
			.tit Web-клиент
			q-img(src="@/assets/img/webclient.svg" width="38px")
		.bl.disable
			.tit Сервис управления бизнес-процессам
			q-img(src="@/assets/img/workflow.svg" width="32px")
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.mygrid {
	display: grid;
	grid-template-columns: repeat(3, 220px);
	gap: 1rem;
	margin: 0 auto;
	// background: pink;
	max-width: 692px;
	.bl {
		width: 220px;
		height: 180px;
		background: var(--bg-drawer);
		font-size: 1.2rem;
		color: $secondary;
		border-radius: 0.5rem;
		padding: 1rem;
		border: 1px dotted $secondary;
		position: relative;
		cursor: pointer;
		transition: 0.2s ease all;
		text-decoration: none;
		.q-img {
			position: absolute;
			bottom: 1rem;
			left: 1rem;
		}
		&:hover {
			box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.3);
			border: 1px solid #fff;
			color: #000;
		}
		&.disable {
			opacity: 0.5;
			cursor: default;
			box-shadow: none;
			border: 1px dotted $secondary;
		}
	}
}
.inf {
	text-align: center;
}
@media screen and (max-width: 750px) {
	.mygrid {
		display: block;
		.bl {
			position: relative;
			width: 100%;
			height: 100px;
			margin-bottom: 0.5rem;
			.q-img {
				position: absolute;
				left: initial;
				bottom: initial;
				right: 1rem;
				top: 1rem;
			}
		}
	}
}
</style>
