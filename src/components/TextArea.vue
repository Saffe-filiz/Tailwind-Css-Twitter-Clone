<template>
	<article class="w-full min-h-12 py-2">
		<div class="w-full relative">
		    <div 
		        id="textArea" 
		        class="w-full outline-none" 
		        contenteditable 
		        @input="e => tweet = e.target.innerText">
		    </div>
		    <div 
		       class="absolute top-0 left-0 pointer-events-none" 
		       v-if="showPlaceholderMassage">{{placeholderMassage}}
		   </div>
	    </div>
   </article>
</template>

<script setup>
	import { ref, watch, inject, defineEmits } from 'vue';

	const emit = defineEmits(['post'])

	const modal = inject('modal'); 

	let tweet = ref('') 


	let placeholderMassage = ref('What\'s happening ?')
	let showPlaceholderMassage = ref(true);

	watch( tweet, (text) => {
		modal.openNewTweetModal ? modal.textAreaIsEmty = text != '': null
		showPlaceholderMassage.value = false;
		emit('post', text)
	})
</script>
