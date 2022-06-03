<template>
    <div class="sectionMainStyle focusInput relative group">
		<label class="text-[12px] text-[#536471] ml-2 " for="date">{{data.title}}</label>
		<DownArrow/>
		<select class="sectionStyle" v-model="dateData[data.index]"  @change="setData">
			<option v-for="(num, index) in date" :key="index" :selected="num == dateData[data.index]" >{{num - data.minusDate}}</option>
		</select> 
	</div>
</template>


<script setup>
	import DownArrow from './icons/DownArrow.vue';
	import { ref, onMounted, watch, computed } from 'vue';
	import { useStore } from 'vuex';

	const store = useStore();
	const data = defineProps(['title', 'length', 'index', 'minusDate']);
	const dateData = ref([1, 0, 0])


	onMounted(() => dateData.value = store.getters.getPollDataDate)

	const setData = () => store.commit('setPollDataDate', dateData.value)


	let startIndex = computed(() => {
    	let [day, hours, minute] = [dateData.value[0], dateData.value[1], dateData.value[2]]
    	if(day == 0 && hours == 0 && minute < 5){
    		dateData.value[2] = 5
    		return 5
        }else if(day == 0 && hours == 0 && minute > 5){
        	return 5
        }else {
        	return 0 
        }
    })


    const minutes = computed(() => {
    	let minute = [];
    	let start = startIndex.value;
    	for(let i = start; i < 60; i++){minute.push(i)};
    	return minute 
    })

    const date = computed(() => data.length || minutes.value)

	watch(() => [...dateData.value], (oldPollLength, newPollLength ) => {

    	if(oldPollLength[0] == 7) {
    		dateData.value[1] = 0;
    		dateData.value[2] = 0;
    	}else if(newPollLength[1] != 0){
    		dateData.value[1];
    	}else if(oldPollLength[0] == 0 && oldPollLength[2] == 0) {
    		dateData.value[1] = 1;
    	}
    })
</script>

