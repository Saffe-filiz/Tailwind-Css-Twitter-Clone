<template>
	<div class="w-[37.5rem] h-[37.5rem] mx-auto bg-white rounded-2xl relative">
		<div class="w-full h-24 border border-[#eff3f4] bg-[#ffffffa6] backdrop-blur-md rounded-t-2xl sticky top-0">
		<div class="w-full h-12 pl-2 pr-3.5 inline-flex justify-between items-center">
			<div class="inline-flex rounded-t-2xl">
				<div class="w-[1.875rem] h-[1.875rem] hover:bg-[#0f14191a] rounded-full flexCenter cursor-pointer" @click="closeUnsetTweets">
			        <ArrowIcon :size="18" class="cursor-pointer"/>
		        </div>
		        <span class="pl-6 text-lg font-bold">Unsent Tweets</span>
			</div>
			<button class="px-3.5 h-[29px] bg-black rounded-full text-sm text-white font-medium" @click="editUnsentTweets = !editUnsentTweets">{{editUnsentTweetsContext}}</button>
		</div>
		<div class="inline-flex w-full">
			<div class="w-2/4 h-12 flex justify-center hover:bg-[#0f14191a] cursor-pointer duration-200" @click="chanceSection('openNewTweetModal')">
				<button :class="[modal.selectetUnSentTweetSection == 'openNewTweetModal' ? [style]: 'text-[#536471]']">Drafts</button>
			</div>
			<div class="w-2/4 h-12 flex justify-center hover:bg-[#0f14191a] cursor-pointer duration-200" @click="chanceSection('openScheduleModal')">
			    <button :class="[modal.selectetUnSentTweetSection == 'openScheduleModal' ? [style]: 'text-[#536471]']">Scheduled</button>
			</div>
		</div>
	   </div>
	    <div class="w-full h-10 px-2 absolute bottom-0 rounded-b-2xl border-t border-[#eff3f4] bg-[#ffffffa6] backdrop-blur-md inline-flex items-center justify-between" v-if="editUnsentTweets">
	    	<span class="px-[11px] py-1 hover:bg-[#1dfff01a] cursor-pointer rounded-full text-sm text-[#1d9bf0] font-medium duration-200">Select All</span>
	    	<span class="px-[11px] py-1 hover:bg-red-100 cursor-pointer rounded-full text-sm text-red-400 font-medium duration-200">Delete</span>
	    </div>
	</div>
</template>

<script setup>
	import ArrowIcon from './icons/Arrow.vue';
	import { inject, ref, computed } from 'vue';

	let style = 'relative after:absolute after:left-0 after:rounded-full after:bottom-0 after:w-full after:h-1 after:bg-[#1d9bf0]'
    
	const modal = inject('modal'); 

	const editUnsentTweets = ref(false)

	const editUnsentTweetsContext = computed(() => editUnsentTweets.value ? 'Done': 'Edit');

	const chanceSection = (section) => {
		editUnsentTweets.value = false;
		modal.selectetUnSentTweetSection = section
	}

    const closeUnsetTweets = () => {
    	modal.openUnsentTweets = false;
    	modal[modal.previousComponent] = true;
    }

</script>