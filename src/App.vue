<template>
	<div class="w-[79.063rem] inline-flex flex-row ">
	   <TheNavigation class="sticky"/>
	   <TimeLine/>	  
	   <Trends class="w-auto flex flex-col gap-y-4 pr-2.5 pl-[1.875rem]"/>
	</div>
</template>

<script setup>
	import TheNavigation from './components/TheNavigation.vue';
	import TimeLine from './components/TimeLine.vue';
	import Trends from './components/Trends.vue';
</script>