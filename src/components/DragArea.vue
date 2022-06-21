<template>
	<article 
	    :class="dragAreaBorderColor" 
	    @dragleave="draggableAreaActive = false" 
	    @drop.prevent="uploadImage" 
	    @dragover.prevent>
	    <slot/>
	    <ImageGallery :image="images">
	    	<button 
	    	    class="w-7 h-7 rounded-full bg-[#0f1419bf] hover:bg-[#272c30bf] absolute top-1 left-1 text-white hoverDuration"
	    	    @click="removeImage(index)">&#10005</button>
	    </ImageGallery>
	</article>
</template>


<script setup>
	import { inject, computed} from 'vue';
	import ImageGallery from './ImageGallery.vue';

	const meadia = defineProps({permission: Array})

	const removeImage = ( index ) => images.value.splice(index, 1) // Remove image
	const draggableAreaActive = inject('draggableAreaActive') // Draggable area active
    const images = inject('images'); // Images
    const uploadImage = inject('uploadImage'); // Image prevew function 

    const dragAreaBorderColor = computed(() => {
    	let isValid = meadia.permission.some( value => value)

    	if(!draggableAreaActive.value){
    	    return 'max-w-[512px] w-full border-2 border-transparent rounded'
    	}
    	if(isValid == meadia.permission[1] && images.value.length <= 3){
    	      return  'border-[#1d9bf0] max-w-[512px] w-full border-2 border-dashed  rounded'
    	}else{
    	   	  return 'border-red-600 max-w-[512px] w-full border-2 border-dashed  rounded'
    	}
    })
</script>