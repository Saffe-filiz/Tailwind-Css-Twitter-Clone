<template>
	<article class="w-full min-h-12 py-2">
		<div class="w-full relative">
		    <div id="textArea" class="w-full outline-none" contenteditable 
		    @input="$emit('post', $event.target.innerText), showPlaceholderMassage = false"></div>
		    <div class="absolute top-0 left-0 pointer-events-none" v-if="showPlaceholderMassage">{{placeholderMassage}}</div>
	    </div>
   </article>
</template>

<script setup>
	import { ref } from 'vue';

	let placeholderMassage = ref('What\'s happening ?')
	let showPlaceholderMassage = ref(true)
</script>
