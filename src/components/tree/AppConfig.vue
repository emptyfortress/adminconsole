<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

router.afterEach((to, from) => {
	document.querySelector(to.hash)?.scrollIntoView()
})
</script>

<template lang="pug">
.treepage
	.mainzag
		div {{ route.params.id }}

	.section#licence Лицензия
	p(v-for="n in 20") Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias saepe illum id molestias assumenda. Ipsam quibusdam nihil nisi maiores eveniet animi praesentium? Eos veniam repellat minus excepturi autem consequuntur dolores!

	.section#bd Базы данных
	p(v-for="n in 20") Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias saepe illum id molestias assumenda. Ipsam quibusdam nihil nisi maiores eveniet animi praesentium? Eos veniam repellat minus excepturi autem consequuntur dolores!
</template>

<style scoped lang="scss">
.section {
	font-size: 1.2rem;
	font-weight: 600;
}
</style>
