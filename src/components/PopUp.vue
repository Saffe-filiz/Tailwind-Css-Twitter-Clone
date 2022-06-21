<template>
	<div class="w-screen h-screen bg-[#00000066] fixed top-0 left-0 z-30 overflow-hidden p-[33px]" @click="exitPopUp">
      	<TheGif v-on:click.stop v-if="modal.openGifModal"/>
      	<TheSchedule v-on:click.stop v-if="modal.openScheduleModal"/>
      	<TheUnsentTweets v-on:click.stop v-if="modal.openUnsentTweets"/>
      	<div v-on:click.stop v-if="modal.openNewTweetModal" class="min-w-[600px] w-fit h-auto bg-white rounded-2xl mx-auto flex justify-between flex-col pb-1 relative" >
      		<div class="w-full h-12 inline-flex items-center justify-between pl-2 pr-3.5">
      			<div class="w-[1.875rem] h-[1.875rem] hover:bg-[#0f14191a] rounded-full flexCenter cursor-pointer" @click="exitPopUp">
			        <CrossIcon :size="18" class="fill-[696c70]"/>
		        </div>
		        <span class="px-[11px] hover:bg-[#1dfff01a] cursor-pointer rounded-full" @click="openUnsentTweets">
    		        <span class="text-sm text-[#1d9bf0] font-medium">Unsent Tweets</span>
    	        </span>
      		</div>
            <TheNewPost :data="saveToDrafd"/>
      	</div>
      	<Confirmation v-if="modal.openSaveToTweet" :isSaveTweet="true">
      		<button class="w-full h-[38px] rounded-full bg-[#0f1419] text-white mb-[11px] hover:opacity-90 duration-200" @click="saveTweet">Save</button>
      		<button class="w-full h-[38px] border border-[#cfd9de] rounded-full hover:bg-[#f7f9f9] duration-200" @click="close">Discard</button>
      	</Confirmation>
	</div>
</template>

<script setup>
	import TheGif from './Gif/TheGif.vue';
	import TheSchedule from './TheSchedule.vue';
	import TheNewPost from './TheNewPost.vue'
	import CrossIcon from './icons/Cross.vue';
	import TheUnsentTweets from './TheUnsentTweets.vue';
	import Confirmation from './Confirmation.vue';
	import { ref, inject, watch, computed } from 'vue';
    

	const modal = inject('modal');
	const saveToDrafd = ref()

	const openUnsentTweets = () => {
		modal.openUnsentTweets = true;
		modal.previousComponent = 'openNewTweetModal';
		modal.selectetUnSentTweetSection = 'openNewTweetModal'
	}

	const exitPopUp = () =>  {	
		if(modal.newTweetModalIsActiv && !modal.openGifModal && !modal.openScheduleModal && !modal.openUnsentTweets){
		    if(modal.textAreaIsEmty){
		   	    let openSaveTweet = !modal.openSaveToTweet;
		   	    modal.openSaveToTweet = openSaveTweet   
		    }else {
		    	modal.closeNewTweetModal = true
		        modal.closePopUp()
		    }
		}else {
			modal.openSaveToTweet = false;
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

	const close = () => {
		modal.textAreaIsEmty = false;
		modal.openSaveToTweet = false;
		modal.newTweetModalIsActiv = false;
		modal.openNewTweetModal = false;
		console.log('test1')
		exitPopUp()
	}

	const saveTweet = () => {
		saveToDrafd.value =  true;
    	modal.textAreaIsEmty = false;
		modal.openSaveToTweet = false;
		modal.newTweetModalIsActiv = false
	}

</script>
