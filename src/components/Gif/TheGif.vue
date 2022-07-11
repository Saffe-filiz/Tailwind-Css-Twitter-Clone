<template>
	<section class="w-[37.5rem] h-[36.938rem] h-auto bg-white m-auto rounded-2xl overflow-auto">
		<div class="w-full h-full overflow-y-scroll " :class="{'inline-flex flex-wrap gap-1': !noGif || gifLoading}" >
		    <TheGifSearch/>
	        <TheGifPlay v-if="isActive || noGif"/>
	        <TheGifGanreList v-if="!isActive && !noGif && !gifLoading"/>
	        <TheGifList v-else/>
	        <h1 v-if="gifLoading">Loading</h1>
	        <div v-if="noGif && !gifLoading" class="w-full mx-auto my-[29px] flex justify-center">
	        	<div class="w-[300px] h-[280px] text-left">
	        		<img src="https://abs.twimg.com/sticky/illustrations/empty-states/portrait-bust-wearing-sunglasses-400x200.v1.png">
	        		<h2 class="text-[#0f1419] text-2xl font-extrabold">No GIFs found</h2>
	        		<p class="text-[#536471] text-sm">Try searching for something else instead.</p>
	        	</div>
	        </div>
	    </div> 
	</section>
</template>

<script setup>
	import TheGifSearch from './TheGifSearch.vue';
	import TheGifGanreList from './TheGifGanreList.vue';
	import TheGifList from './TheGifList.vue';
	import TheGifPlay from './TheGifPlay.vue';

	import { computed, onMounted, ref } from 'vue';
	import { useStore } from 'vuex';
	
	const store = useStore()
	const isActive = computed(() => store.getters.getGifIsReady)
	const noGif = computed(() => store.getters.getIsEmty)
	const gifLoading = computed(() => store.getters.getGifIsLoading)
</script>