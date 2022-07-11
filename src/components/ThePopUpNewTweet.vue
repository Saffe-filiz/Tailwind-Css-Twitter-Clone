<template>
		<div 
		v-on:click.stop 
      	   class="mx-auto w-fit bg-white min-h-[140px] h-auto max-h-[80vh] pb-[15px] overflow-y-auto">
      	   <div class="w-[600px] h-12 inline-flex items-center justify-between pl-2 pr-3.5 sticky top-0 bg-[#ffffffa6] backdrop-blur-md">
      		   <div class="w-[1.875rem] h-[1.875rem] hover:bg-[#0f14191a] rounded-full flexCenter cursor-pointer" @click="modal.exitPopUp">
			         <CrossIcon  class="fill-[696c70]" :size="18"/>
		         </div>
		         <span class="px-[11px] hover:bg-[#1dfff01a] cursor-pointer rounded-full" @click="openUnsent">
    		         <span class="text-sm text-[#1d9bf0] font-medium">Unsent Tweets</span>
    	         </span>
      	   </div>
      	<div class="w-full">
      	<TheNewTweet :saveToDraf="saveToDraf"/>
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
</template>

<script setup>
	import Confirmation from './Confirmation.vue';
    import CrossIcon from './icons/Cross.vue';
    import TheNewTweet from './TheNewTweet.vue';

	import {inject, ref} from 'vue';
	const modal = inject('modal');

	const openUnsent = () => {
		modal.openUnsentTweets = true;
		modal.previousComponent = 'openNewTweetModal';
		modal.selectetUnSentTweetSection = 'openNewTweetModal'
	}

	const saveToDraf = ref(false);

	const close = () => {
		modal.textAreaIsEmty = false;
		modal.openSaveToTweet = false;
		modal.newTweetModalIsActiv = false;
		modal.openNewTweetModal = false;
		modal.exitPopUp()
	}
	const saveTweet = () => {
		saveToDrafd.value =  true;
    	modal.textAreaIsEmty = false;
		modal.openSaveToTweet = false;
		modal.newTweetModalIsActiv = false
	}
</script>