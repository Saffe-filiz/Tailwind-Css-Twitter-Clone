<template>
	<section class="w-[37.5rem] h-[36.938rem] h-auto bg-white m-auto rounded-2xl overflow-auto">
		<div class="w-full h-full overflow-y-scroll relative">
		    <TheGifSearch/>
	        <TheGifPlay v-if="isActive || noGif"/>
	        <TheGifGanreList v-if="!isActive && !noGif"/>
	        <TheGifList v-else/>
            <Loading v-if="gifLoading"/>
	        <TheGifNonFund v-if="noGif && !gifLoading"/>
	    </div> 
	</section>
</template>

<script setup>
	import TheGifSearch from './TheGifSearch.vue';
	import TheGifGanreList from './TheGifGanreList.vue';
	import TheGifList from './TheGifList.vue';
	import TheGifPlay from './TheGifPlay.vue';
	import TheGifNonFund from './TheGifNonFund.vue';
	import Loading from '../Loading.vue'

	import { computed, onMounted, ref } from 'vue';
	import { useStore } from 'vuex';
	
	const store = useStore()
	
	const isActive = computed(() => store.getters.getGifIsReady)
	const noGif = computed(() => store.getters.getGifIsNonFind)
	const gifLoading = computed(() => store.getters.getGifIsLoading)
</script>