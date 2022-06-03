<template>
	<article class="w-[31.563rem] pt-3 mb-1 border border-input-main-border-color  rounded-2xl">
	<div class="w-full h-auto inline-flex flex-row">
		<div class="w-full flex flex-col gap-[11px] py-2.75 pl-2.75" :class="{'pr-2.75': !questCounter}">
			<span class="w-full h-[53px] border border-input-main-border-color  rounded focusInput relative" v-for="num in poll.counter" :key="num">
			    <label>
			        <input class="w-full h-8 outline-none absolute bottom-0 hoverDuration indent-2 input" type="text" v-model="poll.quest[num -1]" maxlength="25">  
			        <span class="absolute focus top-3 text-lg left-2 duration-200" :class="{'input-text': labelAnimation(num)}"> {{inputPlaceHolder(num)}}</span>
			        <span class="counter opacity-0 absolute top-1 text-xs right-4 duration-200">{{poll.quest[num -1].length}} / 25</span>
			    </label>
			</span>
		</div>
		<TheAddNewPollQuestion  @click="addNewQuestion"  v-if="questCounter"/>
	</div>
	<div class="w-full p-2.75 border-t border-[#cfd9de]">
		<span>Poll Length</span>
		<div class="w-full h-auto inline-flex justify-between">
			<SelectBox class="w-[9.438rem]" title="Day" :index="0" :length="8" :minusDate="1"/>
			<SelectBox class="w-[9.438rem]" title="Hours" :index="1" :length="24" :class="{'bg-[#eff3f4]': disabledSelectInput}" :minusDate="1"/>
			<SelectBox class="w-[9.438rem]" title="Minute" :index="2" :length="null" :class="{'bg-[#eff3f4]': disabledSelectInput}" :minusDate="0"/>
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
    	quest: ['', '', '', ''],
    	pollLength: [1, 0, 0],
    	counter: 2, 
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

    const inputFocus = computed(() => (index) => {
    	nextTick(() => {
    		let input = document.querySelectorAll('.input') 
            input[index].focus()   
        })
    });

	const labelAnimation = computed(() => (n) => poll.quest[n -1].length > 0);
	const inputPlaceHolder = computed(() => (n) => n > 2 ? `Choice ${n} (optional)`: `Choice ${n}`);


    
    watch(()=> poll.counter, (oldValue, newValue) => !poll.quest[newValue] ? inputFocus.value(newValue): console.log('test'))

</script>