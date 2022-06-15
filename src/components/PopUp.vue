<template>
	<div class="w-screen h-screen bg-[#00000066] fixed top-0 left-0 z-30 z- table overflow-hidden p-[33px]" 
	 @click="exitPopUp">
      	<TheGif v-on:click.stop v-if="modal.openGifModal"/>
      	<TheSchedule v-on:click.stop v-if="modal.openScheduleModal"/>
      	<TheUnsentTweets v-on:click.stop v-if="modal.openUnsentTweets"/>
      	<div v-on:click.stop v-if="modal.openNewTweetModal" class="min-w-[600px] w-fit h-auto bg-white rounded-2xl mx-auto flex justify-between flex-col pb-1 relative" >
      		<div class="absolute w-full h-full bg-[#00000066] rounded-2xl z-10"></div>
      		<div class="w-full h-12 inline-flex items-center justify-between pl-2 pr-3.5">
      			<div class="w-[1.875rem] h-[1.875rem] hover:bg-[#0f14191a] rounded-full flexCenter cursor-pointer" @click="exitPopUp">
			        <CrossIcon :size="18" class="fill-[696c70]"/>
		        </div>
		        <span class="px-[11px] hover:bg-[#1dfff01a] cursor-pointer rounded-full" @click="openUnsentTweets">
    		        <span class="text-sm text-[#1d9bf0] font-medium">Unsent Tweets</span>
    	        </span>
      		</div>
            <TheNewPost />
      	</div>
      	<div class="w-80 h-[236px] p-[29px] bg-white rounded-2xl flex flex-col gap-[16px] m-auto absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%]" 
      	v-if="modal.openSaveToTweet">
      		<span>
      			<h2 class="text-lg font-bold">Save Tweet?</h2>
      			<p class="text-sm">You can save this to send later from your unsent Tweets. </p>
      		</span>
      		<span>
      			<button class="w-full h-[38px] rounded-full bg-[#0f1419] text-white mb-[11px] hover:opacity-90 duration-200">Save</button>
      			<button class="w-full h-[38px] border border-[#cfd9de] rounded-full hover:bg-[#f7f9f9] duration-200">Discard</button>
      		</span>
      	</div>
	</div>
</template>

<script setup>
	import TheGif from './Gif/TheGif.vue';
	import TheSchedule from './TheSchedule.vue';
	import TheNewPost from './TheNewPost.vue'
	import CrossIcon from './icons/Cross.vue';
	import TheUnsentTweets from './TheUnsentTweets.vue';
	import { inject, watch } from 'vue';
    

	const modal = inject('modal');

	const openUnsentTweets = () => {
		modal.openUnsentTweets = true;
		modal.previousComponent = 'openNewTweetModal';
		modal.selectetUnSentTweetSection = 'openNewTweetModal'
	}

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
