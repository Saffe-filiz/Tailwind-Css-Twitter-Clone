<template>
	<div class="w-[79.063rem] inline-flex flex-row ">
	   <TheNavigation/>
	   <TheFeed>
	        <TheHeader/>
	        <TheNewPost/>
	   </TheFeed>
	   <TheTrends class="w-auto flex flex-col gap-y-4 pr-2.5 pl-[1.875rem] sticky top-0 mb-20">
	   	   <TheSearch/>
	   </TheTrends>
	</div>
</template>

<script setup>
	import TheNavigation from './components/TheNavigation.vue';
	import TheFeed from './components/TheFeed.vue';
	import TheTrends from './components/TheTrends.vue';
	import TheSearch from './components/TheSearch.vue';
	import TheHeader from './components/TheHeader.vue';
	import TheNewPost from './components/TheNewPost.vue';
</script>