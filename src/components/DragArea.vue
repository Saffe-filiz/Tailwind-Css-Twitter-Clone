<template>
	<article 
	    :class="dragAreaBorderColor" 
	    @dragleave="draggableAreaActive = false" 
	    @drop.prevent="uploadImage" 
	    @dragover.prevent>
	    <slot/>
	    <ImageGallery/>
	</article>
</template>


<script setup>
	import { ref, inject, computed, nextTick} from 'vue';
	import { useStore } from 'vuex'
	import ImageGallery from './ImageGallery.vue';

    const uploadImage = inject('uploadImage');
    const draggableAreaActive = inject('draggableAreaActive'); 
    const selected = inject('selected');

    const store = useStore();
    const mediaLength = computed(() => store.getters.getMediaLength)

    const dragAreaBorderColor = computed(() => {
    	if(!draggableAreaActive.value){
    	    return 'max-w-[512px] w-full border-2 border-transparent rounded'
    	}
    	else if(!selected.gif && mediaLength.value <= 3){
    	      return  'border-[#1d9bf0] max-w-[512px] w-full border-2 border-dashed  rounded'
    	}else{
    		
    	   	  return 'border-red-600 max-w-[512px] w-full border-2 border-dashed  rounded'
    	}
    })
</script>