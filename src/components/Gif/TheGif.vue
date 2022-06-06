<template>
	<section class="w-[37.5rem] h-[36.938rem] h-auto bg-white m-auto rounded-2xl overflow-auto">
		<div class="h-full w-full overflow-y-scroll inline-flex flex-wrap gap-1">
		    <TheGifSearch/>
	        <TheGifAutoPlay v-if="isActive"/>
	        <TheGifGanreList v-if="!isActive"/>
	        <TheGifList v-else/>  
	    </div> 
	</section>
</template>

<script setup>
	import TheGifSearch from './TheGifSearch.vue';
	import TheGifGanreList from './TheGifGanreList.vue';
	import TheGifList from './TheGifList.vue';
	import TheGifAutoPlay from './TheGifAutoPlay.vue';

	import { computed } from 'vue';
	import { useStore } from 'vuex';

	const store = useStore()
	const isActive = computed(() => store.getters.getGifIsReady)
</script>