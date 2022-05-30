<template>
	<article class="w-[31.563rem] pt-3 mb-1 border border-input-main-border-color  rounded-2xl">
	<div class="w-full h-auto inline-flex flex-row">
		<div class="w-full flex flex-col gap-[11px] py-2.75 pl-2.75" :class="{'pr-2.75': !questCounter}">
			<span class="w-full h-[53px] border border-input-main-border-color  rounded focusInput relative" v-for="num in poll.counter" :key="num">
			    <label>
			        <input class="w-full h-8 outline-none absolute bottom-0 hoverDuration indent-2 input" type="text" v-model="poll.quest[num -1]" maxlength="25">  
			        <span class="absolute focus top-3 text-lg left-2 duration-200"  :class="{'input-text': labelAnimation(num)}"> {{inputPlaceHolder(num)}}</span>
			        <span class="counter opacity-0 absolute top-1 text-xs right-4 duration-200">{{poll.quest[num -1].length}} / 25</span>
			    </label>
			</span>
		</div>
		<TheAddNewPollQuestion  @click="addNewQuestion"  v-if="questCounter"/>
	</div>
	<div class="w-full p-2.75 border-t border-[#cfd9de]">
		<span>Poll Length</span>
		<div class="w-full h-auto inline-flex justify-between" @change="test">
			<SelectBox class="w-[9.438rem]" name="Day" >
			    <select class="sectionStyle"  v-model="poll.pollLength[0]">
			        <option v-for="(day, index) in 8" :key="index" :selected="day == poll.pollLength[0]">{{day -1}}</option>
		        </select>
			</SelectBox>
	        <SelectBox class="w-[9.438rem]" name="Hours" :class="{'bg-[#eff3f4]': disabledSelectInput}">
			    <select class="sectionStyle" v-model="poll.pollLength[1]" :disabled="disabledSelectInput">
			       <option v-for="(hours, index) in 24"  :key="index" :selected="hours == poll.pollLength[1]">{{hours -1}}</option>
		        </select>  
			</SelectBox> 
	        <SelectBox class="w-[9.438rem]" name="Minute" :class="{'bg-[#eff3f4]': disabledSelectInput}">
			    <select class="sectionStyle" v-model="poll.pollLength[2]" :disabled="disabledSelectInput">
			        <option v-for="(minute, index) in minutes" :key="index" :selected="minute == poll.pollLength[1]">{{minute}}</option>
		        </select>
		   </SelectBox>
	    </div>
	</div>
    <ThePollRemove @click="$emit('removePoll', {'data': poll, 'showPoll': false})"/>
</article>
</template>


<script setup>
	import { reactive, computed, onMounted, watch, nextTick } from 'vue';

	import SelectBox from './SelectBox.vue'
	import TheAddNewPollQuestion from './TheAddNewPollQuestion.vue';
	import ThePollRemove from './ThePollRemove.vue';
	// All question
    const poll = reactive({
    	'quest': ['', '', '', ''],
    	'pollLength': [1, 0, 0],
    	'counter': 2, 
    });

    onMounted(() => setQuestiobData())
    
    const pollData = defineProps({pollData: Object}); // Props from new post

    const pollQuestData = computed(() => {
    	if(!pollData.pollData) return;
    	let emptyIndex = pollData.pollData.quest.filter( item => item != '');
    	let questLength = emptyIndex.length < 2 ? 2: emptyIndex.length
    	pollData.pollData.counter = questLength;
    	Array.from({length: pollData.pollData.counter}, (_, i) => emptyIndex.push(''));
    	!emptyIndex[0] ? inputFocus.value(0): null;
    	return emptyIndex;
    })

    // Set poll data
    const setQuestiobData = () => {
    	if(!pollData.pollData) return inputFocus.value(0);
    	pollQuestData.value.forEach((item, index) => poll.quest[index] = item || '')
    	pollData.pollData.pollLength.forEach((item, index) => poll.pollLength[index] = item || 0);
    	poll.counter = pollData.pollData.counter;
    }
    

    const addNewQuestion = () => {
    	poll.counter++
    	poll.quest.push('');
    };

   	const questCounter = computed(() => poll.counter < 4 );
    
    
    const disabledSelectInput = computed(() => poll.pollLength[0] == 7)
    
    // Start minute
    let startIndex = computed(() => {
    	let [day, hours, minute] = [poll.pollLength[0], poll.pollLength[1], poll.pollLength[2]]
    	if(day == 0 && hours == 0 && minute < 5){
    		poll.pollLength[2] = 5
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

    const inputFocus = computed(() => (index) => {
    	nextTick(() => {
    		let input = document.querySelectorAll('.input') 
            input[index].focus()   
        })
    });

	const labelAnimation = computed(() => (n) => poll.quest[n -1].length > 0);
	const inputPlaceHolder = computed(() => (n) => n > 2 ? `Choice ${n} (optional)`: `Choice ${n}`);

    watch(() => [...poll.pollLength], (oldPollLength, newPollLength ) => {
    	if(oldPollLength[0] == 7) {
    		poll.pollLength[1] = 0;
    		poll.pollLength[2] = 0;
    	}else if(newPollLength[1] != 0){
    		poll.pollLength[1];
    	}else if(oldPollLength[0] == 0 && oldPollLength[2] == 0) {
    		poll.pollLength[1] = 1;
    	}
    })
    
    watch(()=> poll.counter, (oldValue, newValue) => !poll.quest[newValue] ? inputFocus.value(newValue): console.log('test'))

</script>