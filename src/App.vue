<template>
	<div class="w-[79.063rem] inline-flex flex-row ">
	   <TheNavigation class="sticky"/>
	   <TheFeed>
	        <TheHeader/>
	        <TheNewPost/>
	   </TheFeed>
	   <Trends class="w-auto flex flex-col gap-y-4 pr-2.5 pl-[1.875rem]">
	   	   <TheSearch/>
	   </Trends>
	</div>
</template>

<script setup>
	import TheNavigation from './components/TheNavigation.vue';
	import TheFeed from './components/TheFeed.vue';
	import Trends from './components/Trends.vue';
	import TheSearch from './components/TheSearch.vue';
	import TheHeader from './components/TheHeader.vue';
	import TheNewPost from './components/TheNewPost.vue';
</script>