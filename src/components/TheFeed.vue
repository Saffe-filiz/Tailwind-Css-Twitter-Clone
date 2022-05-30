<template>
	<div class="w-[37.5rem] border-x border-min-border-color">
		<slot/>
		<div class="w-full h-px my-1 border-b border-min-border-color"></div>
		<Post/>

	</div>
</template>

<script setup>
	import Post from './Post.vue'
</script>

