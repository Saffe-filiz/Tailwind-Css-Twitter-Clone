<template>
	<div class="w-[37.5rem] border-x border-min-border-color">
		<TheHeader/>
		<TheNewTweet/>
		<div class="w-full h-px my-1 border-b border-min-border-color"></div>
		<Post/>
	</div>
</template>

<script setup>
	import Post from './Post.vue'
	import TheNewTweet from './TheNewTweet.vue';
	import TheHeader from './TheHeader.vue';
	import { inject } from 'vue';

	const modal = inject('modal');
</script>

