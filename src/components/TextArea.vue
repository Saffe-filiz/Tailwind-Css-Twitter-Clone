<template>
	<article>
	<div class="w-full min-h-[46px] py-2">
		<div class="w-[507px] relative">
		    <div class="w-full pl-2.75 outline-none relative z-10" contenteditable  @input="$emit('post', $event.target.innerText)"></div>
	    </div>
	</div>
   </article>
</template>

<script setup>

	import { ref, inject } from 'vue';
	import World from './icons/NewPostIcons/World.vue';
	let whoCanAnswer = ref(false);
</script>