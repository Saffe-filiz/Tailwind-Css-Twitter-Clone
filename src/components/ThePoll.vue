<template>
	<article class="w-[31.563rem] pt-3 inputMainStyle rounded-2xl">
	<div class="w-full h-auto inline-flex flex-row">
		<div class="w-full flex flex-col gap-[11px] py-2.75 pl-2.75" :class="{'pr-2.75': !questCounter}">
			<span class="w-full h-[53px] inputMainStyle rounded focusInput relative" v-for="num in pollQuestions.pollQuestCounter" :key="num">
			<label>
				<!-- QUESTİON INPUT START -->
			    <input class="w-full h-8 outline-none absolute bottom-0 hoverDuration indent-2"  type="text" v-model="pollQuestions.quest[num -1]" maxlength="25">  
			    <!-- QUESTİON INPUT END -->
			        <!-- INPUT PLACEHOLDER START-->
			        <span class="absolute focus top-3 text-lg left-2 duration-200"  :class="{'input-text': labelAnimation(num)}"> {{inputPlaceHolder(num)}}</span>
			        <!-- INPUT PLACEHOLDER START-->
			        <!-- QUESTİON INPUT LATTER COUNTER START -->
			        <span class="counter opacity-0 absolute top-1 text-xs right-4 duration-200">{{pollQuestions.quest[num -1].length}} / 25</span>
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
		<div class="w-full h-auto inline-flex justify-between" @change="test">
		<!-- TIME SECTION START -->
		    <!-- SELECT DAY START -->
			<SelectBox class="w-[9.438rem]" name="Day">
			    <select class="sectionStyle"  v-model="pollQuestions.pollLength[0]">
			        <option v-for="(day, index) in 8" :key="index" :selected="day == pollQuestions.pollLength[0]">{{day -1}}</option>
		        </select>
			</SelectBox>
			<!-- SELECT DAY END -->
		    <!-- SELECT HOURS START -->
	        <SelectBox class="w-[9.438rem]" name="Hours">
			    <select class="sectionStyle" v-model="pollQuestions.pollLength[1]">
			       <option v-for="(hours, index) in 24"  :key="index" :selected="hours == pollQuestions.pollLength[1]">{{hours -1}}</option>
		        </select>  
			</SelectBox>
	        <!-- SELECT HOURS END -->
	        <!-- SELECT MINUTE START --> 
	        <SelectBox class="w-[9.438rem]" name="Minute">
			    <select class="sectionStyle" v-model="pollQuestions.pollLength[2]">
			        <option v-for="(minute, index) in minutes" :key="index" :selected="minute == pollQuestions.pollLength[1]">{{minute}}</option>
		        </select> 
			</SelectBox>
	        <!-- SELECT MINUTE END -->
		<!-- TIME SECTION END -->
	</div>
	</div>
	<!-- POLL DURATIN TIMER END -->
	<!-- REMOVE POLL BUTTON START -->
	<div class="w-full h-[3.125rem] rounded-b-2xl border-t border-[#cfd9de] hover:bg-[#f4212e1a] hoverDuration">
		<button class="w-full h-full bg-red text-[#f4212e]" @click="$emit('hiddePoll', {'data': pollQuestions, 'showPoll': false})">Remove Poll</button>
	</div>
	<!-- REMOVE POLL BUTTON END -->
</article>
</template>


<script setup>
	import { reactive, computed, onMounted, watch } from 'vue';

	import Plus from './icons/Plus.vue';
	import SelectBox from './SelectBox.vue'

	// All question
    const pollQuestions = reactive({
    	'quest': ['', '', '', ''],
    	'pollLength': [1, 0, 0],
    	'pollQuestCounter': 2, 
    });

    onMounted(() => setQuestiobData());

    const pollData = defineProps({pollData: Object}); // Props from new post

    const pollDataQuest = computed(() => {
    	if(!pollData.pollData) return;
    	let filterEmty = pollData.pollData.quest.filter( quest => quest != '');
    	let questLength = filterEmty.length <= 1 ? 2: filterEmty.length
    	pollData.pollData.pollQuestCounter = questLength;
    	Array.from({length: pollData.pollData.pollQuestCounter}, (_, i) => filterEmty.push(''))
    	return filterEmty
    })

    // Set poll data
    const setQuestiobData = () => {
    	if(!pollData.pollData) return;
    	pollDataQuest.value.forEach((item, index) => pollQuestions.quest[index] = item || '')
    	pollData.pollData.pollLength.forEach((item, index) => pollQuestions.pollLength[index] = item || 0);
    	pollQuestions.pollQuestCounter = pollData.pollData.pollQuestCounter;
    }

    const questCounter = computed(() => pollQuestions.pollQuestCounter < 4 ); // Show new question button
    // Add new quest
    const addNewQuestion = () => {
    	pollQuestions.pollQuestCounter++;
    	pollQuestions.quest.push('');
    }
    const inputPlaceHolder = computed(() => (n) => n > 2 ? `Choice ${n} (optional)`: `Choice ${n}`) // Input placeholer
    const labelAnimation = computed(() => (n) => pollQuestions.quest[n -1].length > 0); // Activate label animation
    
    // Start minute
    let startIndex = computed(() =>  pollQuestions.pollLength[0] == 0 && pollQuestions.pollLength[1] == 0 ? 5: 0)
    // Create minute 
    const minutes = computed(() => {
    	let minute = [];
    	let start = startIndex.value;
    	for(let i = start; i < 60; i++){minute.push(i)};
    	return minute 
    })

    watch(() => [...pollQuestions.pollLength], (oldValue, newValue ) => {
    	if(newValue[1] != 0){
    		pollQuestions.pollLength[1]
    	    if(oldValue[1] == 0){
    		    pollQuestions.pollLength[2] = 5
    	    }else if(newValue[0] > 0 && newValue[1] > 0 ){
    	    	pollQuestions.pollLength[2]
    	    }
    	}else if(oldValue[0] == 0 && oldValue[2] == 0) {
    		pollQuestions.pollLength[1] = 1
    	}else if(oldValue[0] == 0 && oldValue[1] == 0 && oldValue[2] < 5){
    		pollQuestions.pollLength[2] = 5
    	}
    })

</script>