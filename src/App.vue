<template>
	<div class="w-[79.063rem] inline-flex flex-row">
	   <TheNavigation/>
	   <TheFeed>
	        <TheHeader/>
	        <TheNewPost/>
	   </TheFeed>
	  	<div class="w-auto relative">
	  		<TheTrends class="w-auto flex flex-col gap-y-4 pr-2.5 pl-[1.875rem] mb-20" 
	  	        :style="{position: setPositions.sideBarPosition, top: setPositions.topValue}">
	  	    <TheSearch :style="{position: setPositions.searchPosition, top: setPositions.searchTopValue}"/>
	    </TheTrends>
	  	</div>
	</div>
</template>

<script setup>

	import { reactive, onMounted, computed } from 'vue'

	import TheNavigation from './components/TheNavigation.vue';
	import TheFeed from './components/TheFeed.vue';
	import TheTrends from './components/TheTrends.vue';
	import TheSearch from './components/TheSearch.vue';
	import TheHeader from './components/TheHeader.vue';
	import TheNewPost from './components/TheNewPost.vue';

	onMounted(() => {
	    window.addEventListener("scroll", setSideBarPosition);
    })

	let setPositions = reactive({
		'sideBarPosition': 'static',
		'topValue': '0px',
		'searchPosition': 'sticky',
		'searchTopValue': '0px'
	});

	let setSideBarPosition = () => {
		if(window.pageYOffset >= 455){
			return [setPositions.sideBarPosition = 'fixed', setPositions.topValue = '-402px', 
			setPositions.searchPosition = 'fixed', setPositions.searchTopValue = '0px']

		}else {
			return [setPositions.sideBarPosition = 'static', setPositions.topValue = '0px',
			setPositions.searchPosition = 'sticky', setPositions.searchTopValue = '607']
		}
	}
</script> 