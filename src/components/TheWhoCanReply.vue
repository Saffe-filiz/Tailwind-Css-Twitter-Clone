<template>
    <div class="w-full h-[2.188rem] border-b border-min-border-color">
		<span class="w-[157px] h-[22px] hover:bg-[#1d9bf01a] inline-flex items-center justify-center rounded-full">
		    <div class="w-auto h-[20px] inline-flex items-center justify-center relative group"  tabindex="0">
		    	<World class="w-[15px] h-[15px] mr-1"/>
		        <p class="text-[#1d9bf0] text-sm cursor-pointer">Everyone can replay</p>
		        <div class="whoCanReplyDropDownStyle hoverDuration">
		        	<div class="flex flex-col px-3.5 mb-[0.688rem]">
		        		<span class="text-sm text-[#0f1419] font-bold">Who can reply?</span>
		        		<span class="text-sm text-[#677682]">Choose who can reply to this Tweet.</span>
		        		<span class="text-sm text-[#677682]">Anyone mentioned can always reply.</span>
		        	</div>
		        	<ul class="w-full h-full">
		        		<li class="whoCanReplyListStyle">
		        			<span class="whoCanReplyIconStyle">
		        				<World class="w-[16px] h-[16px] z-10 fill-white"/>
		        			</span>
		        			<span class="ml-[0.688rem]  text-[#505357] text-sm">Everyone</span>
		        			<span class="absolute right-[15px]">
		        				<Check/>
		        			</span>
		        		</li>
		        		<li class="whoCanReplyListStyle">
		        		    <span class="whoCanReplyIconStyle">
		        				<People class="w-[16px] h-[16px] z-10 fill-white"/>
		        			</span>
		        			<span class="ml-[0.688rem] text-[#505357] text-sm">People you follow</span>
		        			<span class="absolute right-[15px]">
		        				<Check/>
		        			</span>
		        		</li>
		        		<li class="whoCanReplyListStyle">
		        			<span class="whoCanReplyIconStyle">
		        				<MentionIcon class="w-[16px] h-[16px] z-10 fill-white"/>
		        			</span>
		        			<span class="ml-[0.688rem] text-[#505357] text-sm">Only people you mention</span>
		        			<span class="absolute right-[15px]">
		        				<Check/>
		        			</span>
		        		</li>
		        	</ul>
		        	<div class="w-full h-auto py-3.5 px-[0.938rem] rounded-2xl inline-flex md:hidden">
		        		<button class="w-full h-[3.625rem] bg-red-100">Cancel</button>
		        	</div>
		        </div>
		    </div>
		</span>
    </div>
</template>

<script setup>
		import World from './icons/WhoCanReplyIcons/World.vue';
		import People from './icons/WhoCanReplyIcons/People.vue';
		import MentionIcon from './icons/WhoCanReplyIcons/MentionIcon.vue';
		import Check from './icons/WhoCanReplyIcons/Check.vue';

</script>