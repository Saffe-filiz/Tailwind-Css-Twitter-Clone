<template>
	<!-- DRAGABEL AREA START -->
	<article  :class="dragAreaBorderColor" @dragleave="draggableAreaActive = false" @drop.prevent="imagePrevew" @dragover.prevent>
		<!-- DRAGABEL AREA END -->
		<!-- TEXT AREA SLOT -->
	    <slot/>
	    <!-- TEXT AREA SLOT -->
	    <!-- IMAGE GALLERY START -->
	    <div :class="imageLeyout">
	        <div v-for="(image, index) in images" :class="imageStyle" :style="{'background-image': `url(${image})`}">
	            <img :src="image" class="w-full h-full opacity-0">
	            <!-- IMAGE REMOVE BUTTON START -->
	            <button class="w-7 h-7 rounded-full bg-[#0f1419bf] hover:bg-[#272c30bf] absolute top-1 left-1 text-white hoverDuration" @click="removeImage(index)">&#10005</button>
	            <!-- IMAGE REMOVE BUTTON END -->
	        </div>	
	    </div>
	    <!-- IMAGE GALLERY START --> 
	</article>
</template>


<script setup>
	import { ref, inject, computed} from 'vue';

	const removeImage = ( index ) => images.value.splice(index, 1) // Remove image
	const draggableAreaActive = inject('draggableAreaActive') // Draggable area active
    const images = inject('images'); // Images
    const imagePrevew = inject('imagePrevew'); // Image prevew function 
    // Image style
    const imageStyle = computed(() =>  {
   	    let numberOfPhotos = images.value.length;
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
    // Image container leyout
    const imageLeyout = computed(() => {
   		let numberOfPhotos = images.value.length;
   	    if(numberOfPhotos > 2) {
   		    return  'imageLeyoutThree'
   	    } else if(numberOfPhotos > 1){
   		    return 'imageLeyoutTwo'
   	    } else {
   		    return 'empty:hidden w-auto'
   	    }
    });

    const dragAreaBorderColor = computed(() => {
    	if(draggableAreaActive.value){
    		return  images.value.length < 4 ? 'draggableAreaActiveValid': 'draggableAreaActiveInValid'
        }else {
        	return 'draggableArea'
        }
    })
</script>