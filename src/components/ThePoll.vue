<template>
	<article class="w-[31.563rem] pt-3 inputMainStyle rounded-2xl">
	<div class="w-full h-auto inline-flex flex-row">
		<div class="w-full flex flex-col gap-[11px] py-2.75 pl-2.75" :class="{'pr-2.75': !questCounter}">
			<span class="w-full h-[53px] inputMainStyle rounded focusInput relative" v-for="num in numberOfQuestion" :key="num">
			<label>
				<!-- QUESTİON INPUT START -->
			    <input class="w-full h-8 outline-none absolute bottom-0 hoverDuration indent-2"  type="text" v-model="allPollQuestions.ques[num -1]" maxlength="25">  
			    <!-- QUESTİON INPUT END -->
			        <!-- INPUT PLACEHOLDER START-->
			        <span class="absolute focus top-3 text-lg left-2 duration-200"  :class="{'input-text': inputLabelAnimation(num)}"> {{inputPlaceHolder(num)}}</span>
			        <!-- INPUT PLACEHOLDER START-->
			        <!-- QUESTİON INPUT LATTER COUNTER START -->
			        <span class="counter opacity-0 absolute top-1 text-xs right-4 duration-200">{{allPollQuestions.ques[num -1].length}} / 25</span>
			        <!-- QUESTİON INPUT LATTER COUNTER END -->
			 </label>
			</span>
		</div>
		<!-- ADD NEW INPUT QUESTİON START -->
		<div class="w-[3.063rem] relative pl-1" v-if="questCounter">
			<div class="w-8 h-8 flexCenter rounded-full absolute hover:bg-[#1d9bf01a] bottom-6 cursor-pointer" @click="addNewQuestion">
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
		    <!-- TIME SECTION START -->
			    <div class="w-[8.938rem] sectionMainStyle focusInput relative">
		            <label class="text-[12px] text-[#536471] ml-2" for="date">Day</label>
		            <DownArrow/>
		            <select class="sectionStyle" name="date" v-model="allPollQuestions.pollLength[0]" id="Day">
			            <option v-for="(day, index) in 8" :selected="day ==  allPollQuestions.pollLength[0]" :key="index">{{day -1}}</option>
		            </select> 
	            </div>
				<!-- SELECT HOURS START -->
				 <div class="w-[9.438rem] sectionMainStyle focusInput relative">
		            <label class="text-[12px] text-[#536471] ml-2" for="date">Hours</label>
		            <DownArrow/>
		            <select class="sectionStyle" name="date" v-model="allPollQuestions.pollLength[1]" id="hours">
			            <option v-for="(hours, index) in 24"  :selected="hours ==  allPollQuestions.pollLength[1]" :key="index">{{hours -1}}</option>
		            </select> 
	            </div>
	            <!-- SELECT HOURS END -->
	            <!-- SELECT MINUTE START --> 
	            <div class="w-[9.438rem] sectionMainStyle focusInput relative">
		            <label class="text-[12px] text-[#536471] ml-2" for="date">Minute</label>
		            <DownArrow/>
		            <select class="sectionStyle" name="date" v-model="allPollQuestions.pollLength[2]" id="minute">
			            <option v-for="(minute, index) in 60" :selected="minute ==  allPollQuestions.pollLength[2]" :key="index">{{minute -1}}</option>
		            </select> 
	            </div>
	            <!-- SELECT MINUTE END -->
		<!-- TIME SECTION END -->
	</div>
	</div>
	<!-- POLL DURATIN TIMER END -->
	<!-- REMOVE POLL BUTTON START -->
	<div class="w-full h-[3.125rem] rounded-b-2xl border-t border-[#cfd9de] hover:bg-[#f4212e1a] hoverDuration">
		<button class="w-full h-full bg-red text-[#f4212e]" @click="$emit('hiddePoll', {'data': allPollQuestions, 'showPoll': false})">Remove Poll</button>
	</div>
	<!-- REMOVE POLL BUTTON END -->
</article>
</template>


<script setup>
	import { ref, reactive, computed, onMounted } from 'vue';

	import Plus from './icons/Plus.vue';
	import DownArrow from './icons/DownArrow.vue'

	let numberOfQuestion = ref(2); // Number of question
    const allPollQuestions = reactive({
    	'ques': ['', '', '', ''],
    	'pollLength': [1, 0, 0],
    }); // All question

    onMounted(() => setQuestiobData());

    const pollData = defineProps({pollData: Object});
    const setQuestiobData = () => {
    	if(!pollData.pollData) return;
    	pollData.pollData.ques.forEach((item, index) => allPollQuestions.ques[index] = item || '')
    	pollData.pollData.pollLength.forEach((item, index) => allPollQuestions.pollLength[index] = item || 0)

    }
    const questCounter = computed(() => numberOfQuestion.value < 4 ); // Show new question button
    const addNewQuestion = () => {
    	numberOfQuestion.value++;
    	allPollQuestions.ques.push('');
    }
    const inputPlaceHolder = computed(() => (n) => n > 2 ? `Choice ${n} (optional)`: `Choice ${n}`) // Input placeholer
    const inputLabelAnimation = computed(() => (n) => allPollQuestions.ques[n -1].length > 0);

</script>
