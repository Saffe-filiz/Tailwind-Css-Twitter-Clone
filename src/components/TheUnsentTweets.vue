<template>
	<div class="w-[37.5rem] h-[37.5rem] mx-auto bg-white rounded-2xl">
		<div class="w-full h-24">
		<div class="w-full h-12 pl-2 pr-3.5 inline-flex justify-between items-center">
			<div class="inline-flex">
				<div class="w-[1.875rem] h-[1.875rem] hover:bg-[#0f14191a] rounded-full flexCenter cursor-pointer" @click="closeUnsetTweets">
			        <ArrowIcon :size="18" class="cursor-pointer"/>
		        </div>
		        <span class="pl-6 text-lg font-bold">Unsent Tweets</span>
			</div>
			<button class="px-3.5 h-[29px] bg-black rounded-full text-sm text-white font-medium">Edit</button>
		</div>
		<div class="inline-flex w-full">
			<div class="w-2/4 h-12 flex justify-center hover:bg-[#0f14191a] cursor-pointer duration-200 ">
				<button :class="{'relative after:absolute after:left-0 after:rounded-full after:bottom-0 after:w-full after:h-1 after:bg-[#1d9bf0]': isActive}">Drafts</button>
			</div>
			<div class="w-2/4 h-12 flex justify-center hover:bg-[#0f14191a] cursor-pointer duration-200">
			    <button :class="{'relative after:absolute after:left-0 after:rounded-full after:bottom-0 after:w-full after:h-1 after:bg-[#1d9bf0]':
			    !isActive}">Scheduled</button>
			</div>
		</div>
	   </div>
	</div>
</template>

<script setup>
	import ArrowIcon from './icons/Arrow.vue';
	import { inject, computed } from 'vue';

	const modal = inject('modal'); 
    const isActive = computed(() => modal.previousComponent == 'openNewTweetModal')

    const closeUnsetTweets = () => {
    	modal.openUnsentTweets = false;
    	modal[modal.previousComponent] = true;
    }

</script>