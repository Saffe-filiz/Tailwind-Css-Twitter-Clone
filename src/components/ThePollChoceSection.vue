<template>
    <div class="w-[507px] flex flex-col gap-y-[4px]">
	    <div :class="pollActiveClass" v-for="(c, i) in 2" @click="sendVote(c)">
			<span class="h-full absolute z-20" >{{c}}</span>
			<span class="absolute right-0 z-20" v-if="showPollResult">{{progreserRateCalculate(voteRateCalculate[c])}}</span>
			<div class="absolute top-0 left-0 bg-red-100 w-10 h-full z-5" :class="{'hidden': !showPollResult}" 
			:style="{'width': progreserRateCalculate(voteRateCalculate[c])}"></div>
		</div>
		<!-- VOTE COUNTER START -->
		<div class="w-auto h-auto mt-[8px]">
			<span>{{totalVote}} votes . 3 minutes left</span>
		</div>
		<!-- VOTE COUNTER END -->
	</div>
</template>


<script setup> 

	import {ref, computed} from 'vue';

	let votes = ref([]);
    let totalVote = ref(2);
    let showPollResult = ref(false);

    let pollActiveClass = ref('showPollChoces')

    let sendVote = (vote) => {
        if(showPollResult.value) return;
            pollActiveClass.value = 'showPollResults';
            votes.value.push(vote);
            totalVote.value++;
            showPollResult.value = true;
    };

    let voteRateCalculate = computed(() => {
        return votes.value.reduce((item, index) => {item[index] = (item[index] +1) || 1; return item} ,{});
    });

    let progreserRateCalculate = computed(() => ( rate ) =>  ((rate * 100 ) / votes.value.length).toFixed(0) + '%');
</script>