<template>
    <div class="max-w-full w-auto flex flex-col gap-y-1">
	    <div class="w-full h-[30px] border border-sky-500 text-center rounded-t-[15px] rounded-b-[15px] cursor-pointer hover:bg-[#1d9bf01a] hoverDuration" 
        v-for="quest in 3"  @click="sendVote(quest -1)" v-if="showPollResult"><p>{{quest}}</p></div>
        <div  v-else class="flex flex-col gap-y-1 ">
            <!-- POLL RESULT PROGRESS BAR START -->
            <div class="h-[29px] relative flex justify-between bg-transparent items-center" v-for="(quest, index) in 3">
                <span class="absolute w-[7px] h-full rounded z-10 bg-[#cfd9de]" v-if="!voteRateCalculate[index]"></span>
                <span class="absolute h-full rounded z-10 bg-[#cfd9de]" v-else :style="{'width': progreserRateCalculate(voteRateCalculate[index])}"></span>
                <span class="z-10 ml-2.5 text-[15px] text-[#0f1419]">{{quest}}</span>
                <span class="z-10 text-[15px] text-[#0f1419]">{{progreserRateCalculate(voteRateCalculate[index])}}</span>
            </div>
            <!-- POLL RESULT PROGRESS BAR START -->
        </div>
        <div class=""></div>
		<!-- VOTE COUNTER AND DATE START -->
		<div class="w-auto h-[1.125rem]">
			<span class="text-[14px] text-[#536471]">{{totalVote}} votes {{remainingTime}}</span>
		</div>
		<!-- VOTE COUNTER AND DATE END -->
	</div>
</template>


<script setup> 

	import { ref, computed, reactive, onMounted, watch } from 'vue';
    import { useStore } from 'vuex'

	import TimeCalculator from './TimeCalculator.vue';

    let post = reactive({
    	date: 'Mon Apr 26 2022 18:37:00 GMT+0300 (GMT+03:00)',
    })
    
    // Updata poll remaining time
    document.addEventListener('visibilitychange', (e) => {
		if(document.visibilityState == 'hidden') return;
			calculatePollLength(post.date);
	})


    onMounted(() => calculatePollLength(post.date))

	const votes = ref([]); // Votes
    const totalVote = ref(0); //Vote Counter
    const showPollResult = ref(true); // Show result 

    // Send vote
    const sendVote = (vote) => {
        if(!showPollResult.value) return;
            votes.value.push(vote);
            totalVote.value++;
            showPollResult.value = false;
    };
    // Vote grouping
    const voteRateCalculate = computed(() => {
        return votes.value.reduce((item, index) => {item[index] = (item[index] +1) || 1; return item} ,{});
    });

    // Progress bar percentage calculate
    const progreserRateCalculate = computed(() => ( rate) =>  ((rate * 100) / votes.value.length || 0).toFixed(0) + '%');

    let remainingTime = ref()

    const calculatePollLength = (postDate) => {
        let result;
    	let date = new Date(postDate);
        let currentDate = new Date();

        if((date - currentDate) < 0) return remainingTime.value = `final result`;
        let minute = Math.ceil(Math.abs((currentDate - date) / 1000) / 60);
        let hourse = Math.ceil(minute / 60);
        let day = Math.ceil(hourse / 24);

        if(hourse > 23) {
        	result = `${day} day left`
        }else if(minute > 59){
        	result = `${hourse} hourse left`
        }else{
        	result = `${minute} minute left`
        }
        remainingTime.value = result
    }

    watch(remainingTime, (oldValue, newValue) => oldValue == 'final result' ? showPollResult.value = false: null)
</script>