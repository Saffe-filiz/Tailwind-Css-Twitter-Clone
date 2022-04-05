<template>
	<article class="w-[37.5rem] h-auto rounded-2xl overflow-auto bg-white m-auto mt-7">
	<div class="w-full h-[3.125rem] inline-flex flex-row items-center justify-between px-3.75">
		<div class="flex items-center justify-between ">
		    <span class="w-[2rem] h-[2rem] rounded-full hover:bg-[#0f14191a] cursor-pointer flex items-center justify-center text-[#2d3136] hoverDuration" 
		    @click="scrollVisibil()">&#10005</span>
			<span class="ml-[1.25rem]">Schedule</span>
		</div>
		<button class="w-[5.2rem] h-[1.938rem] bg-[#0f1419] text-white rounded-[2rem]">Confirm</button>
	</div>
	<div class="w-full h-auto bg-yellow py-3.125">
		<div class="flex flex-col gap-[1.438rem] px-3.75">
			<div><span>Will send on Sun, Mar 5, 2023 at 4:16 PM</span></div>
		<div>
		<span>Date</span>
		    <div class="flex flex-row justify-between">
			    <Selected class="w-[16.5rem]"  :durations="12" title="Mouth"/>
			    <Selected class="w-[7.813rem]" :durations="30" title="Day"/>
			    <Selected class="w-[9.063rem]" :durations="3" title="Year"/>
		    </div>
		</div>
		<div>
		<span>Time</span>
			<div class="w-auto flex flex-row gap-[11px]">
				<Selected class="w-[11.375rem]"  :durations="24" title="Hour"/>
			    <Selected class="w-[11.375rem]"  :durations="60" title="Minute"/>
		    </div>
		</div>
		<div class="w-full" >
			<p>Time zone</p>
			<h4>GMT+03:00</h4>
		</div>
		</div>
	</div>
    <div class="w-full h-[2.813rem] px-3.75 border-t border-[#cfd9de]"></div>
</article>
</template>

<script setup>
	import { inject } from 'vue';
	import Selected from './Selected.vue';

	const scrollVisibil = inject('scrollVisibil')


</script>