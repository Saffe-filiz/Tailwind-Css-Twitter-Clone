<template>
	<article class="w-full draggableArea" :class="{draggableAreaActive}" @dragleave="draggableAreaActive = false" 
	@drop.prevent="imagePrevew" @dragover.prevent>
	<slot/>
	<div class="empty:hidden w-auto h-auto gap-[11px] inline-flex flex-row flex-wrap mt-[5px]">
		<div  class="" v-if="images" v-for="(image, index) in images" :key="index">
		    <div class="w-[248px] h-[285px] rounded-2xl overflow-hidden bg-cover relative" 
		    :style="{'background-image':`url(${image})`}">
		       <button @click="removeImage(index)" class="w-[30px] h-[30px] bg-[#0f1419bf] rounded-full absolute inset-1.5 text-white hover:bg-[#272c30bf] hoverDuration">&#10005</button>
		    </div>
		</div>
	</div>
	</article>
</template>


<script setup>
	import { ref, inject} from 'vue';

	const removeImage = (index) => images.value.splice(index, 1)

	const draggableAreaActive = inject('draggableAreaActive')
    const images = inject('images');
    const imagePrevew = inject('imagePrevew');



</script>