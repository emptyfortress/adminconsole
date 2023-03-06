<script setup lang="ts"></script>

<template lang="pug">
div
	fieldset
		legend Шаблоны и настройки бизнес процессов
		.form1
			.label Путь к справочникам и шаблонам:
			q-input(dense outlined bg-color="white")
			q-btn(flat round icon="mdi-dots-horizontal" color="primary") 

	fieldset
		legend Дополнительно
		.form1
			.label Сертификат:
			q-input( dense outlined bg-color="white")
			q-btn(flat round icon="mdi-dots-horizontal" color="primary") 

	fieldset
		legend Сервисы для обработки БД
		p laskjlajk
</template>

<style scoped lang="scss">
.form1 {
	display: grid;
	grid-template-columns: 230px 1fr auto;
	align-items: baseline;
	justify-content: start;
	row-gap: 0.4rem;
	column-gap: 1rem;
}
</style>
