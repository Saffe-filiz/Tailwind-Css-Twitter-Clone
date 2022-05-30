<template>
	<div  class="inline-flex flex-row grow cursor-pointer relative" v-for="(madia, index) in data.gif" :key="index" >
		<div class="w-full grow" :class="bgColor(index)">
			<img :src="madia" class="w-full h-full grow  " draggable="false">
		</div>
	</div>
	<div class="w-full h-5 bg-red-400 relative border-0">
		<InfiniteScroll class="w-full h-5  bg-red-400" @observer="(num) => numberOfGif += num"/> 
	</div>
</template>

<script setup>
	import {ref, computed} from 'vue';
	import InfiniteScroll from './InfiniteScroll.vue';

	const data = defineProps({showGanre: Boolean, gif: Object})

	const numberOfGif = ref(20);
	const bgColor = computed(() => (i) => {
		return i % 3 == 0 ? 'bg-[#7856ff]': i % 2 == 0 ? 'bg-[#f91880]': i % 1 == 0 ? 'bg-[#ffd400]': 'bg-[#00ba7c]'
	})

</script>