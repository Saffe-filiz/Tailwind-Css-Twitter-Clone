<template>
    <div class="w-full h-5 my-[0.438rem] bg-white px-[0.688rem] inline-flex justify-between items-center">
	    <span class="text-[#536471] text-sm">Auto-play GIFs</span>
		    <label for="gifAutoPlayRadio" class="w-10 h-3.5 bg-[#939393] flex items-center rounded-full relative after:w-5 after:h-5 after:bg-white after:rounded-full after:absolute after:shadow-[0_1px_3px_rgb(0,0,0,0.5)] after:duration-100 cursor-pointer" 
		    :class="{'after:ml-5 bg-[#6bc9fb] after:bg-[#1d9bf0]': autoPlay}" >
		    <input type="checkbox" class="hidden" id="gifAutoPlayRadio" @change="setIsPlay" @click="isPlay = !isPlay">
		</label>
    </div>
</template>

<script setup>
	import { computed, ref, watch } from 'vue';
	import { useStore } from 'vuex';

	let isPlay = ref()
	const store = useStore();
    const autoPlay = computed(() =>  store.getters.getGifAutoPlay)
	const setIsPlay = () => store.commit('setGifAutoPlay', isPlay)
	
</script>