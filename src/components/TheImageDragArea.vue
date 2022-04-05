<template>
	<article class="w-full draggableArea" :class="{draggableAreaActive}" @dragleave="draggableAreaActive = false" 
	@drop.prevent="imagePrevew" 
	@dragover.prevent>
	<slot/>
	<div class="empty:hidden w-auto h-auto gap-[0.688rem] inline-flex flex-row flex-wrap mt-[0.313rem]">
		<div v-if="images" v-for="(image, index) in images" :key="index">
		    <div class="w-[15.5rem] h-[17.813rem] rounded-2xl overflow-hidden bg-cover p-[5px]" 
		    :style="{'background-image':`url(${image})`}">
		       <button @click="removeImage(index)" class="w-[1.875rem] h-[1.875rem] bg-[#0f1419bf] rounded-full text-white hover:bg-[#272c30bf] hoverDuration">&#10005</button>
		    </div>
		</div>
	</div>
	</article>
</template>


<script setup>
	import { ref, inject} from 'vue';

	const removeImage = ( index ) => images.value.splice(index, 1)
	const draggableAreaActive = inject('draggableAreaActive')
    const images = inject('images');
    const imagePrevew = inject('imagePrevew');
</script>