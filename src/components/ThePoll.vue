<template>
	<article class="w-[31.563rem] pt-3 mb-1 border border-input-main-border-color  rounded-2xl">
	<div class="w-full h-auto inline-flex flex-row">
		<div 
		    class="w-full flex flex-col gap-[11px] py-2.75 pl-2.75" 
		    :class="{'pr-2.75': !questCounter}">
			<span 
			    class="w-full h-[53px] border border-input-main-border-color  rounded focusInput relative" 
			    v-for="num in poll.counter" 
			    :key="num">
			    <label>
			        <input 
			            class="w-full h-8 outline-none absolute bottom-0 hoverDuration indent-2 input"
			            type="text" 
			            v-model="poll.quest[num -1]" 
			            maxlength="25">  
			        <span 
			            class="absolute focus top-3 text-lg left-2 duration-200" 
			            :class="{'input-text': labelAnimation(num)}">{{inputPlaceHolder(num)}}</span>
			        <span class="counter opacity-0 absolute top-1 text-xs right-4 duration-200">{{poll.quest[num -1].length}} / 25</span>
			    </label>
			</span>
		</div>
		<div 
		    class="w-[3.063rem] pl-1 relative" 
		    v-if="questCounter">
	        <div @click="addNewQuestion">
		        <Plus class="w-[20px] h-[20px] text-[8px]"/>
	        </div>
        </div>
	</div>
	<div class="w-full p-2.75 border-t border-[#cfd9de]">
		<span>Poll Length</span>
		<div class="w-full h-auto inline-flex justify-between">
			<SelectBox 
			    class="w-[9.438rem]" 
			    title="Day" :length="pollDateLength(8)" 
			    :date="poll.length[0]" 
			    @setDate=" number => poll.length[0] = number"/>
			<SelectBox 
			    class="w-[9.438rem]" 
			    title="Hours" 
			    :isDisable="inputDisable" 
			    :length="pollDateLength(24)" 
			    :date="poll.length[1]" 
			    @setDate=" number => poll.length[1] = number"/>
			<SelectBox 
			    class="w-[9.438rem]" 
			    title="Minute" 
			    :isDisable="inputDisable" 
			    :length="pollDateLength(60).slice(startIndex)" 
			    :date="poll.length[2]" 
			    @setDate=" number => poll.length[2] = number"/>
	    </div>
	</div>
	<div class="w-full h-[3.125rem] rounded-b-2xl border-t border-[#cfd9de] hover:bg-[#f4212e1a] hoverDuration">
		<button class="w-full h-full bg-red text-[#f4212e]" @click="removePoll">Remove Poll</button>
	</div>
</article>
</template>


<script setup>
	import SelectBox from './SelectBox.vue'
	import Plus from './icons/Plus.vue';

	import { ref, reactive, computed, onMounted, watch, nextTick } from 'vue';
	import { useStore } from 'vuex';

	const store = useStore();
    const poll = reactive(store.getters.getPollData);

    onMounted(() => {
    	pollQuestData()
    })

    const removePoll = () => {	
        poll.showPoll = false
        store.commit('setPollData', poll)
    }

    const pollQuestData = () => {
    	console.log(poll.quest.every(v => v == ''))
    	let emptyIndex = poll.quest.filter( item => item != '');
    	let questLength = emptyIndex.length < 2 ? 2: emptyIndex.length
    	poll.counter = questLength;
    	Array.from({length: poll.counter}, (_, i) => emptyIndex.push(''));
    	!emptyIndex[0] ? inputFocus(0): null;
    	return emptyIndex;
    }

    const pollDateLength = computed(() => (num) => Array.from({length: num}, (_, index) => index))
   
    const addNewQuestion = () => {
    	poll.counter++
    	poll.quest.push('');
    };

   	const questCounter = computed(() => poll.counter < 4 );
    const inputDisable = computed(() => poll.length[0] == 7)
    
    const inputFocus = (index) => {
    	nextTick(() => {
    		let input = document.querySelectorAll('.input');
    		input[index].focus()
    	})
    };

	const labelAnimation = computed(() => (n) => poll.quest[n -1].length > 0);
	const inputPlaceHolder = computed(() => (n) => n > 2 ? `Choice ${n} (optional)`: `Choice ${n}`);

	const startIndex = computed(() => {
    	let [day, hours, minute] = [poll.length[0], poll.length[1], poll.length[2]]
    	if(day == 0 && hours == 0 && minute < 5){
    		poll.length[2] = 5
    		return 5
        }else if(day == 0 && hours == 0 && minute > 5){
        	return 5
        }else {
        	return 0 
        }
    })

	watch(() => [...poll.length], (oldPollLength, newPollLength ) => {

    	if(oldPollLength[0] == 7) {
    		poll.length[1] = 0;
    		poll.length[2] = 0;
    	}else if(newPollLength[1] != 0){
    		poll.length[1];
    	}else if(oldPollLength[0] == 0 && oldPollLength[2] == 0) {
    		poll.length[1] = 1;
    	}
    })

    watch(()=> poll.counter, (oldValue, newValue) => {
    	console.log(oldValue, newValue)
    	!poll.quest[newValue] ? inputFocus(newValue): null
    })

</script>