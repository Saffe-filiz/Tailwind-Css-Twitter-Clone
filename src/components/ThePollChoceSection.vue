<template>
    <div class="w-[507px] flex flex-col gap-y-[4px]">
	    <div :class="pollActiveClass" v-for="(c, i) in 2" @click="sendVote(i)">
			<span class="h-full absolute z-20" >{{c}}</span>
			<span class="absolute right-0 z-20" v-if="showPollResult">{{progreserRateCalculate(voteRateCalculate[i])}}</span>
			<!-- POLL RESULT PROGRESS BAR START -->
			<div class="absolute top-0 left-0 bg-[#cfd9de] w-10 h-full z-5" :class="{'hidden': !showPollResult}" 
			:style="{'width': progreserRateCalculate(voteRateCalculate[i])}"></div>
			<!-- POLL RESULT PROGRESS BAR START -->
		</div>
		<!-- VOTE COUNTER START -->
		<div class="w-auto h-auto mt-[8px]">
			<span>{{totalVote}} votes  minutes left</span>
		</div>
		<!-- VOTE COUNTER END -->
	</div>
</template>


<script setup> 

	import { ref, computed } from 'vue';

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
</script>