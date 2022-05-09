<template>
	<div :class="imageLeyout">
	    <div v-for="(image, index) in allImages.image" :class="imageStyle" :style="{'background-image': `url(${image})`}">
	        <img :src="image" class="w-full h-full opacity-0" draggable="false">
	        <!-- IMAGE REMOVE BUTTON START -->
	        <button class="w-7 h-7 rounded-full bg-[#0f1419bf] hover:bg-[#272c30bf] absolute top-1 left-1 text-white hoverDuration" @click="removeImage(index)">&#10005</button>
	         <!-- IMAGE REMOVE BUTTON END -->
	    </div>	
	 </div>
</template>

<script setup>

	import { computed } from 'vue';
	const allImages = defineProps({image: Array})



	// Image container leyout
    const imageLeyout = computed(() => {
   		let numberOfPhotos = allImages.image.length;
   	    if(numberOfPhotos > 2) {
   		    return  'imageLeyoutThree'
   	    } else if(numberOfPhotos > 1){
   		    return 'imageLeyoutTwo'
   	    } else {
   		    return 'empty:hidden w-auto'
   	    }
    });

	const imageStyle = computed(() =>  {
   	    let numberOfPhotos = allImages.image.length;
   	    switch(numberOfPhotos){
   	    	case 4:
   	    	    return 'imageStyleFour';
   	    	    break;
   	    	case 3:
   	    	    return 'imageStyleThree';
   	    	    break;
   	    	case 2:
   	    	    return 'imageStyleTwo';
   	    	    break;
   	    	default:
   	    	return 'backgrounImage'
   	    }
    });
</script>