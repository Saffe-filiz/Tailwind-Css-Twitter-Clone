<template>
	<article class="w-[31.563rem] pt-3 inputMainStyle rounded-2xl">
	<div class="w-full h-auto inline-flex flex-row">
		<div class="w-full flex flex-col gap-[11px] py-2.75 pl-2.75" :class="{'pr-2.75': !showBtn}">
			<span class="w-full h-[53px] inputMainStyle rounded focusInput relative" 
			v-for="num in numberOfChoice" 
			:key="num">
			<label>
			    <input class="w-full h-8 outline-none absolute bottom-0 hoverDuration indent-2" 
			    type="text" 
			    v-model="quests[num -1]" 
			    maxlength="25">  
			        <span class="absolute focus top-3 text-lg left-2 duration-200" 
			        :class="{'input-text': activeInput(num)}">
			        {{choiceContent(num)}}
			        </span>
			        <span class="counter opacity-0 absolute top-1 text-xs right-4 duration-200">
			        {{quests[num -1].length}} / 25
			        </span>
			 </label>
			</span>
		</div>
		<div class="w-[3.063rem] relative pl-1" v-if="showBtn">
			<div class="w-8 h-8 flexCenter rounded-full absolute hover:bg-[#1d9bf01a] bottom-6 cursor-pointer"
			@click="numberOfChoice++">
				<Plus class="w-[20px] h-[20px] text-[10px]"/>
			</div>
		</div>
	</div>
	<div class="w-full p-2.75 border-t border-[#cfd9de]">
		<span>Poll Length</span>
		<div class="w-full h-auto inline-flex justify-between">
			<Selected class="w-[8.875rem]" :durations="8" title="Days"/>
		    <Selected class="w-[8.875rem]" :durations="24" title="Hours"/>
		    <Selected class="w-[8.875rem]" :durations="60" title="Minutes"/>
		</div>
	</div>
	<div class="w-full h-[3.125rem] rounded-b-2xl border-t border-[#cfd9de] hover:bg-[#f4212e1a] hoverDuration">
		<button class="w-full h-full bg-red text-[#f4212e]" @click="$emit('hiddePoll', false)">Remove Poll</button>
	</div>
</article>
</template>


<script setup>
	import { ref, computed } from 'vue';

	import Selected from './Selected.vue';
	import Plus from './icons/Plus.vue';

	let numberOfChoice = ref(2);
    const quests = ref(['', '', '', '']);
    const showBtn = computed(() => numberOfChoice.value < 4 )
    const choiceContent = computed(() => (n) => n > 2 ? `Choice ${n} (optional)`: `Choice ${n}`)
    const activeInput = computed(() => (n) => quests.value[n -1].length > 0);


</script>
