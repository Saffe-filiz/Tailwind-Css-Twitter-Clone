<template>
	<div class="w-screen h-screen bg-[#00000066] fixed top-0 left-0 z-30 table overflow-hidden pt-[33px]" v-if="openPopUp" @click="closePopUp">
      	<TheGif v-on:click.stop v-if="showGifContent"/>
      	<TheSchedule v-on:click.stop v-if="showSchedule"/>
      	<div v-on:click.stop v-if="showNewTweet" class="min-w-[600px] w-fit h-auto bg-white rounded-2xl mx-auto flex justify-between flex-col pb-1">
      		<div class="w-full h-12">
      			<div class="w-[1.875rem] h-[1.875rem] hover:bg-[#0f14191a] rounded-full flexCenter m-2 cursor-pointer">
			         <CrossIcon :size="18" class="fill-[696c70]"/>
		        </div>
      		</div>
            <TheNewPost/>
      	</div>
	</div>
</template>

<script setup>
	import TheGif from './Gif/TheGif.vue';
	import TheSchedule from './TheSchedule.vue';
	import TheNewPost from './TheNewPost.vue'
	import CrossIcon from './icons/Cross.vue';
	import { inject, computed, watch, ref } from 'vue';
    

	const scrollVisibil = inject('scrollVisibil'); // Coming from app vue
	const showSchedule = inject('showSchedule'); // Coming from app vue
	const showGifContent = inject('showGifContent');
	const showNewTweet = inject('showNewTweet');

	const openPopUp = computed(() => [showNewTweet.value, showGifContent.value, showSchedule.value].some( v => v));

	const closePopUp = () => {
		showNewTweet.value = false
		showGifContent.value = false;
		showSchedule.value = false;
		scrollVisibil()
	}

	// :date="date" @date="(dateScheduling) => date = dateScheduling"

	watch(() => [showNewTweet.value, showGifContent.value, showSchedule.value], ( v ) => {
		let [newTweet, gif, schedule] = v
		if(newTweet && schedule) {
			showNewTweet.value = false
		}else if(newTweet && gif){
			showNewTweet.value = false
		}else if(newTweet && gif == false){
			showGifContent.value = false
		}else if(newTweet && schedule == false){
			showGifContent.value = false
		}
	})
</script>
