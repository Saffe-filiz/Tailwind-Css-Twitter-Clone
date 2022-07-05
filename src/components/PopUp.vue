<template>
	<div class="w-screen h-screen bg-[#00000066] fixed top-0 left-0 z-30 overflow-hidden p-[33px]" @click="exitPopUp">
      	<TheGif v-on:click.stop v-if="modal.openGifModal"/>
      	<TheSchedule v-on:click.stop v-if="modal.openScheduleModal"/>
      	<TheUnsentTweets v-on:click.stop v-if="modal.openUnsentTweets"/>
      	<div 
      	   class="mx-auto w-fit bg-white min-h-[140px] h-auto max-h-[80vh] pb-[15px] overflow-y-auto"
      	   v-on:click.stop 
      	   v-if="modal.openNewTweetModal">
      	   <div class="w-[600px] h-12 inline-flex items-center justify-between pl-2 pr-3.5 sticky top-0 bg-[#ffffffa6] backdrop-blur-md">
      		   <div class="w-[1.875rem] h-[1.875rem] hover:bg-[#0f14191a] rounded-full flexCenter cursor-pointer" @click="exitPopUp">
			         <CrossIcon  class="fill-[696c70]" :size="18"/>
		         </div>
		         <span class="px-[11px] hover:bg-[#1dfff01a] cursor-pointer rounded-full" @click="openUnsent">
    		         <span class="text-sm text-[#1d9bf0] font-medium">Unsent Tweets</span>
    	         </span>
      	   </div>
      	<div class="w-full">
      		<TheNewTweet :isActive="saveToDrafd"/>
      	</div>
    </div>
    <Confirmation v-if="modal.openSaveToTweet" :isSaveTweet="true">
    	   <button 
      		class="w-full h-[38px] rounded-full bg-[#0f1419] text-white mb-[11px] hover:opacity-90 duration-200" 
      		@click="saveTweet">Save</button>
      	<button 
      		class="w-full h-[38px] border border-[#cfd9de] rounded-full hover:bg-[#f7f9f9] duration-200" 
      		@click="close">Discard</button>
    </Confirmation>
	</div>
</template>

<script setup>
	import TheGif from './Gif/TheGif.vue';
	import TheSchedule from './TheSchedule.vue';
	import TheNewTweet from './TheNewTweet.vue'
	import Confirmation from './Confirmation.vue';
    import CrossIcon from './icons/Cross.vue';
	import TheUnsentTweets from './TheUnsentTweets.vue';

	import { ref, inject, watch } from 'vue';
	import { useStore } from 'vuex';


	const modal = inject('modal');

	const openUnsent = () => {
		modal.openUnsentTweets = true;
		modal.previousComponent = 'openNewTweetModal';
		modal.selectetUnSentTweetSection = 'openNewTweetModal'
	}
   
   const store = useStore();
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
        store.commit('setIsModal', false);
		store.commit('deletModalMedia', []);
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


	const saveToDrafd = ref(false);
	const close = () => {
		modal.textAreaIsEmty = false;
		modal.openSaveToTweet = false;
		modal.newTweetModalIsActiv = false;
		modal.openNewTweetModal = false;
		exitPopUp()
	}
	const saveTweet = () => {
		saveToDrafd.value =  true;
    	modal.textAreaIsEmty = false;
		modal.openSaveToTweet = false;
		modal.newTweetModalIsActiv = false
	}


</script>
