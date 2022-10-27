<template lang="pug">
div
	.zag Настройки
	br
	.mygrid
		.bl(@click="goto('dvserver')")
			.tit Docsvision server
			q-img(src="@/assets/img/serverdv.svg" width="26px")
		.bl(@click="goto('email')")
			.tit Email server
			q-img(src="@/assets/img/mailserver.svg" width="43px")
		.bl(@click="goto('worker')")
			.tit Worker service
			q-img(src="@/assets/img/worker.svg" width="35px")
		.bl.disable
			.tit Web-client
			q-img(src="@/assets/img/webclient.svg" width="38px")
		.bl.disable
			.tit Workflow service
			q-img(src="@/assets/img/workflow.svg" width="32px")
</template>

<script setup lang="ts">
import { router } from '@/router/router'

const goto = (e: string) => {
	router.push({ name: e })
}
</script>

<style scoped lang="scss">
.mygrid {
	display: grid;
	grid-template-columns: repeat(3, 200px);
	gap: 1rem;
	margin: 0 auto;
	max-width: 632px;
	.bl {
		width: 200px;
		height: 200px;
		background: var(--bg-drawer);
		font-size: 1.2rem;
		color: $secondary;
		border-radius: 0.5rem;
		padding: 1rem;
		border: 1px dotted $secondary;
		position: relative;
		cursor: pointer;
		transition: 0.2s ease all;
		.q-img {
			position: absolute;
			bottom: 1rem;
			left: 1rem;
		}
		&:hover {
			box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.3);
			border: 1px solid #fff;
		}
		&.disable {
			opacity: 0.5;
			cursor: default;
			box-shadow: none;
			border: 1px dotted $secondary;
		}
	}
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
