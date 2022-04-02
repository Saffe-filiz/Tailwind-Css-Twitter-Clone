<template>
	<article class="w-full py-[5px] bg-white sticky top-0 ">
		<div class="w-[21.875rem] h-[2.375rem] rounded-[2.625rem] bg-[#f7f9f9] text-[#536471] flexCenter focusInput">
		<div class="w-[3.125rem] flexCenter">
		<svg class="w-[19px] h-[19px] fill-[#536471]" viewBox="0 0 19 19">
<path d="M16.1475 15.3525L13.4025 12.6075C14.3963 11.43 15 9.9105 15 8.25C15 4.5225 11.9775 1.5 8.25 1.5C4.5225 1.5 1.5 4.5225 1.5 8.25C1.5 11.9775 4.5225 15 8.25 15C9.91125 15 11.43 14.397 12.606 13.4025L15.351 16.1475C15.4613 16.257 15.606 16.3125 15.7485 16.3125C15.891 16.3125 16.0373 16.2578 16.146 16.1475C16.3673 15.9278 16.3673 15.5722 16.1475 15.3525ZM2.625 8.25C2.625 5.14875 5.14875 2.625 8.25 2.625C11.3513 2.625 13.875 5.14875 13.875 8.25C13.875 11.3512 11.3513 13.875 8.25 13.875C5.14875 13.875 2.625 11.3512 2.625 8.25Z"/>
</svg>
		</div>
		<input class="w-[16.875rem] h-full outline-none py-3 bg-[#f7f9f9] flexCenter" type="text" placeholder="Serach Twitter" v-model="serach">
		<div class="flexCenter w-[2.125rem] pr-2.5">
			<div class="flexCenter w-[1.375rem] h-[1.375rem] bg-[#1d9aef] cursor-pointer rounded-full" 
			 v-show="showCencelIcon" @click="cancelSeraching">
				<p class="text-white">&#10005</p>
			</div>
	    </div>
    </div>
	</article>
</template>

<script setup>
	import { ref, computed } from 'vue';
	let serach = ref('');
	let showCencelIcon = computed(() => serach.value != '')
	let cancelSeraching = () => serach.value = '';

</script>