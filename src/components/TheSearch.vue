<template>
	<article class="xl:w-[21.875rem] lg:w-[18.125rem] py-[5px] z-10 bg-white sticky top-0 fill-[#5B7083] ">
		<div class="xl:w-full w-full h-[2.375rem] rounded-[2.625rem] bg-[#f7f9f9] text-[#536471] flexCenter focusInput">
		  <Search :size="18.9" class="w-[3.125rem] flexCenter"/>
		<!-- SEARCH INPUT START -->
		<input class="w-[16.875rem] h-full outline-none py-3 bg-[#f7f9f9] flexCenter" type="text" placeholder="Serach Twitter" v-model="serach">
		<!-- SEARCH INPUT END -->
		<div class="flexCenter w-[2.125rem] pr-2.5">
		    <!-- CANCEL ICON START -->	
			<div class="flexCenter w-[1.375rem] h-[1.375rem] bg-[#1d9aef] cursor-pointer rounded-full"  v-show="serach" @click="cancelSeraching">
			    <p class="text-white">&#10005</p>
			</div>
			<!-- CANCEL ICON END -->	
	    </div>
        </div>
	</article>
</template>

<script setup>
	import { ref } from 'vue';
	import Search from './icons/Search.vue'

	let serach = ref(''); // Search input value
	const cancelSeraching = () => serach.value = '';

</script>