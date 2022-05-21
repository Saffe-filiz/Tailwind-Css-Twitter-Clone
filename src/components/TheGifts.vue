<template>
	<section class="w-[37.5rem] h-[36.938rem] h-auto bg-white m-auto mt-[2.063rem] rounded-2xl overflow-auto" >
		<div class="h-full w-full overflow-y-scroll searchInput  inline-flex flex-wrap gap-1">
		    <TheGiftsSearch :ganre="serachAreaIsActive" />
		    <div class="w-full h-5 my-[0.438rem] bg-white px-[0.688rem] inline-flex justify-between items-center" v-if="getMadia.length">
			    <span class="text-[#536471] text-sm">Auto-play GIFs</span>
			    <label for="gifAutoPlayRadio" class="w-10 h-3.5 bg-[#939393] flex items-center rounded-full relative after:w-5 after:h-5 after:bg-white after:rounded-full after:absolute after:shadow-[0_1px_3px_rgb(0,0,0,0.5)] after:duration-100 cursor-pointer"  
			        :class="{'after:ml-5 bg-[#6bc9fb] after:bg-[#1d9bf0]': gifAutoPlayRadio}">
				    <input type="checkbox"  class="hidden" id="gifAutoPlayRadio" v-model="gifAutoPlayRadio">
			    </label>
		    </div>
		    <TheGifGanreList v-if="!getMadia.length"/>
		    <TheGİftsList v-else :gif="getMadia" />
	    </div> 
	</section>
</template>

<script setup>
	import TheGiftsSearch from './TheGiftsSearch.vue';
	import TheGifGanreList from './TheGifGanreList.vue';
	import TheGİftsList from './TheGİftsList.vue';

	import { ref, computed } from 'vue'
	import { useStore } from 'vuex';

	const store = useStore()
	let gifAutoPlayRadio = ref(false)

	let ganre = ref('')

	const serachAreaIsActive = computed(() => store.state.gifGanre)

	const getMadia = computed(() => gifAutoPlayRadio.value ? store.getters.getGifs: store.getters.getGifImages)


</script>