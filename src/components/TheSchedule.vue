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
		<div class="w-[150px] inline-flex justify-between items-center mr-1">
			<span @click="clearDate(), scrollVisibil()"  class="px-[15px] h-[30px] rounded-[15px] cursor-pointer flex items-center hover:bg-[#0c14191a] rounded-full">
				<span class="h-[22px] border-b-2 border-black text-[16px] font-medium ">Clear</span>
			</span>
			<button class="h-[30px] px-[15px] bg-[#0f1419] text-[13px] font-bold text-white rounded-[2rem]" @click="$emit('date', scheduling), scrollVisibil(), scheduling.sending = true">
			    <span v-if="!scheduling.sending">Confirm</span>
			    <span v-else>Update</span>
		    </button>
		</div>
	</div>
	<div class="w-full h-auto bg-yellow py-3.125">
		<div class="flex flex-col gap-[1.438rem] px-3.75">
			<!-- DATE INFO START -->
			<span class="inline-flex items-center">
				<Calendar/>
				<span class="text-[12px] text-[#536471]">{{sendingDateNotification}}</span>
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
			            <option v-for="(day, index) in 30" :key="index" :selected="index == selectedDay">{{formatNumber(day -1)}}</option>
		            </select>
	            </div>
	            <!-- SELECT DAY END -->
	            <!-- SELECT YEAR START -->
			    <div class="w-[8.938rem] sectionMainStyle focusInput relative">
		            <label class="text-[12px] text-[#536471] ml-2" for="date">Year</label>
		            <DownArrow/>
		            <select class="sectionStyle" name="date" @change="selectedDate" id="year">
			            <option v-for="(year, index) in [2022, 2023, 2024]"  :key="index" :selected="year == selectedYear">{{year}}</option>
		            </select>
	            </div>
	            <!-- SELECT YEAR END -->
		    </div>
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
	import { inject, ref, computed, onMounted, reactive } from 'vue';
	import DownArrow from './icons/DownArrow.vue';
	import Calendar from './icons/NewPostIcons/Calendar.vue';

	const scrollVisibil = inject('scrollVisibil');
	const updateDate = inject('updateDate')

	// POST SEND DATE START

	let selectedMinutes = ref();     // Select relist minute
	let selectedHours = ref();    // Select relist hourse
	let selectedDay = ref();      // Select relist day
	let selectedMonth = ref();   // Select relist month
	let selectedYear = ref(); // Select relist year
	let getMonthIndex = ref();  // Get month index

	onMounted(() => currentTime());

	let scheduling = reactive({
		'info': null,
		'time': null,
		'date': null,
		'sending': false,
	})

	const clearDate = () => {
		scheduling.info = null;
		scheduling.time = null;
		scheduling.sending = false
    }

	// Set release date
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
		month.forEach( (item, index) => {
			if(item.value == monthParentItem[0].value) {
				getMonthIndex.value = index
			}
		})
	};

	console.log(updateDate.value)

	// Defult date
	const currentTime = () => {
		let date = new Date();
		selectedYear.value  = updateDate.value?.[0] ?? date.getFullYear() 
		getMonthIndex.value = updateDate.value?.[1]  ?? date.getMonth() +1;
		selectedDay.value = updateDate.value?.[2] ?? date.getDate();
		selectedHours.value = updateDate.value?.[3] ?? date.getHours();
		selectedMinutes.value = updateDate.value?.[4] ?? date.getMinutes();
	}
	// Date preview
	const sendingDateNotification = computed(() => {
		let [dayName, month, day, year] = newDate.value.toString().split(' ');
		let date = `Will send on ${dayName}, ${month} ${day}, ${year}  at ${timePeriod.value}`;
		scheduling.info = date;
		return date;
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
	const formatNumber = computed(() => (num) =>  num < 10 ? '0' + num: num )

	// Release date
	const newDate = computed(() => {
		let date = new Date(selectedYear.value, getMonthIndex.value -1, selectedDay.value, selectedHours.value, selectedMinutes.value);
		scheduling.date = date;
		scheduling.time = Math.abs(new Date() - new Date(date));
		return date;
	})

	// Get munth name
	const getMonths = computed(() => {
		let month = [];
		for(let index = 0; index < 12; index++) {
			month.push(new Date(selectedYear.value, index, 0).toLocaleString('en', { month: 'long' }));
		}
		return month;
		
	});

	// POST SEND DATE END

</script>