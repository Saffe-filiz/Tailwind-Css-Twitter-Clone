<template>
	<div :class="imageLeyout">
	    <div v-for="(image, index) in allImages.image" :class="imageStyle" :style="{'background-image': `url(${image})`}">
	        <img :src="image" class="w-full h-full opacity-0" draggable="false">
	        <slot/>
	    </div>	
	 </div>
</template>

<script setup>

	import { computed } from 'vue';
	const allImages = defineProps({image: Array, isPost: Boolean})



	// Image container leyout
    const imageLeyout = computed(() => {
   		let numberOfPhotos = allImages.image.length;
   	    if(numberOfPhotos > 2) {
   		     if(allImages.isPost){
   		     	return 'w-[514x] grid grid-cols-2 grid-rows-2 rounded-[15px] overflow-hidden gap-[1px]';
   		     }else{
   		     	return 'w-[508x] grid grid-cols-2 grid-rows-2 gap-x-[11px] gap-y-[10px]';
   		     } 
   	    } else if(numberOfPhotos > 1){
   		     if(allImages.isPost){
   		     	return 'w-[514x] h-[290px] grid grid-cols-2 rounded-[15px] overflow-hidden backgrounImage';
   		     }else{
   		     	return 'w-[508x] h-[286px] grid grid-cols-2 gap-x-[10px]';
   		     } 
   	    } else {
   		    return 'empty:hidden w-auto'
   	    }
    });

	const imageStyle = computed(() =>  {
   	    let numberOfPhotos = allImages.image.length;
   	    if(numberOfPhotos > 3) {
   		    if(allImages.isPost){
   		     	return 'h-[144px] backgrounImage';
   		     }else{
   		     	return 'h-[137px] rounded-[15px] backgrounImage';
   		     } 
   	    }else if(numberOfPhotos > 2) {
   		     if(allImages.isPost){
   		     	return 'first:row-span-2 first:h-[290px] w-[256px] h-[144px]  backgrounImage';
   		     }else{
   		     	return 'first:row-span-2 first:h-[286px] w-[250px] h-[137px] rounded-[15px] backgrounImage';
   		     } 
   	    }else if(numberOfPhotos > 1){
   		     if(allImages.isPost){
   		     	return 'w-[256px] h-[290px] backgrounImage';
   		     }else{
   		     	return 'w-[250px] h-[286px] rounded-[15px] backgrounImage';
   		     } 
   	    }else {
   		    return 'backgrounImage rounded-[15px]'
   	    }
    });
</script>