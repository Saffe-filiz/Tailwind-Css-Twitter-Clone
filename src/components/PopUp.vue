<template>
	<div class="w-screen h-screen bg-[#00000066] fixed top-0 left-0 z-30 table overflow-hidden"
	 v-if="openPopUp" @click="closePopUp(),  scrollVisibil()">
      	<TheGif v-on:click.stop v-if="showGifContent"/>
      	<TheSchedule v-on:click.stop v-if="showSchedule"/>
	</div>
</template>

<script setup>
	import TheGif from './TheGif.vue';
	import TheSchedule from './TheSchedule.vue';
	import { inject, computed } from 'vue';

	const openPopUp = computed(() => [showGifContent.value, showSchedule.value].some( v => v));

	const closePopUp = () => {
		showGifContent.value = false;
		showSchedule.value = false;
	}

	const scrollVisibil = inject('scrollVisibil'); // Coming from app vue
	const showSchedule = inject('showSchedule'); // Coming from app vue
	const showGifContent = inject('showGifContent');

	// :date="date" @date="(dateScheduling) => date = dateScheduling"
</script>
