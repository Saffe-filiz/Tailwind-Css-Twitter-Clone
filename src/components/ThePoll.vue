<template>
	<article class="w-[31.563rem] pt-3 inputMainStyle rounded-2xl">
	<div class="w-full h-auto inline-flex flex-row">
		<div class="w-full flex flex-col gap-[11px] py-2.75 pl-2.75" :class="{'pr-2.75': !questCounter}">
			<span class="w-full h-[53px] inputMainStyle rounded focusInput relative" v-for="num in pollQuestions.pollQuestCounter" :key="num">
			<label>
				<!-- QUESTİON INPUT START -->
			    <input class="w-full h-8 outline-none absolute bottom-0 hoverDuration indent-2 input" type="text" v-model="pollQuestions.quest[num -1]" maxlength="25">  
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
		<div class="w-[3.063rem] relative pl-1 group relative" v-if="questCounter">
			<div class="w-8 h-8 flexCenter rounded-full absolute hover:bg-[#1d9bf01a] bottom-6 cursor-pointer" @click="addNewQuestion">
				<Plus class="w-[20px] h-[20px] text-[8px]"/>
			    <span class="tooltip bottom-[-15px]">Add</span> 
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
			<SelectBox class="w-[9.438rem]" name="Day" >
			    <select class="sectionStyle"  v-model="pollQuestions.pollLength[0]">
			        <option v-for="(day, index) in 8" :key="index" :selected="day == pollQuestions.pollLength[0]">{{day -1}}</option>
		        </select>
			</SelectBox>
			<!-- SELECT DAY END -->
		    <!-- SELECT HOURS START -->
	        <SelectBox class="w-[9.438rem]" name="Hours" :class="{'bg-[#eff3f4]': disabledSelectInput}">
			    <select class="sectionStyle" v-model="pollQuestions.pollLength[1]" :disabled="disabledSelectInput">
			       <option v-for="(hours, index) in 24"  :key="index" :selected="hours == pollQuestions.pollLength[1]">{{hours -1}}</option>
		        </select>  
			</SelectBox>
	        <!-- SELECT HOURS END -->
	        <!-- SELECT MINUTE START --> 
	        <SelectBox class="w-[9.438rem]" name="Minute" :class="{'bg-[#eff3f4]': disabledSelectInput}">
			    <select class="sectionStyle" v-model="pollQuestions.pollLength[2]" :disabled="disabledSelectInput">
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
	import { reactive, computed, onMounted, watch, nextTick } from 'vue';

	import Plus from './icons/Plus.vue';
	import SelectBox from './SelectBox.vue'

	// All question
    const pollQuestions = reactive({
    	'quest': ['', '', '', ''],
    	'pollLength': [1, 0, 0],
    	'pollQuestCounter': 2, 
    });

    onMounted(() => setQuestiobData())
    
    const pollData = defineProps({pollData: Object}); // Props from new post

    const pollQuestData = computed(() => {
    	if(!pollData.pollData) return;
    	let emptyIndex = pollData.pollData.quest.filter( item => item != '');
    	let questLength = emptyIndex.length < 2 ? 2: emptyIndex.length
    	pollData.pollData.pollQuestCounter = questLength;
    	Array.from({length: pollData.pollData.pollQuestCounter}, (_, i) => emptyIndex.push(''));
    	!emptyIndex[0] ? inputFocus.value(0): null;
    	return emptyIndex;
    })

    // Set poll data
    const setQuestiobData = () => {
    	if(!pollData.pollData) return inputFocus.value(0);
    	pollQuestData.value.forEach((item, index) => pollQuestions.quest[index] = item || '')
    	pollData.pollData.pollLength.forEach((item, index) => pollQuestions.pollLength[index] = item || 0);
    	pollQuestions.pollQuestCounter = pollData.pollData.pollQuestCounter;
    }
    
    // Show new question button
    const questCounter = computed(() => pollQuestions.pollQuestCounter < 4 );

    // Add new quest
    const addNewQuestion = () => {
    	pollQuestions.pollQuestCounter++
    	pollQuestions.quest.push('');
    };

    // Input placeholer
    const inputPlaceHolder = computed(() => (n) => n > 2 ? `Choice ${n} (optional)`: `Choice ${n}`);

    // Activate label animation
    const labelAnimation = computed(() => (n) => pollQuestions.quest[n -1].length > 0);
    
    // Max poll length
    const disabledSelectInput = computed(() => pollQuestions.pollLength[0] == 7)
    
    // Start minute
    let startIndex = computed(() => {
    	let [day, hours, minute] = [pollQuestions.pollLength[0], pollQuestions.pollLength[1], pollQuestions.pollLength[2]]
    	if(day == 0 && hours == 0 && minute < 5){
    		pollQuestions.pollLength[2] = 5
    		return 5
        }else if(day == 0 && hours == 0 && minute > 5){
        	return 5;
        }else{
        	minute
    	    return 0
        }
    })
    // Create minute 
    const minutes = computed(() => {
    	let minute = [];
    	let start = startIndex.value;
    	for(let i = start; i < 60; i++){minute.push(i)};
    	return minute 
    })
    
    // Quest input auto focus
    const inputFocus = computed(() => (index) => {
    	nextTick(() => {
    		let input = document.querySelectorAll('.input') 
            input[index].focus()   
        })
    });
    
    // Poll date select input watcher
    watch(() => [...pollQuestions.pollLength], (oldPollLength, newPollLength ) => {
    	if(oldPollLength[0] == 7) {
    		pollQuestions.pollLength[1] = 0;
    		pollQuestions.pollLength[2] = 0;
    	}else if(newPollLength[1] != 0){
    		pollQuestions.pollLength[1];
    	}else if(oldPollLength[0] == 0 && oldPollLength[2] == 0) {
    		pollQuestions.pollLength[1] = 1;
    	}
    })
    
    // Quest input counter watcher
   watch(()=> pollQuestions.pollQuestCounter, (oldValue, newValue) => !pollQuestions.quest[newValue] ? inputFocus.value(newValue): null)

</script>