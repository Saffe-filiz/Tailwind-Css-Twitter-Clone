<template>
	<article class="w-full draggableArea" :class="{draggableAreaActive}" @dragleave="draggableAreaActive = false" 
	@drop.prevent="imagePrevew" 
	@dragover.prevent>
	    <slot/>
	    <div class="empty:hidden w-full inline-flex flex-row flex-wrap" :class="{i2}">
	    </div>
	</article>
</template>


<script setup>
	import { ref, inject, computed} from 'vue';

	const imageLeyout = ref('')

	const removeImage = ( index ) => images.value.splice(index, 1)
	const draggableAreaActive = inject('draggableAreaActive')
    const images = inject('images');
    const imagePrevew = inject('imagePrevew');

    const i2 = computed(() =>  images.value.length > 1 )
</script>