<template>
	<div class="w-fit h-fit  mx-auto">
	<div class="w-[37.5rem] bg-whites relative rounded-2xl overflow-hidden">
		<div class="w-full h-[37.5rem]  overflow-auto bg-white" :class="{'pb-[40px]': editUnsentTweet}">
		<div class="w-full border border-[#eff3f4] bg-[#ffffffa6] backdrop-blur-md rounded-t-2xl sticky top-0 ">
		    <div class="w-full h-12 pl-2 pr-3.5 inline-flex justify-between items-center">
			    <div class="inline-flex rounded-t-2xl">
				    <div class="w-[1.875rem] h-[1.875rem] hover:bg-[#0f14191a] rounded-full flexCenter cursor-pointer" @click="closeUnsetTweets">
			            <ArrowIcon :size="18" class="cursor-pointer"/>
		            </div>
		            <span class="pl-6 text-lg font-bold">Unsent Tweets</span>
			    </div>
			    <span v-if="tweets.length">
				    <button class="px-3.5 h-[29px] bg-black rounded-full text-sm text-white font-medium" @click="openEdit">{{edit}}</button>
			    </span>
		    </div>
		<div class="inline-flex w-full">
			<div 
			    class="unSentTweetSectionButton" 
			    @click="chanceSection('openNewTweetModal')">
				<button :class="[!currentSection ? 'unSentTweetSectionButtonActive': 'text-[#536471]']">Drafts</button>
			</div>
			<div
			    class="unSentTweetSectionButton" 
			    @click="chanceSection('openScheduleModal')">
			    <button :class="[currentSection ? 'unSentTweetSectionButtonActive': 'text-[#536471]']">Scheduled</button>
			</div>
		</div>
	   </div>
		<div class="w-full  bg-white" >
		    <div 
		        class="w-full h-auto px-3.5 py-2.75 border-b border-[#eff3f4] inline-flex flex-row items-center cursor-pointer hover:bg-[#f7f9f9] duration-200"
		    	v-for="(tweet, index) in tweets" :key="index" 
		    	@click="selectTweet(index), goToSendNewTweet(tweet.id)">
			    <div class="h-full mr-2.75" v-if="editUnsentTweet">
				    <div 
				        class="w-[18px] h-[18px] rounded border-2 border-[#536471] flex items-center justify-center" 
				        :class="{'bg-[#1d9bf0] !border-[#1d9bf0]': isSelected(index)}">
					    <Check v-if="isSelected(index)"/>
				   </div>
			    </div>
			    <div class="w-full">
				    <TheScheduleInfo :time="tweet.date" v-if="currentSection"/>
			        <p class="break-all	 text-sm font-normal">{{tweet.post}}</p>
			   </div>
		    </div>
		</div>
	   </div>
	   	<div 
	   	    class="w-full h-10 px-2 absolute  bottom-0 rounded-b-2xl border-t border-[#eff3f4] bg-[#ffffffa6] backdrop-blur-md inline-flex items-center justify-between"
	   	    v-if="editUnsentTweet && tweets.length">
	    	<span 
	    	    class="px-2.75 py-1 hover:bg-[#1dfff01a] cursor-pointer rounded-full text-sm text-[#1d9bf0] font-medium duration-200" 
	    	    @click="selectAllUnSend">{{select}}
	    	</span>
	    	<span 
	    	    class="px-2.75 py-1 hover:bg-red-100 cursor-pointer rounded-full text-sm text-[#f4212e] font-medium duration-200"
	    	    @click="openConfirmationBox = true">Delete
	    	</span>
	    </div>
	</div>
	    <Confirmation 
	        v-if="openConfirmationBox" 
	        :isSaveTweet="false" >
	    	<button 
	    	    class="w-full h-[38px] text-white  border border-[#cfd9de] rounded-full bg-[#f4212e] hover:bg-[#dc1e29] duration-200" 
	    	    @click="remove">Delete</button>
	    	<button 
	    	    class="w-full h-[38px] border border-[#cfd9de] rounded-full hover:bg-[#f7f9f9] duration-200 mt-2"
	    	    @click="openConfirmationBox = false">Cancel</button>
      	</Confirmation>
      	<Toast :isActive="showToast" :massage="'Your selected unsent Tweets were deleted.'"/> 
    </div>
</template>

<script setup>
	import ArrowIcon from './icons/Arrow.vue';
	import Check from './icons/Check.vue';
	import Confirmation from './Confirmation.vue';
	import TheScheduleInfo from './TheScheduleInfo.vue';
	import Toast from './Toast.vue';
	import { useStore } from 'vuex';
	import { ref, inject, computed } from 'vue';

	const store = useStore()
    
	const modal = inject('modal'); 

	const editUnsentTweet = ref(false);
	const selectedForDelet = ref([])

	const goToSendNewTweet = (id) => {
		if(editUnsentTweet.value) return;
		modal.selectetUnSentTweetSection = '';
		modal.openUnsentTweets = false;
		modal.newTweetModalIsActiv = true;
		modal.openNewTweetModal = true;
	}

	const currentSection = computed(() => modal.selectetUnSentTweetSection == 'openScheduleModal')

	const selectTweet = computed(() => (value) => {
		let index = selectedForDelet.value.indexOf(value)
    	if(!editUnsentTweet.value) return;
    	if(index != -1){
    		selectedForDelet.value.splice(index, 1)
    	}else {
    		selectedForDelet.value.push(value)
    	};
    });



    const isSelected = (index) => selectedForDelet.value.indexOf(index) != -1;

	const edit = computed(() => editUnsentTweet.value ? 'Done': 'Edit');
	const select = computed(() => selectedForDelet.value.length ? 'Deselect All': 'Select All')

	const chanceSection = (section) => {
		editUnsentTweet.value = false;
		modal.selectetUnSentTweetSection = section
	};

    const closeUnsetTweets = () => {
    	modal.openUnsentTweets = false;
    	modal[modal.previousComponent] = true;
    };

    const openEdit = () => {
    	editUnsentTweet.value = !editUnsentTweet.value
    	selectedForDelet.value = []
    }

    const tweets = computed(() => {
    	if(currentSection.value){
    		return store.getters.getUnSendScheduled;
    	}else {
    		return store.getters.getUnSendDrafts;
    	}
    });

    const selectAllUnSend = () => {
    	if(selectedForDelet.value.length){
    		selectedForDelet.value = [];
    	}else {
    		selectedForDelet.value = Array.from({length: tweets.value.length}, (_, index) => index);
    	}
    }

    let openConfirmationBox = ref(false);
    let showToast = ref(false)

    const remove = () => {
    	let data = tweets.value
    	data = data.filter((_, index) =>  selectedForDelet.value.indexOf(index) == -1);
    	selectedForDelet.value = [];

       	if(currentSection.value) {
    		store.commit('deletUnScheduled', data)
    	}else {
    		store.commit('deletUnDraft', data)
    	}
    	showToast.value = !showToast.value;
    	openConfirmationBox.value = false;
    }

</script>