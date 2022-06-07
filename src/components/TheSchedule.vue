<template>
	<article class="w-[37.5rem] h-auto rounded-2xl overflow-auto bg-white m-auto">
        <TheSetSchedule :sending="updateSchedule.sending" :scheduling="scheduling" :error="showErrorMassage[0]"/>
	<div class="w-full h-auto bg-yellow py-3.125">
		<div class="flex flex-col gap-[1.125rem] px-3.5 py-[11px]">
			<TheScheduleInfo v-if="!showErrorMassage[1]" :info="setTimeInfo"/>
		<div>
		<span class="text-sm text-[#536471]">Date</span>
		    <div class="flex flex-row justify-between">
		    	<SelectBox class="w-[17.125rem]" title="Month" :length="12" :date="scheduling.date[1]" @setDate=" number => scheduling.date[1] = number" :isMonth="true"/>
			    <SelectBox class="w-[7.875rem]" title="Day" :length="getMonthDay" :date="scheduling.date[2]"  @setDate=" number => scheduling.date[2] = number"/>
			    <SelectBox class="w-[9.063rem]" title="Month" :length="[2024, 2023, 2022]" :date="scheduling.date[0]" @setDate=" number => scheduling.date[0] = number"/>
		    </div>
		    <span class="text-sm text-[#f4212e]">{{errorMassageForDate}}</span>
		</div>
		<div>
		<span class="text-sm text-[#536471]">Time</span>
			<div class="w-auto flex flex-row gap-[11px]">
				 <SelectBox class="w-[9.063rem]" title="Hour" :length="24" :date="scheduling.date[3]" @setDate=" number => scheduling.date[3] = number" :formatDate="true"/>
			     <SelectBox class="w-[9.063rem]" title="Minute" :length="60" :date="scheduling.date[4]" @setDate=" number => scheduling.date[4] = number" :formatDate="true"/>
		    </div>
		    <span class="text-base text-[#f4212e]" v-if="showErrorMassage[2]">{{errorMassageForHours}}</span>
		</div>
		<div class="w-full flex flex-col">
			<span class="text-sm text-[#536471] h-4">Time zone</span>
			<span class="text-lg">{{timeZone}}</span>
		</div>
		</div>
	</div>
    <div class="w-full h-[2.813rem] px-3.75 border-t border-[#cfd9de] flex items-center">
    	<span class="px-[11px] hover:bg-[#1dfff01a] cursor-pointer rounded-full" @click="openUnTweetsModal">
    		<span class="text-sm text-[#1d9bf0] font-medium">Scheduled Tweets</span>
    	</span>
    </div>
</article>
</template>

<script setup>

	import {ref, computed, onMounted, reactive, watch, inject } from 'vue';
	import { useStore } from 'vuex';


	import SelectBox from './SelectBox.vue';
	import TheScheduleInfo from './TheScheduleInfo.vue';
	import TheSetSchedule from './TheSetSchedule.vue';

	const modal = inject('modal')

	// POST SEND DATE START
	const scheduling = reactive({
		info: null,
	    date: ['', '', '', '', ''],
	    sending: true,
	})

	// SET NEW DATE START

	const openUnTweetsModal = () => {
		modal.openScheduleModal = false;
		modal.openUnsentTweets = true;
	}

    const store = useStore();
	// Date prop
	let updateSchedule = computed(() => store.getters.getUpdataSchedule) 

   onMounted(() => currentTime());
	// Set new date
	const currentTime = () => {
		let dateUpdata = updateSchedule.value
		let date = currentDate.value
		date.forEach( (item, index) =>  scheduling.date[index] = dateUpdata.date?.[index] || item )
	}
	// SET NEW DATE END

	const currentDate = computed(() => {
		let date = new Date();
		return [date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes()];
	})

	// Date info
	const setTimeInfo = computed(() => {
		let [dayName, month, day, year] = setTime.value.toString().split(' ');
		let info = `Will send on ${dayName}, ${month} ${day}, ${year}  at ${timePeriod.value}`;
		scheduling.info = info
		return info;
	});

	// Format time period
	const timePeriod = computed(() => {
		let hours = scheduling.date[3];
		let minute = scheduling.date[4];
		let period = hours < 12 ? 'AM': 'PM';
		let formatHours = hours % 12 == 0 ?  12: hours % 12
		return `${formatHours}:${formatNumber.value(minute)} ${period}`
	})


	// Release date
	const setTime = computed(() => {
		return new Date(scheduling.date[0], scheduling.date[1], scheduling.date[2], scheduling.date[3], scheduling.date[4]);;
	})

	const timeZone = computed(() => setTime.value.toString().split(' ').slice(-1)[0].slice(1, -1))

	// Get number days
	const getMonthDay = computed(() => {
		let day = new Date(scheduling.date[0], scheduling.date[1] +1, 0).getDate();
		return Array.from({length: day}, (_, day) => day +1);
	})

	const formatNumber = computed(() => (num) => num < 10 ? '0' + num: num);

	let errorMassageForDate = ref('');
	let errorMassageForHours = ref('');
	const showErrorMassage = computed(() => {
		let [errorDate, errorHours] = [errorMassageForDate.value, errorMassageForHours.value];
		return [errorDate || errorHours, errorDate && !errorHours, !errorDate && errorHours];
	});
    // Error messages
	watch( scheduling.date, (value) => {
		let [year, month, day, hours, minute] = value;
		let currentTime = currentDate.value
		let calculateMonthRange = (year - currentTime[0]) * 12;
		calculateMonthRange -= currentTime[1];
		calculateMonthRange += month;
		let [past, future] = ['You can’t schedule a Tweet to send in the past.', 'You can’t schedule a Tweet more than 18 months in the future.'];

		 if(calculateMonthRange < 0){
		 	errorMassageForDate.value = past;
		 }else if(calculateMonthRange < 0 == true && day < currentTime[2]) {
		 	errorMassageForDate.value = past;
		 }else if(calculateMonthRange == 0 && day < currentTime[2]) {
		 	errorMassageForDate.value = past;
		 }else if(calculateMonthRange >= 18){
		 	errorMassageForDate.value = future;
		 }else if(day == currentTime[2] && calculateMonthRange == 0 && hours < currentTime[3]){
		 	errorMassageForHours.value = past;
		 }else if(day == currentTime[2] && calculateMonthRange == 0 && hours == currentTime[3] && minute < currentTime[4]){
		 	errorMassageForHours.value = past;
		 }else {
		 	errorMassageForDate.value = '';
		 	errorMassageForHours.value = '';
		 }
	})



</script>