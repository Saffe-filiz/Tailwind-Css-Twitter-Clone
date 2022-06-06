<template>
    <div class="sectionMainStyle focusInput relative group">
		<label class="text-[12px] text-[#536471] ml-2 " for="date">{{data.title}}</label>
		<DownArrow/>
		<slot/>
	</div>
</template>

<script setup>
	import DownArrow from './icons/DownArrow.vue';

	const data = defineProps({title: String})
</script>