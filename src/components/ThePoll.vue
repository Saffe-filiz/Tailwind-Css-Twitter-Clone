<template>
	<article class="w-[31.563rem] pt-3 inputMainStyle rounded-2xl">
	<div class="w-full h-auto inline-flex flex-row">
		<div class="w-full flex flex-col gap-[11px] py-2.75 pl-2.75" :class="{'pr-2.75': !showBtn}">
			<span class="w-full h-[53px] inputMainStyle rounded focusInput relative" 
			v-for="num in numberOfChoice" :key="num">
			<label>
			    <input class="w-full h-8 outline-none absolute bottom-0 hoverDuration indent-2" 
			    type="text" v-model="quests[num -1]" maxlength="25">  
			    <span class="absolute focus top-3 text-lg left-2 duration-200" 
			    :class="{'input-text': focusInput(num)}">
			    {{choiceContent(num)}}</span>
			    <span class="counter opacity-0 absolute top-1 text-xs right-4 duration-200">
			    {{quests[num -1].length ?? 0}} / 25</span>
			 </label>
			</span>
		</div>
		<div class="w-[3.063rem] relative pl-1" v-if="showBtn">
			<span class="w-8 h-8 flexCenter rounded-full absolute hover:bg-[#1d9bf01a] bottom-6 cursor-pointer " @click="numberOfChoice++">
				<svg width="20" height="20" viewBox="0 0 24 24" fill="#1d9bf0"><g><path d="M19.75 11H13V4.25c0-.553-.447-1-1-1s-1 .447-1 1V11H4.25c-.553 0-1 .447-1 1s.447 1 1 1H11v6.75c0 .553.447 1 1 1s1-.447 1-1V13h6.75c.553 0 1-.447 1-1s-.447-1-1-1z"/></g></svg>
			</span>
		</div>
	</div>
	<div class="w-full p-2.75 border-t border-[#cfd9de]">
		<span>Poll Length</span>
		<div class="w-full h-auto inline-flex justify-between">
			<div class="w-[8.875rem] sectionMainStyle">
				<label class="ml-2">Days</label>
				<select class="sectionStyle">
				<option>1</option>
			</select>
			</div>
		    <div class="w-[8.875rem] sectionMainStyle">
				<label class="ml-2">Hours</label>
				<select class="sectionStyle">
				<option>0</option>
			</select>
			</div>
			<div class="w-[8.875rem] sectionMainStyle">
				<label class="ml-2">Minutes</label>
				<select class="sectionStyle">
				<option>0</option>
			</select>
			</div>
		</div>
	</div>
	<div class="w-full h-[3.125rem] rounded-b-2xl border-t border-[#cfd9de] hover:bg-[#f4212e1a] hoverDuration">
		<button class="w-full h-full bg-red text-[#f4212e]" @click="$emit('hiddePoll', false)">Remove Poll</button>
	</div>
</article>
</template>


<script setup>
	import { ref, computed } from 'vue';

	let numberOfChoice = ref(2);
    const quests = ref(['', '', '', '']);
    const showBtn = computed(() => numberOfChoice.value < 4 )
    const choiceContent = computed(() => (n) => n > 2 ? `Choice ${n} (optional)`: `Choice ${n}`)
    const focusInput = computed(() => (n) => quests.value[n -1].length > 0);


</script>
