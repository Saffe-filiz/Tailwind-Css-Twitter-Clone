<template>
	<div class="w-screen h-screen bg-[#00000066] fixed top-0 left-0 z-30 overflow-hidden p-[33px]" @click="modal.exitPopUp">
      	<TheGif v-on:click.stop v-if="modal.openGifModal"/>
      	<TheSchedule v-on:click.stop v-if="modal.openScheduleModal"/>
      	<TheUnsentTweets v-on:click.stop v-if="modal.openUnsentTweets"/>
      	<ThePopUpNewTweet v-if="modal.openNewTweetModal"/>
    </div>
</template>

<script setup>
	import TheGif from './Gif/TheGif.vue';
	import TheSchedule from './TheSchedule.vue';
	import ThePopUpNewTweet from './ThePopUpNewTweet.vue';
	import TheUnsentTweets from './TheUnsentTweets.vue';

	import { inject, watch } from 'vue';
	import { useStore } from 'vuex';


	const modal = inject('modal');

   
	watch(() => [modal.openGifModal, modal.openScheduleModal, modal.newTweetModalIsActiv, modal.openUnsentTweets], ( arr ) => {
		let [gif, schedule, isActive, unsentTweets] = arr
		if(isActive){
			if(unsentTweets){
		        modal.openScheduleModal = false;
		        modal.openNewTweetModal = false;
		    }else if(schedule) {
			    modal.openNewTweetModal = false;
		    }else if(gif){
			    modal.openNewTweetModal = false;
		    }
		}else if(unsentTweets ){
		    modal.openScheduleModal = false;
		}
	})

</script>
