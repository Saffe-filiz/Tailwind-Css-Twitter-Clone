<template>
	<article class="w-[31.563rem] pt-3 inputMainStyle rounded-2xl">
	<div class="w-full h-auto inline-flex flex-row">
		<div class="w-full flex flex-col gap-[11px] py-2.75 pl-2.75" :class="{'pr-2.75': !newQuestButton}">
			<span class="w-full h-[53px] inputMainStyle rounded focusInput relative" v-for="num in numberOfQuestion" :key="num">
			<label>
				<!-- QUESTİON INPUT START -->
			    <input class="w-full h-8 outline-none absolute bottom-0 hoverDuration indent-2"  type="text" v-model="allPollQuestions[num -1]" maxlength="25">  
			    <!-- QUESTİON INPUT END -->
			        <!-- INPUT PLACEHOLDER START-->
			        <span class="absolute focus top-3 text-lg left-2 duration-200"  :class="{'input-text': inputLabelAnimation(num)}"> {{inputPlaceHolder(num)}}</span>
			        <!-- INPUT PLACEHOLDER START-->
			        <!-- QUESTİON INPUT LATTER COUNTER START -->
			        <span class="counter opacity-0 absolute top-1 text-xs right-4 duration-200">{{allPollQuestions[num -1].length}} / 25</span>
			        <!-- QUESTİON INPUT LATTER COUNTER END -->
			 </label>
			</span>
		</div>
		<!-- ADD NEW INPUT QUESTİON START -->
		<div class="w-[3.063rem] relative pl-1" v-if="newQuestButton">
			<div class="w-8 h-8 flexCenter rounded-full absolute hover:bg-[#1d9bf01a] bottom-6 cursor-pointer" @click="numberOfQuestion++">
				<Plus class="w-[20px] h-[20px] text-[10px]"/>
			</div>
		</div>
		<!-- ADD NEW INPUT QUESTİON END -->
	</div>
	<!-- POLL DURATIN TIMER START -->
	<div class="w-full p-2.75 border-t border-[#cfd9de]">
		<span>Poll Length</span>
		<div class="w-full h-auto inline-flex justify-between">
			<!--<Selected class="w-[8.875rem]" :durations="8" title="Days"/>
		    <Selected class="w-[8.875rem]" :durations="24" title="Hours"/>
		    <Selected class="w-[8.875rem]" :durations="60" title="Minutes"/>-->
		</div>
	</div>
	<!-- POLL DURATIN TIMER END -->
	<!-- REMOVE POLL BUTTON START -->
	<div class="w-full h-[3.125rem] rounded-b-2xl border-t border-[#cfd9de] hover:bg-[#f4212e1a] hoverDuration">
		<button class="w-full h-full bg-red text-[#f4212e]" @click="$emit('hiddePoll', false)">Remove Poll</button>
	</div>
	<!-- REMOVE POLL BUTTON END -->
</article>
</template>


<script setup>
	import { ref, computed } from 'vue';

	import Plus from './icons/Plus.vue';

	let numberOfQuestion = ref(2); // Number of question
    const allPollQuestions = ref(['', '', '', '']); // All question
    const newQuestButton = computed(() => numberOfQuestion.value < 4 ) // Show new question button
    const inputPlaceHolder = computed(() => (n) => n > 2 ? `Choice ${n} (optional)`: `Choice ${n}`) // Input placeholer
    const inputLabelAnimation = computed(() => (n) => allPollQuestions.value[n -1].length > 0);


</script>
