<template>
	<article>
	<div class="w-full min-h-[42px] py-2 pl-2">
		<div class="w-[507px] relative">
		    <div id="textArea" class="w-full outline-none" contenteditable 
		    @input="$emit('post', $event.target.innerText), showPlaceholderMassage = false"></div>
		    <div class="absolute top-0 left-0 pointer-events-none" v-if="showPlaceholderMassage">{{placeholderMassage}}</div>
	    </div>
	</div>
   </article>
</template>

<script setup>

	import { ref } from 'vue';
	import World from './icons/NewPostIcons/World.vue';

	let placeholderMassage = ref('What\'s happening ?')
	let showPlaceholderMassage = ref(true)
</script>
