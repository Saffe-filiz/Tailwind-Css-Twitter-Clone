<template>
    <div class="w-full h-[2.188rem] border-b border-min-border-color">
		<span class="w-auto px-3 h-[22px] hover:bg-[#1d9bf01a] inline-flex items-center justify-center rounded-full">
		    <div class="w-auto h-[20px] inline-flex items-center justify-center relative group "  tabindex="1">
		    	<component :is="icons[selected]" class="w-[15px] h-[15px] mr-1"></component>
		        <p class="text-[#1d9bf0] text-sm font-bold cursor-pointer">{{whoCanReply[selected]}} can replay</p>
		        <div class="whoCanReplyDropDownStyle">
		        	<div class="flex flex-col px-3.5 mb-[0.688rem]">
		        		<span class="text-sm text-[#0f1419] font-bold">Who can reply?</span>
		        		<span class="text-sm text-[#677682]">Choose who can reply to this Tweet.</span>
		        		<span class="text-sm text-[#677682]">Anyone mentioned can always reply.</span>
		        	</div>
		        	<ul class="w-full h-full">
		        		<label for="stopFocus" v-for="(icon, index) in icons" :key="index">
		        		     <li class="whoCanReplyListStyle outline-none" @click="selected = index">
		        			     <span class="whoCanReplyIconStyle">
		        				     <component :is="icon"  class="w-[16px] h-[16px] z-10 fill-white"></component>
		        			     </span>
		        			     <span class="ml-[0.688rem]  text-[#505357] text-sm">{{whoCanReply[index]}}</span>
		        			     <span class="absolute right-[15px]" v-if="selected == index">
		        				     <Check/>
		        			     </span>
		        		     </li>
		        		</label>
		        	</ul>
		        	<div class="w-full h-auto py-3.5 px-[0.938rem] rounded-2xl inline-flex md:hidden">
		        		<button class="w-full h-[3.625rem] bg-red-100"></button>
		        	</div>
		        </div>
		    </div>
		    <button id="stopFocus" class="opacity-0"></button>
		</span>
    </div>
</template>

<script setup>
		import World from './icons/WhoCanReplyIcons/World.vue';
		import People from './icons/WhoCanReplyIcons/People.vue';
		import MentionIcon from './icons/WhoCanReplyIcons/MentionIcon.vue';
		import Check from './icons/WhoCanReplyIcons/Check.vue';

		import { ref } from 'vue';

		const selected = ref(0)
		const icons = [World, People, MentionIcon];
		const whoCanReply = ['Everyone', 'People you follow', 'Only people you mention'];

</script>