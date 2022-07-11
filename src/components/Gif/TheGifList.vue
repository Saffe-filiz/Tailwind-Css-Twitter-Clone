<template>
	<div  class="inline-flex flex-row grow cursor-pointer relative" v-for="(gif, index) in gifs" :key="index" v-if="!isRady">
		<div class="min-w-[110px]  grow" :class="bgColor(index)">
			<img :src="gif" class="w-full h-full grow " draggable="false" @click="sendMedia(takeGif[index])">
		</div>
	</div>
	<InfiniteScroll class="w-full h-1 relative border-0" /> 
</template>

<script setup>
	import { ref, computed, inject } from 'vue';
	import { useStore } from 'vuex';
	import InfiniteScroll from '../InfiniteScroll.vue';

	const store = useStore();
	const bgColor = computed(() => (i) => {
		return i % 3 == 0 ? 'bg-[#7856ff]': i % 2 == 0 ? 'bg-[#f91880]': i % 1 == 0 ? 'bg-[#ffd400]': 'bg-[#00ba7c]'
	})

	const gifs = computed(() =>  store.getters.getGifs);
	const isRady = computed(() => store.getters.getIsEmty)
	const takeGif = computed(() => store.getters.getGifForTweet)

	const selected = inject('selected');
	const modal = inject('modal');
	const sendMedia = (gif) => {
		modal.closePopUp();
		selected.gif = true;
		store.commit('setMedia', gif)
		store.commit('setGif', [])
	}

</script>