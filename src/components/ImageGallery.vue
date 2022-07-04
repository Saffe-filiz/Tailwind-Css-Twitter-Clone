<template>
	<div :class="imageLeyout">
	    <div
	        v-for="(image, index) in media" 
	        :class="imageStyle" 
	        :style="{'background-image': `url(${image})`}">
	        <img
	            class="w-full h-full opacity-0" 
	            :src="image" 
	            draggable="false">
	        <button 
	    	    class="w-7 h-7 rounded-full bg-[#0f1419bf] hover:bg-[#272c30bf] absolute top-1 left-1 text-white hoverDuration"
	    	    @click="removeMedia(index)">&#10005
	    	</button>
	    </div>	
	 </div>
</template>

<script setup>

	import { computed } from 'vue';
	import { useStore } from 'vuex';

	const allImages = defineProps({isPost: Boolean});

	const store = useStore();
	const media = computed(() => store.getters.getMedia);
	const removeMedia = ( index ) => store.commit('removeMedia', index);

    const imageLeyout = computed(() => {
   		let numberOfPhotos = media.value.length;
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
   	    let numberOfPhotos = media.value.length;
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