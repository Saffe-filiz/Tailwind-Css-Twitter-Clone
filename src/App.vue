
<script setup>
	import TheNavigation from './components/TheNavigation.vue';
	import TimeLine from './components/TimeLine.vue';
	import Trends from './components/Trends.vue';
</script>

<template>
	<div class="h-auto w-[79.063rem] m-auto flex relative">
	   <TheNavigation/>
	   <TimeLine/>	  
	   <Trends class="w-[24.375rem] h-auto min-h-screen max-h-auto  relative bg-black pl-[1.875rem] pt-[4.063rem]"/>
	</div>
</template>