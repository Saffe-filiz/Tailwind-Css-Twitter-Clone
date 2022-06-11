<template>
	<div class="w-[37.5rem] h-[37.5rem] mx-auto bg-white rounded-2xl relative overflow-y-auto">
		<div class="w-full h-24 border border-[#eff3f4] bg-[#ffffffa6] backdrop-blur-md rounded-t-2xl sticky top-0">
		<div class="w-full h-12 pl-2 pr-3.5 inline-flex justify-between items-center">
			<div class="inline-flex rounded-t-2xl">
				<div class="w-[1.875rem] h-[1.875rem] hover:bg-[#0f14191a] rounded-full flexCenter cursor-pointer" @click="closeUnsetTweets">
			        <ArrowIcon :size="18" class="cursor-pointer"/>
		        </div>
		        <span class="pl-6 text-lg font-bold">Unsent Tweets</span>
			</div>
			<span v-if="unSendTweets.length">
				<button class="px-3.5 h-[29px] bg-black rounded-full text-sm text-white font-medium"  @click="openEdit">{{edit}}</button>
			</span>
		</div>
		<div class="inline-flex w-full">
			<div class="unSentTweetSectionButton" @click="chanceSection('openNewTweetModal')">
				<button :class="[modal.selectetUnSentTweetSection == 'openNewTweetModal' ? 'unSentTweetSectionButtonActive': 'text-[#536471]']">Drafts</button>
			</div>
			<div class="unSentTweetSectionButton" @click="chanceSection('openScheduleModal')">
			    <button :class="[modal.selectetUnSentTweetSection == 'openScheduleModal' ? 'unSentTweetSectionButtonActive': 'text-[#536471]']">Scheduled</button>
			</div>
		</div>
		<div v-for="(tweet, index) in unSendTweets" :key="index" class="w-full h-auto px-3.5 py-2.75 border-b border-[#eff3f4] inline-flex flex-row items-center cursor-pointer" 
		@click="select(index)">
			<div class="h-full mr-2.75" v-if="editUnsent">
				<div class="w-[18px] h-[18px] rounded border-2 border-[#536471] flex items-center justify-center" 
				:class="{'bg-[#1d9bf0]  !border-[#1d9bf0]': isSelected(index)}">
					<Check v-if="isSelected(index)"/>
				</div>
			</div>
			<div class="w-full">
				<TheScheduleInfo :time="tweet.date"/>
			    <p class="break-all	 text-sm font-normal">{{tweet.post}}</p>
			</div>
		</div>
	   </div>
	    <div class="w-full h-10 px-2 absolute bottom-0 rounded-b-2xl border-t border-[#eff3f4] bg-[#ffffffa6] backdrop-blur-md inline-flex items-center justify-between"
	     v-if="editUnsent && unSendTweets.length">
	    	<span class="px-2.75 py-1 hover:bg-[#1dfff01a] cursor-pointer rounded-full text-sm text-[#1d9bf0] font-medium duration-200" 
	    	@click="selectAll">Select All</span>
	    	<span class="px-2.75 py-1 hover:bg-red-100 cursor-pointer rounded-full text-sm text-red-400 font-medium duration-200" 
	    	@click="'delet'">Delete</span>
	    </div>
	</div>
</template>

<script setup>
	import ArrowIcon from './icons/Arrow.vue';
	import Check from './icons/Check.vue';
	import TheScheduleInfo from './TheScheduleInfo.vue';
	import { ref, inject, computed } from 'vue';
	import { useStore } from 'vuex';

	const store = useStore()
    
	const modal = inject('modal'); 

	const editUnsent = ref(false);

	const edit = computed(() => editUnsent.value ? 'Done': 'Edit');
	const selected = ref();

	const chanceSection = (section) => {
		editUnsent.value = false;
		modal.selectetUnSentTweetSection = section
	};

    const closeUnsetTweets = () => {
    	modal.openUnsentTweets = false;
    	modal[modal.previousComponent] = true;
    };

    const openEdit = () => {
    	editUnsent.value = !editUnsent.value
    	selected.value = []
    }

    const unSendTweets = computed(() => {
    	if(modal.selectetUnSentTweetSection == 'openScheduleModal'){
    		return store.getters.getUnSendScheduled;
    	}else {
    		return store.getters.getUnSendDrafts;
    	}
    });

    const isSelected = (index) => selected.value.indexOf(index) != -1;
    
    const select = (index) => {
    	if(!editUnsent.value) return;
    	if(!isSelected(index)){
    		selected.value.push(index)
    	}else {
    		selected.value.splice(index, 1)
    	};
    	console.log(selected)
    };

    const selectAll = () => {
    	let tweetsLength = unSendTweets.value.length;
    	if(tweetsLength == selected.value.length) return selected.value = [];
    	selected.value = Array.from({length: tweetsLength}, (_, index) => index);
    }
   

</script>