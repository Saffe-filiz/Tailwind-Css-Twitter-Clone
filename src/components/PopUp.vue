<template>
	<div class="w-screen h-screen bg-[#00000066] fixed top-0 left-0 z-30 table overflow-hidden pt-[33px]" v-if="openPopUp" @click="closePopUp(),  scrollVisibil()">
      	<TheGif v-on:click.stop v-if="showGifContent"/>
      	<TheSchedule v-on:click.stop v-if="showSchedule"/>
      	<div v-on:click.stop v-if="showNewTweet" class="w-[600px] max-h-[288px] px-3.5  bg-white rounded-2xl mx-auto">
      		<div class="w-full h-[44px] bg-red-400"></div>
            <TheNewPost/>
      	</div>
	</div>
</template>

<script setup>
	import TheGif from './Gif/TheGif.vue';
	import TheSchedule from './TheSchedule.vue';
	import TheNewPost from './TheNewPost.vue'
	import { inject, computed } from 'vue';

	const openPopUp = computed(() => [showGifContent.value, showSchedule.value, showNewTweet.value].some( v => v));

	const closePopUp = () => {
		showNewTweet.value = false
		showGifContent.value = false;
		showSchedule.value = false;
	}

	const scrollVisibil = inject('scrollVisibil'); // Coming from app vue
	const showSchedule = inject('showSchedule'); // Coming from app vue
	const showGifContent = inject('showGifContent');
	const showNewTweet = inject('showNewTweet');

	// :date="date" @date="(dateScheduling) => date = dateScheduling"
</script>
