<template>
	<div  class="w-[18.063rem] h-[8.75rem] last:w-full relative cursor-pointer" v-for="madia in list.gif">
		<img :src="madia" class="w-full h-full object-cover" draggable="false">
	</div>
</template>

<script setup>
	const list = defineProps({gif: Array})
</script>