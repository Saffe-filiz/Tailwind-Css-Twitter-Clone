<template>
	<article class="w-full draggableArea" :class="{draggableAreaActive}"
	 @dragleave="draggableAreaActive = false" @drop.prevent="takeImages" @dragover.prevent>
	<slot/>
	<div class="empty:hidden">
		<div v-if="images" v-for="image in images">
		    <img  :src="image">
		</div>
	</div>
	</article>
</template>


<script setup>
	import { ref, inject} from 'vue';

	let draggableAreaActive = inject('draggableAreaActive')


	let images = ref([]); // Take image
    // Image preview
	const takeImages = (e) => {
		let image = e.target.files || e.dataTransfer.files
		if(!image.length) return;

		for(let x = 0; x < image.length; x++){
			images.value.push(URL.createObjectURL(image[x]))
		}
		draggableAreaActive.value = false
	}

</script>