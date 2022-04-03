<template>
	<article>
	<div class="w-full min-h-[49px] h-auto py-2 relative z-0" :class="{dragArea}"
	 @dragover="dragArea = true" 
	 @dragleave="dragArea = false"
	 @drop.prevent="setImage"
	 @click="whoCanAnswer = true, showPlaceHolder = false">
		<div class="w-[507px] relative">
		    <div class="w-full pl-2.75 outline-none relative z-10" 
		    contenteditable="true" 
		    @input="$emit('post', $event.target.innerText)"></div>
		    <span class="top-0 left-2.5 absolute text-[#71767b] pointer-events-none"  
		    v-if="showPlaceHolder">What's happening</span>
		</div>
	</div>
	<slot/>
	<div class="w-full h-[35px] border-b border-min-border-color pl-2" v-if="whoCanAnswer">
		<span class="w-auto h-auto inline-flex items-center flex-row">
		    <World class="w-[15px] h-[15px] mr-1"/>
		    <p class="text-[#1d9bf0]">Everyone can replay</p>
		</span>
    </div>
   </article>
</template>

<script setup>

	import { ref, inject } from 'vue';

	import World from './icons/NewPostIcons/World.vue';

	let whoCanAnswer = ref(false);
	let showPlaceHolder = ref(true);

	let dragArea = ref(false);
	let setImage = inject('mediaUpdate')

</script>