<template>
	<div class="w-full h-auto pb-3 py-1 px-3.75 inline-flex flex-row justify-between border-b border-min-border-color">
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
	    <div class="w-full h-[45px] inline-flex justify-between items-center px-0.5">
	    	<div class="w-[10.50rem] h-full inline-flex flex-row items-end justify-between">
	    		<Madia/>
	    		<Gift/>
	    		<Emoji/>
				<Poll @click="showThePoll = true"/>
	    		<Schedule/>
	    	</div>
	    	<div class="w-auto h-auto inline-flex items-end justify-between">
	    		<div class="w-auto h-auto inline-flex mr-[11px]">
	    		   <TheCircle/>
	    		   <div class="w-px h-[29px] ml-[9px] mr-[11px] bg-[#3e4144]"></div>
	    		   <Plus/>
	    		</div>
	    		<button class="w-[4.563rem] h-8 bg-btn-bg-color text-white rounded-[2rem]">Tweet</button>
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
	import Plus from './icons/Plus.vue';

	let showThePoll = ref(false)
</script>