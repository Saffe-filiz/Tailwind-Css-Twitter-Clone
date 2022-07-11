<template>
	<div class="xl:w-[79.063rem] inline-flex flex-row xl:ml-4">
	    <TheNavigation/>
	    <TheFeed/>
	   	<div class="w-auto h-[1280px] relative hidden lg:block">
	  		<TheTrends class="w-auto flex flex-col gap-y-[14px] pr-2.5 pl-[1.875rem]" :style="{position: setPositions.sideBarPosition, top: setPositions.topValue}">
	  	        <TheSearch :style="{position: setPositions.searchPosition, top: setPositions.searchTopValue}"/>
	        </TheTrends>
	   </div>
	</div>
	<PopUp v-if="openPopUp"/>
	<Toast :isActive="showToast" :massage="toastMassage" /> 
</template>

<script setup>

	import { ref, reactive, onMounted, provide, computed, watch } from 'vue'
	import { useStore } from 'vuex';

	import TheNavigation from './components/TheNavigation.vue';
	import TheFeed from './components/TheFeed.vue';
	import TheTrends from './components/TheTrends.vue';
	import TheSearch from './components/TheSearch.vue';
	import Toast from './components/Toast.vue';
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

	const store = useStore();

	const modal = reactive({
		openScheduleModal: false,
		openGifModal: false,
		openNewTweetModal: false,
		openUnsentTweets: false,
		openSaveToTweet: false,
		textAreaIsEmty: false,
		saveToUnSendTweet: false,
		newTweetModalIsActiv: false,
		closeNewTweetModal: false,
		previousComponent: '',
		selectetUnSentTweetSection: '',

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
		        this.openNewTweetModal = false;
		        this.closeNewTweetModal = false;
		        this.scrollVisibil();
		    }else if(this.newTweetModalIsActiv){
			    this.openGifModal = false;
		        this.openScheduleModal = false;
		        this.openNewTweetModal = true; 
		        this.openUnsentTweets = false;  
		    }else {
			    this.openGifModal = false;
		        this.openScheduleModal = false;
		        this.openUnsentTweets = false;
		        this.scrollVisibil();
		    }
	    },

	    exitPopUp () {	
		if(this.newTweetModalIsActiv && !this.openGifModal && !this.openScheduleModal && !this.openUnsentTweets){
		    if(modal.textAreaIsEmty){
		   	    let openSaveTweet = !this.openSaveToTweet;
		   	    this.openSaveToTweet = openSaveTweet   
		    }else {
		    	this.closeNewTweetModal = true
		        this.closePopUp()
		    }
		}else {
			this.openSaveToTweet = false;
			this.closePopUp()
		}
        store.commit('setIsModal', false);
		store.commit('deletModalMedia', []);
		store.commit('setGif', [])
	}

    
	});

	provide('modal', modal);

	let selected = reactive({
		gif: false,
		image: false,
		poll: false,
		whoCanAnswer: false,
		whoCanReply: 'Everyone',
	})

	const mediaLength = computed(() => store.getters.getMediaLength)


	let draggableAreaActive = ref(false);
	let showToast = ref(false);
	let toastMassage = ref('');

    const uploadImage =  ( e ) => {
    	draggableAreaActive.value = false
    	let draggedCount = e.dataTransfer?.files?.length ?? 0;
    	let imageCount = mediaLength.value;

    	let image = e.target.files || e.dataTransfer.files;
    	let isGif =  Array.from({length: image.length}, (_, index) => image[index].name.split('.').indexOf('gif')).includes(1);

    	if(!isGif && !selected.gif && draggedCount <= 4 && imageCount < 4){
    		console.log(imageCount, draggedCount)
    		selected.image = true
    	    Array.from({length: image.length}, (_, index) => store.commit('setMedia', URL.createObjectURL(image[index])) );
    	}
        else if(isGif && !selected.image && draggedCount <= 1 && imageCount < 1 || draggedCount < 0 && imageCount <= 1 ){
        	selected.isGif = isGif;
    		selected.gif = true
    		store.commit('setMedia', URL.createObjectURL(image[0]))
    	}else{
    		showToast.value = !showToast.value;
    		toastMassage.value = 'Please choose either 1 GIF or up to 4 photos.'
    	}
        selected.imageLength = imageCount;
    	e.target.value = ''
	};


	watch( mediaLength, number => {
		number == 0 ? Object.keys(selected).map( item => item == 'whoCanReply' ? selected[item] : selected[item] = false): null
	});

	provide('uploadImage', uploadImage);
	provide('selected', selected)
	provide('draggableAreaActive', draggableAreaActive);

	const openPopUp = computed(() => {
		return [modal.openNewTweetModal, modal.openGifModal, modal.openScheduleModal, modal.openUnsentTweets].some( v => v)
	});
</script> 