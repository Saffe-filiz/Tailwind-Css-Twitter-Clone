<template>
	<section class="w-[37.5rem] h-[36.938rem] h-auto bg-white m-auto mt-[2.063rem] rounded-2xl overflow-auto">
		<div class="h-full w-full overflow-y-scroll searchInput  inline-flex flex-wrap gap-1 relative">
		    <TheGifSearch :ganre="searcHGanre" :number="numberOfGif"/>
	        <TheGifAutoPlay v-if="getMadia.length" :autoPlay="autoPlay">
	            <input type="checkbox" class="hidden" id="gifAutoPlayRadio" v-model="autoPlay">
	        </TheGifAutoPlay>
		    <TheGifGanreList v-if="!getMadia.length"/>
		    <TheGifList v-else :gif="getMadia" />   
		    <InfiniteScroll ref="test" class="w-[100px] h-4 bg-red-100 absolute top-[100px] z-100" @test="(v) => numberOfGif += v"/>
	    </div> 
	</section>
	
</template>

<script setup>
	import TheGifSearch from './TheGifSearch.vue';
	import TheGifGanreList from './TheGifGanreList.vue';
	import TheGifList from './TheGifList.vue';
	import TheGifAutoPlay from './TheGifAutoPlay.vue';
	import InfiniteScroll from './InfiniteScroll.vue';

	import { ref, computed, onMounted } from 'vue'
	import { useStore } from 'vuex';

	const store = useStore();
	const autoPlay = ref(false);
	const numberOfGif = ref(40)

	const searcHGanre = computed(() => store.state.gifGanre)
 
	const getMadia = computed(() => autoPlay.value ? store.getters.getGifs: store.getters.getGifImages)
</script>