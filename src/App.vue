<template>
	<div class="w-[79.063rem] inline-flex flex-row ml-4">
	    <TheNavigation/>
	    <TheFeed/>
	   	<div class="w-auto h-[1280px] relative hidden lg:block">
	  		<TheTrends class="w-auto flex flex-col gap-y-[14px] pr-2.5 pl-[1.875rem]" 
	  		:style="{position: setPositions.sideBarPosition, top: setPositions.topValue}">
	  	        <TheSearch :style="{position: setPositions.searchPosition, top: setPositions.searchTopValue}"/>
	        </TheTrends>
	   </div>
	</div>
	<PopUp/>
</template>

<script setup>

	import { reactive, onMounted, provide } from 'vue'

	import TheNavigation from './components/TheNavigation.vue';
	import TheFeed from './components/TheFeed.vue';
	import TheTrends from './components/TheTrends.vue';
	import TheSearch from './components/TheSearch.vue';
	import PopUp from './components/PopUp.vue';

	onMounted(() => {
	    window.addEventListener("scroll", setSideBarPosition);
    })

	const setPositions = reactive({
		'sideBarPosition': 'static',
		'topValue': '0px',
		'searchPosition': 'sticky',
		'searchTopValue': '0px'
	});

	const setSideBarPosition = () => {

		if(window.pageYOffset >= 510){
			setPositions.sideBarPosition = 'fixed';
			setPositions.topValue = '-445px';
			setPositions.searchPosition = 'fixed';
			setPositions.searchTopValue = '0px';
		}else {
			setPositions.sideBarPosition = 'static';
			setPositions.topValue = '0px';
			setPositions.searchPosition = 'sticky';
			setPositions.searchTopValue = '600';
		}
	}

	const modal = reactive({
		openScheduleModal: false,
		openGifModal: false,
		openNewTweetModal: false,
		openUnsentTweets: false,
		newTweetModalIsActiv: false,
		closeNewTweetModal: false,

		scrollVisibil () {
		    let body = document.querySelector('body');
		    body.style.marginRight = '0px';
		    body.style.overflow = 'auto';
		},

		scrollHidden () {
			let body = document.querySelector('body');
		    body.style.overflow = 'hidden';	
		    body.style.marginRight = '20px';
		},

		closePopUp  () {
		    if(this.closeNewTweetModal) {
			    this.newTweetModalIsActiv = false;
			    this.openGifModal = false;
		        this.openScheduleModal = false;
		        this.openNewTweetModal = false;
		        this.closeNewTweetModal = false;
		        this.openUnsentTweets = false;
		        this.scrollVisibil();
		    }else if(this.newTweetModalIsActiv){
			    this.openGifModal = false;
		        this.openScheduleModal = false;
		        this.openUnsentTweets = false;
		        this.openNewTweetModal = true; 
		    }else {
			    this.openGifModal = false;
		        this.openScheduleModal = false;
		        this.openUnsentTweets = false;
		        this.scrollVisibil();
		    }
	    }    
    
	});

	provide('modal', modal);
</script> 