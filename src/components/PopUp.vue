<template>
	<div class="w-screen h-screen bg-[#00000066] fixed top-0 left-0 z-30 table overflow-hidden">
		<slot/>
	</div>
</template>

<script setup>
	import { onMounted } from 'vue';

	onMounted(() => {
		let body = document.querySelector('body');
		body.style.overflow = 'hidden'
	})
</script>