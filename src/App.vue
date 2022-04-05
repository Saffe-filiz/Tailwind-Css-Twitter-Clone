<template>
	<div class="w-[79.063rem] inline-flex flex-row">
	   <TheNavigation/>
	   <TheFeed>
	        <TheHeader/>
	        <TheNewPost/>
	   </TheFeed>
	  	<div class="w-auto relative hidden lg:block">
	  		<TheTrends class="w-auto flex flex-col gap-y-4 pr-2.5 pl-[1.875rem] mb-20" 
	  	        :style="{position: setPositions.sideBarPosition, top: setPositions.topValue}">
	  	    <TheSearch :style="{position: setPositions.searchPosition, top: setPositions.searchTopValue}"/>
	    </TheTrends>
	  	</div>
	</div>
</template>

<script setup>

	import { ref, reactive, onMounted, provide } from 'vue'

	import TheNavigation from './components/TheNavigation.vue';
	import TheFeed from './components/TheFeed.vue';
	import TheTrends from './components/TheTrends.vue';
	import TheSearch from './components/TheSearch.vue';
	import TheHeader from './components/TheHeader.vue';
	import TheNewPost from './components/TheNewPost.vue';

	onMounted(() => {
	    window.addEventListener("scroll", setSideBarPosition);
    })

	const setPositions = reactive({
		'sideBarPosition': 'static',
		'topValue': '0px',
		'searchPosition': 'sticky',
		'searchTopValue': '0px'
	});

	const setSideBarPosition = () => {
		if(window.pageYOffset >= 455){
			return [setPositions.sideBarPosition = 'fixed', setPositions.topValue = '-402px', 
			setPositions.searchPosition = 'fixed', setPositions.searchTopValue = '0px']
		}else {
			return [setPositions.sideBarPosition = 'static', setPositions.topValue = '0px',
			setPositions.searchPosition = 'sticky', setPositions.searchTopValue = '607']
		}
	}

	const draggableAreaActive = ref(false);
	const images = ref([]); // Take image.

    const imagePrevew = (e) => {
		let image = e.target.files || e.dataTransfer.files
		for(let index = 0; index < image.length; index++){
			images.value.push(URL.createObjectURL(image[index]))
		}
		draggableAreaActive.value = false
	}

	provide('imagePrevew', imagePrevew);
	provide('images', images);
	provide('draggableAreaActive', draggableAreaActive);


    const showTheScheduleForm = ref(false);

	const scrollHidden = () => {
		let body = document.querySelector('body');
		body.style.overflow = 'hidden';	
	}

	const scrollVisibil = () => {
		let body = document.querySelector('body');
		body.style.overflow = 'auto';
		showTheScheduleForm.value = false;
	}

	provide('scrollHidden', scrollHidden); // Hidden body scroll.
	provide('scrollVisibil', scrollVisibil); // Show body scroll.
	provide('showTheScheduleForm', showTheScheduleForm); // Toggle drag area css class.
</script> 