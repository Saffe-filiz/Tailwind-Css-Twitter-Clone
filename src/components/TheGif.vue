<template>
	<section class="w-[37.5rem] h-[36.938rem] h-auto bg-white m-auto mt-[2.063rem] rounded-2xl overflow-auto">
		<div class="h-full w-full overflow-y-scroll searchInput  inline-flex flex-wrap gap-1">
		    <TheGifSearch :ganre="searcHGanre"/>
	        <TheGifAutoPlay v-if="getMadia.length" :autoPlay="autoPlay" @click="autoPlay = !autoPlay"/>
		    <TheGifGanreList v-if="!getMadia.length"/>
		    <TheGifList v-else :gif="getMadia" />
	    </div> 
	</section>
</template>

<script setup>
	import TheGifSearch from './TheGifSearch.vue';
	import TheGifGanreList from './TheGifGanreList.vue';
	import TheGifList from './TheGifList.vue';
	import TheGifAutoPlay from './TheGifAutoPlay.vue';

	import { ref, computed } from 'vue'
	import { useStore } from 'vuex';

	const store = useStore()
	const autoPlay = ref(false)

	const searcHGanre = computed(() => store.state.gifGanre)
 
	const getMadia = computed(() => autoPlay.value ? store.getters.getGifs: store.getters.getGifImages)


</script>