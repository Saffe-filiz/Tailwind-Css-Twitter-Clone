<template>
	<div class="w-[79.063rem] inline-flex flex-row ml-4">
	    <TheNavigation/>
	    <TheFeed>
	        <TheHeader/>
	        <TheNewPost/>
	    </TheFeed>
	   	<div class="w-auto h-[1280px] relative hidden lg:block">
	  		<TheTrends class="w-auto flex flex-col gap-y-[14px] pr-2.5 pl-[1.875rem]" 
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
		if(window.pageYOffset >= 510){
			return [setPositions.sideBarPosition = 'fixed', setPositions.topValue = '-445px', 
			setPositions.searchPosition = 'fixed', setPositions.searchTopValue = '0px']
		}else {
			return [setPositions.sideBarPosition = 'static', setPositions.topValue = '0px',
			setPositions.searchPosition = 'sticky', setPositions.searchTopValue = '600']
		}
	}
	
    const showSchedule = ref(false);
    const showGifContent = ref(false)

    // Hide page scroll
	const scrollHidden = () => {
		let body = document.querySelector('body');
		body.style.overflow = 'hidden';	
	}

	// Visibile page scroll
	const scrollVisibil = () => {
		let body = document.querySelector('body');
		body.style.overflow = 'auto';
		showSchedule.value = false;
	}

	provide('scrollHidden', scrollHidden); // Hidden body scroll.
	provide('scrollVisibil', scrollVisibil); // Show body scroll.
	provide('showSchedule', showSchedule); // Toggle drag area css class.
	provide('showGifContent', showGifContent)
</script> 