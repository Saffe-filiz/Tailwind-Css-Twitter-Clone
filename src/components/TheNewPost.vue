<template>
	<div class="w-full h-[7.125rem] py-1 px-3.75 inline-flex flex-row justify-between border-b border-min-border-color">
	<div class="w-[3.563rem] pr-2.75">
		<div class="w-[46px] h-[46px] bg-black rounded-full"></div>
	</div>
	<div class="w-full flex flex-col">
		<div class="w-full h-auto py-2.75">
		    <textarea class="w-full outline-none overflow-hidden resize-none bg-none"></textarea>
		    <div class="w-full h-auto">
		    	<ThePoll v-if="showThePoll" @hiddePoll="(hidde) => showThePoll = hidde"/>
		    </div>
	    </div>
	    <div class="w-full h-auto bg-gray-100 inline-flex justify-between pt-2.75 px-0.5">
	    	<div class="w-[10.50rem] h-full inline-flex flex-row items-center justify-between">
	    		<Madia/>
	    		<Gift/>
	    		<Emoji/>
				<Poll @click="showThePoll = true"/>
	    		<Schedule/>
	    	</div>
	    	<div class="w-[147px] h-full inline-flex items-center justify-between">
	    		<TheCircle/>
	    		<span class="w-[1.313rem] h-[1.313rem] flexCenter rounded-full border 
	    		border-b border-min-border-color">
				<svg class="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="#1d9bf0"><g><path d="M19.75 11H13V4.25c0-.553-.447-1-1-1s-1 .447-1 1V11H4.25c-.553 0-1 .447-1 1s.447 1 1 1H11v6.75c0 .553.447 1 1 1s1-.447 1-1V13h6.75c.553 0 1-.447 1-1s-.447-1-1-1z"/></g></svg>
			</span>
	    		<button class="w-[4.563rem] h-[1.938rem] bg-btn-bg-color text-white rounded-[2rem]">Tweet</button>
	    	</div>
	    </div>
	</div>
    </div>
</template>

<script setup>
	import { ref } from 'vue';
 	import ThePoll from './ThePoll.vue'
	//import TheSchedule from './TheSchedule.vue'
	import TheCircle from './TheCircle.vue';
	import Madia from './icons/Madia.vue';
	import Gift from './icons/Gift.vue';
	import Emoji from './icons/Emoji.vue';
	import Poll from './icons/Poll.vue';
	import Schedule from './icons/Schedule.vue';

	let showThePoll = ref(false)
</script>