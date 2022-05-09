<template>
	<!-- DRAGABEL AREA START -->
	<article  :class="dragAreaBorderColor" @dragleave="draggableAreaActive = false" @drop.prevent="uploadImage" @dragover.prevent>
		<!-- DRAGABEL AREA END -->
		<!-- TEXT AREA SLOT -->
	    <slot/>
	    <!-- TEXT AREA SLOT -->
	    <!-- IMAGE GALLERY START -->
	    <ImageLayout :image="images"/>
	    <!-- IMAGE GALLERY START --> 
	</article>
</template>


<script setup>
	import { inject, computed} from 'vue';
	import ImageLayout from './ImageLayout.vue';

	const meadia = defineProps({permission: Array})

	const removeImage = ( index ) => images.value.splice(index, 1) // Remove image
	const draggableAreaActive = inject('draggableAreaActive') // Draggable area active
    const images = inject('images'); // Images
    const uploadImage = inject('uploadImage'); // Image prevew function 
    // Image style



    const dragAreaBorderColor = computed(() => {
    	let isValid = meadia.permission.some( value => value)
    	if(draggableAreaActive.value){
    	   if(isValid == meadia.permission[1] && images.value.length <= 3){
    	      return  'draggableAreaActiveValid'
    	   }else{
    	   	return 'draggableAreaActiveInValid'
    	   }
    	}else {
    	   	 return 'draggableArea'
    	}
    	
    })
</script>