<template>
    <div class="w-[507px] flex flex-col gap-y-[4px]">
	    <div :class="pollActiveClass" v-for="(c, i) in 2" @click="sendVote(i)">
			<span class="h-full absolute z-20" >{{c}}</span>
			<span class="absolute right-0 z-20"  v-if="showPollResult">{{progreserRateCalculate(voteRateCalculate[i])}}</span>
			<!-- POLL RESULT PROGRESS BAR START -->
			<div class="absolute top-0 left-0 bg-[#cfd9de] w-10 h-full z-5" :class="{'hidden': !showPollResult}" 
            :style="{'width': progreserRateCalculate(voteRateCalculate[i])}"></div>
			<!-- POLL RESULT PROGRESS BAR START -->
		</div>
		<!-- VOTE COUNTER AND DATE START -->
		<div class="w-auto h-auto mt-[8px]">
			<span>{{totalVote}} votes {{timer}}</span>
		</div>
		<!-- VOTE COUNTER AND DATE END -->
	</div>
</template>


<script setup> 

	import { ref, computed, reactive, onMounted } from 'vue';

	import TimeCalculator from './TimeCalculator.vue';

	    let post = reactive({
    	date: 'Sat Apr 30 2022 15:56:01 GMT+0300 (GMT+03:00)',
    	date2: 'Mon Apr 26 2022 17:32:20 GMT+0300 (GMT+03:00)',
    })
     

     document.addEventListener('visibilitychange', (e) => {
		if(document.visibilityState == 'hidden') return;
			calculatePollLength(post.date2);
	})

    onMounted(() => calculatePollLength(post.date2))

	const votes = ref([]); // Votes
    const totalVote = ref(0); //Vote Counter
    const showPollResult = ref(false); // Show result 

    const pollActiveClass = ref('showPollChoces') // Active class

    // Send vote
    const sendVote = (vote) => {
        if(showPollResult.value) return;
            pollActiveClass.value = 'showPollResults';
            votes.value.push(vote);
            totalVote.value++;
            showPollResult.value = true;
    };

    // Vote grouping
    const voteRateCalculate = computed(() => {
        return votes.value.reduce((item, index) => {item[index] = (item[index] +1) || 1; return item} ,{});
    });

    // Progress bar percentage calculate
    const progreserRateCalculate = computed(() => ( rate = 0 ) =>  ((rate * 100 ) / votes.value.length).toFixed(0) + '%');

    let timer = ref(0)

    const calculatePollLength = (postDate) => {
        let result;
    	let date = new Date(postDate);
        let currentDate = new Date();

        if((date - currentDate) < 0) return timer.value = `final result`;
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
        timer.value = result
    }
</script>