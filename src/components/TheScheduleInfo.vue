<template>
	<div v-if="date.info" class="w-[512px] h-[17.5px] inline-flex hover:underline cursor-pointer">
		<Calendar/> 
	    <span class="text-[12px] text-[#536471]">{{date.info}}</span>
	</div>
</template>

<script setup>
	import Calendar from './icons/NewPost/Calendar.vue';
	
	const date = defineProps({info: String})
</script>