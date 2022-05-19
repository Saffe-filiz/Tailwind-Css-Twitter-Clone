<template>
	<div  class="inline-flex flex-row grow bg-red-100 cursor-pointer" v-for="madia in list.gif">
		<img :src="madia.url" class="grow" draggable="false">
	</div>
</template>

<script setup>
	const list = defineProps({gif: Object})
</script>