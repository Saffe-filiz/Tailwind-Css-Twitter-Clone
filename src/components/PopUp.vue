<template>
	<div class="w-screen h-screen bg-[#00000066] fixed top-0 left-0 z-30 table overflow-hidden pt-[33px]" v-if="openPopUp" @click="exitPopUp">
      	<TheGif v-on:click.stop v-if="modal.openGifModal"/>
      	<TheSchedule v-on:click.stop v-if="modal.openScheduleModal"/>
      	<TheUnsentTweets v-on:click.stop v-if="modal.openUnsentTweets"/>
      	<div v-on:click.stop v-if="modal.openNewTweetModal" class="min-w-[600px] w-fit h-auto bg-white rounded-2xl mx-auto flex justify-between flex-col pb-1">
      		<div class="w-full h-12">
      			<div class="w-[1.875rem] h-[1.875rem] hover:bg-[#0f14191a] rounded-full flexCenter m-2 cursor-pointer" @click="exitPopUp">
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
	import TheUnsentTweets from './TheUnsentTweets.vue';
	import { inject, computed, watch } from 'vue';
    

	const modal = inject('modal');

	const openPopUp = computed(() => [modal.openNewTweetModal, modal.openGifModal, modal.openScheduleModal, modal.openUnsentTweets].some( v => v));

	const exitPopUp = () =>  {	
		if(modal.newTweetModalIsActiv && !modal.openGifModal && !modal.openScheduleModal && !modal.openUnsentTweets){
		    modal.closeNewTweetModal = true
		    modal.closePopUp()
		}else {
			modal.closePopUp()
		}
	}
	
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
