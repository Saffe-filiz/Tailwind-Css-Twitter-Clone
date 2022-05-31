<template>
	<div  class="inline-flex flex-row grow cursor-pointer relative" v-for="(gif, index) in gifs" :key="index" >
		<div class="w-auto grow" :class="bgColor(index)">
			<img :src="gif" class="w-full h-full grow  " draggable="false">
		</div>
	</div>
	<InfiniteScroll class="w-full h-1 relative border-0" /> 
</template>

<script setup>
	import { ref, computed } from 'vue';
	import { useStore } from 'vuex';
	import InfiniteScroll from '../InfiniteScroll.vue';

	const store = useStore();
	const bgColor = computed(() => (i) => {
		return i % 3 == 0 ? 'bg-[#7856ff]': i % 2 == 0 ? 'bg-[#f91880]': i % 1 == 0 ? 'bg-[#ffd400]': 'bg-[#00ba7c]'
	})

	const gifs = computed(() =>  store.getters.getGifs)

</script>