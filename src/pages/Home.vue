<template lang="pug">
q-page(padding)
	h2 Hello!
	q-btn(label="test" color="primary")
	SvgIcon(name="alert")
</template>

<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
</style>
