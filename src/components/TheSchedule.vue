<template>
	<article class="w-[37.5rem] h-auto rounded-2xl overflow-auto bg-white m-auto mt-7">
	<div class="w-full h-[3.125rem] inline-flex flex-row items-center justify-between px-3">
		<div class="flex items-center justify-between ">
			<!-- EXIT BUTTON START -->
		    <span class="w-[2rem] h-[2rem] rounded-full hover:bg-[#0f14191a] cursor-pointer flex items-center justify-center text-[#2d3136] hoverDuration" 
		    @click="scrollVisibil()">&#10005</span>
		    <!-- EXIT BUTTON END -->
			<span class="ml-[1.7rem]">Schedule</span>
		</div>
		<div class="inline-flex justify-between items-center mr-1">
			<span  class="px-[15px] h-[30px] rounded-[15px] cursor-pointer flex items-center hover:bg-[#0c14191a] mr-4 rounded-full" v-if="date.date.sending"
			 @click="scrollVisibil(), $emit('date', {})">
				<span class="h-[22px] border-b-2 border-black text-[16px] font-medium">Clear</span>
			</span>
			<button class="h-[30px] px-[15px] bg-[#0f1419] text-[13px] font-bold text-white rounded-[2rem]"
			 :disabled="!!showErrorMassage[0]" :class="{'opacity-70': showErrorMassage[0]}" @click="$emit('date', scheduling), scrollVisibil()">
			    <span v-if="!date.date.sending">Confirm</span>
			    <span v-else>Update</span>
		    </button>
		</div>
	</div>
	<div class="w-full h-auto bg-yellow py-3.125">
		<div class="flex flex-col gap-[1.438rem] px-3.75">
			<!-- DATE INFO START -->
			<span class="h-0.5">
				<span class="inline-flex items-center" v-if="!showErrorMassage[1]">
					<Calendar/>
				    <span class="text-[12px] text-[#536471]">{{setTimeInfo}}</span>
				</span>
			</span>
			<!-- DATE INFO END -->
		<div>
		<span class="text-[15px] text-[#536471]">Date</span>
		    <div class="flex flex-row justify-between">
		    	<!-- SELECT MONTH START -->
			    <div class="w-[17rem] sectionMainStyle focusInput relative">
		            <label class="text-[12px] text-[#536471] ml-2" for="date">Mouth</label>
		            <DownArrow/>
		            <select class="sectionStyle" name="date" @change="selectedDate" id="monthParentItem">
			            <option v-for="(month, index) in getMonths" :key="index" id="month" :selected="index == getMonthIndex">{{month}}</option>
		            </select> 
	            </div>
	            <!-- SELECT MONTH END -->
	            <!-- SELECT DAY START -->
			    <div class="w-[7.813rem] sectionMainStyle focusInput relative">
		            <label class="text-[12px] text-[#536471] ml-2" for="date">Day</label>
		            <DownArrow/>
		            <select class="sectionStyle" name="date" @change="selectedDate" id="day">
			            <option v-for="(day, index) in getMonthDay" :key="index" :selected="day == selectedDay">{{formatNumber(day)}}</option>
		            </select>
	            </div>
	            <!-- SELECT DAY END -->
	            <!-- SELECT YEAR START -->
			    <div class="w-[8.938rem] sectionMainStyle focusInput relative">
		            <label class="text-[12px] text-[#536471] ml-2" for="date">Year</label>
		            <DownArrow/>
		            <select class="sectionStyle" name="date" @change="selectedDate" id="year">
			            <option v-for="(year, index) in [2024, 2023, 2022]"  :key="index" :selected="year == selectedYear">{{year}}</option>
		            </select>
	            </div>
	            <!-- SELECT YEAR END -->
		    </div>
		    <span class="text-[14px] text-[#f4212e]">{{errorMassageForDate}}</span>
		</div>
		<!-- TIME SECTION START -->
		<div>
		<span class="text-[15px] text-[#536471]">Time</span>
			<div class="w-auto flex flex-row gap-[11px]">
				<!-- SELECT HOURS START -->
				 <div class="w-[11.375rem] sectionMainStyle focusInput relative">
		            <label class="text-[12px] text-[#536471] ml-2" for="date">Hours</label>
		            <DownArrow/>
		            <select class="sectionStyle" name="date" @change="selectedDate" id="hours">
			            <option v-for="(hours, index) in 24" :key="index" :selected="index == selectedHours">{{formatNumber(hours -1)}}</option>
		            </select> 
	            </div>
	            <!-- SELECT HOURS END -->
	            <!-- SELECT MINUTE START --> 
	            <div class="w-[11.375rem] sectionMainStyle focusInput relative">
		            <label class="text-[12px] text-[#536471] ml-2" for="date">Minute</label>
		            <DownArrow/>
		            <select class="sectionStyle" name="date" @change="selectedDate" id="minute">
			            <option v-for="(minute, index) in 60" :key="index" :selected="index == selectedMinutes">{{formatNumber(minute -1)}}</option>
		            </select> 
	            </div>
	            <!-- SELECT MINUTE END -->
		    </div>
		    <span class="text-[14px] text-[#f4212e]" v-if="showErrorMassage[2]">{{errorMassageForHours}}</span>
		</div>
		<!-- TIME SECTION END -->
		<div class="w-full" >
			<span class="text-[16px] text-[#536471]">Time zone</span>
			<h4>GMT+03:00</h4>
		</div>
		</div>
	</div>
    <div class="w-full h-[2.813rem] px-3.75 border-t border-[#cfd9de]"></div>
</article>
</template>

<script setup>
	import { inject, ref, computed, onMounted, reactive, watch } from 'vue';
	import DownArrow from './icons/DownArrow.vue';
	import Calendar from './icons/NewPostIcons/Calendar.vue';

	const scrollVisibil = inject('scrollVisibil');

	// POST SEND DATE START
	let selectedMinutes = ref();    // Select relist minute
	let selectedHours = ref();     // Select relist hourse
	let selectedDay = ref();      // Select relist day
	let selectedMonth = ref();   // Select relist month
	let selectedYear = ref();   // Select relist year
	let getMonthIndex = ref(); // Get month index

	const scheduling = reactive({
		'info': null,
	    'date': null,
	    'sending': true,
	})

	onMounted(() => currentTime());

	const newDate = ref(new Date());

	// Get date values
	const selectedDate = () => {
		let day = document.querySelector('#day');
		let year = document.querySelector('#year');
		let hours = document.querySelector('#hours');
		let month = document.querySelectorAll('#month');
		let minute = document.querySelector('#minute');
		let monthParentItem = document.querySelectorAll('#monthParentItem');
		selectedDay.value =  day.value;
		selectedYear.value =  year.value;
		selectedHours.value = hours.value;
		selectedMinutes.value =  minute.value;
		month.forEach((item, index) => (item.value == monthParentItem[0].value) ? getMonthIndex.value = index: null);
	};

	// SET NEW DATE START

	// Date prop
	let date = defineProps({date: Object});  
    // Convert date prop to object
	const updateDate = computed(() => {
		if(!date.date.info) return;
		let newDate = new Date(date.date.date);
		let munth = newDate.getMonth() +1;	
		let [, , day, year, watch] = newDate.toString().split(' ');
		let [hours, minutes] = watch.split(':');
		return [year, munth -1, day, hours, minutes].reduce((a, v, i) => ({ ...a, [i]: v}), {});
	})

	// Set new date
	const currentTime = () => {
		let date = newDate.value;
		let dateUpdate = updateDate.value
		selectedYear.value  = dateUpdate?.[0] ?? date.getFullYear();
		getMonthIndex.value = dateUpdate?.[1] ?? date.getMonth();
		selectedDay.value = dateUpdate?.[2] ?? date.getDate();
		selectedHours.value = dateUpdate?.[3] ?? date.getHours();
		selectedMinutes.value = dateUpdate?.[4] ?? date.getMinutes();
	}
	// SET NEW DATE END

	// Date info
	const setTimeInfo = computed(() => {
		let [dayName, month, day, year] = setTime.value.toString().split(' ');
		let info = `Will send on ${dayName}, ${month} ${day}, ${year}  at ${timePeriod.value}`;
		scheduling.info = info;
		return info;
	});

	// Format time period
	const timePeriod = computed(() => {
		let hours = selectedHours.value;
		let minute = selectedMinutes.value;
		let period = hours < 12 ? 'AM': 'PM';
		let formatHours = hours % 12 == 0 ?  12: hours % 12
		return `${formatHours}:${minute} ${period}`
	})

	// Formant number 
	const formatNumber = computed(() => (num) => num < 10 ? '0' + num: num)

	// Release date
	const setTime = computed(() => {
		let date = new Date(selectedYear.value, getMonthIndex.value, selectedDay.value, selectedHours.value, selectedMinutes.value);
		scheduling.date = date;
		return date;
	})

	// Get month with name
	const getMonths = computed(() => {
		let month = [];
		for(let index = 0; index < 12; index++) {
			month.push(new Date(selectedYear.value, index, 1).toLocaleString('en', { month: 'long' }));
		}
		return month;
	});

	// Get number days
	const getMonthDay = computed(() => {
		let day = new Date(selectedYear.value, getMonthIndex.value +1, 0).getDate();
		let days = [];
		for(let i = 1; i <= day; i++){
			days.push(i)
		}
		return days
		console.log('test')
	})

	let errorMassageForDate = ref('');
	let errorMassageForHours = ref('');
	const showErrorMassage = computed(() => {
		let [errorDate, errorHours] = [errorMassageForDate.value, errorMassageForHours.value];
		return [errorDate || errorHours, errorDate && !errorHours, !errorDate && errorHours];
	});
    // Error messages
	watch(() => [selectedYear.value, selectedDay.value, getMonthIndex.value, selectedHours.value, selectedMinutes.value], (value) => {
		let date = newDate.value;
		let [year, day, month, hours, minute] = value;
		let calculateMonthRange = (year - date.getFullYear()) * 12;
		calculateMonthRange -= date.getMonth();
		calculateMonthRange += month;
		let [past, future] = ['You can’t schedule a Tweet to send in the past.', 'You can’t schedule a Tweet more than 18 months in the future.'] 
		 if(calculateMonthRange < 0){
		 	errorMassageForDate.value = past;
		 }else if(calculateMonthRange < 0 == true && day < date.getDate()) {
		 	errorMassageForDate.value = past;
		 }else if(calculateMonthRange == 0 && day < date.getDate()) {
		 	errorMassageForDate.value = past;
		 }else if(calculateMonthRange >= 18){
		 	errorMassageForDate.value = future;
		 }else if(day == date.getDate() && calculateMonthRange == 0 && minute < date.getMinutes()){
		 	errorMassageForHours.value = past;
		 }else if(day == date.getDate() && calculateMonthRange == 0 && hours < date.getHours()){
		 	errorMassageForHours.value = past;
		 }else {
		 	errorMassageForDate.value = '';
		 	errorMassageForHours.value = '';
		 }
	})

	// POST SEND DATE END

</script>